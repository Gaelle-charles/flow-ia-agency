import { createServerFn } from "@tanstack/react-start";

import brand from "@/content/brand.config.json";
import { contactInputSchema } from "@/lib/contact-schema";

const MINIMUM_COMPLETION_TIME_MS = 2_500;
const MAXIMUM_COMPLETION_TIME_MS = 2 * 60 * 60 * 1_000;
const DELIVERY_TIMEOUT_MS = 8_000;

export const submitProcessIntake = createServerFn({ method: "POST" })
  .validator(contactInputSchema)
  .handler(async ({ data }) => {
    const submissionId = crypto.randomUUID();
    const elapsed = Date.now() - data.startedAt;

    if (
      data.website ||
      elapsed < MINIMUM_COMPLETION_TIME_MS ||
      elapsed > MAXIMUM_COMPLETION_TIME_MS
    ) {
      console.warn("[contact] submission rejected", { submissionId, reason: "anti_spam" });
      return {
        ok: false as const,
        code: "rejected" as const,
        message: "La demande n’a pas pu être vérifiée. Rechargez la page puis réessayez.",
      };
    }

    const webhookUrl = process.env["CONTACT_WEBHOOK_URL"]?.trim();
    if (!webhookUrl) {
      console.warn("[contact] delivery unavailable", { submissionId, reason: "not_configured" });
      return {
        ok: false as const,
        code: "not_configured" as const,
        message:
          "Le formulaire n’est pas encore relié à sa destination. Votre demande n’a pas été envoyée.",
      };
    }

    let destination: URL;
    try {
      destination = new URL(webhookUrl);
    } catch {
      console.error("[contact] invalid delivery configuration", { submissionId });
      return {
        ok: false as const,
        code: "configuration_error" as const,
        message: "Le formulaire est momentanément indisponible. Votre demande n’a pas été envoyée.",
      };
    }

    const isLocalHttp =
      destination.protocol === "http:" &&
      ["127.0.0.1", "localhost", "::1"].includes(destination.hostname);
    if (destination.protocol !== "https:" && !isLocalHttp) {
      console.error("[contact] unsupported delivery protocol", { submissionId });
      return {
        ok: false as const,
        code: "configuration_error" as const,
        message: "Le formulaire est momentanément indisponible. Votre demande n’a pas été envoyée.",
      };
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), DELIVERY_TIMEOUT_MS);
    const token = process.env["CONTACT_WEBHOOK_BEARER_TOKEN"]?.trim();

    try {
      const response = await fetch(destination, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...(token ? { authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          type: "process_intake.created",
          version: 1,
          submissionId,
          submittedAt: new Date().toISOString(),
          source: brand.name,
          contact: {
            name: data.name,
            company: data.company,
            role: data.role,
            email: data.email,
            process: data.process,
            tools: data.tools,
            impact: data.impact,
          },
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        console.error("[contact] delivery failed", { submissionId, status: response.status });
        return {
          ok: false as const,
          code: "delivery_failed" as const,
          message:
            "La destination n’a pas confirmé la réception. Votre demande n’est pas considérée comme envoyée.",
        };
      }

      console.info("[contact] delivery confirmed", { submissionId, status: response.status });
      return {
        ok: true as const,
        reference: submissionId.slice(0, 8).toUpperCase(),
        message:
          "Votre demande a bien été reçue. Nous revenons vers vous après lecture du processus.",
      };
    } catch (error) {
      console.error("[contact] delivery error", {
        submissionId,
        reason: error instanceof Error && error.name === "AbortError" ? "timeout" : "network",
      });
      return {
        ok: false as const,
        code: "delivery_error" as const,
        message:
          "La réception n’a pas pu être confirmée. Votre demande n’est pas considérée comme envoyée.",
      };
    } finally {
      clearTimeout(timeout);
    }
  });
