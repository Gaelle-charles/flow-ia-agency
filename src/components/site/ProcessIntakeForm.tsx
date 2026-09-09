import { type FormEvent, useRef, useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitProcessIntake } from "@/lib/contact";
import { contactInputSchema } from "@/lib/contact-schema";

type FormStatus =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; message: string; reference: string }
  | { state: "error"; message: string };

const fieldClassName =
  "mt-2 min-h-12 rounded-xl border-border bg-background/55 px-4 text-base text-foreground shadow-none placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-accent";

export function ProcessIntakeForm() {
  const startedAt = useRef(Date.now());
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const parsed = contactInputSchema.safeParse({
      name: data.get("name"),
      company: data.get("company"),
      role: data.get("role"),
      email: data.get("email"),
      process: data.get("process"),
      tools: data.get("tools"),
      impact: data.get("impact"),
      consent: data.get("consent") === "on",
      website: data.get("website") ?? "",
      startedAt: startedAt.current,
    });

    if (!parsed.success) {
      setStatus({
        state: "error",
        message: parsed.error.issues[0]?.message ?? "Vérifiez les champs.",
      });
      return;
    }

    setStatus({ state: "submitting" });

    try {
      const result = await submitProcessIntake({ data: parsed.data });
      if (!result.ok) {
        setStatus({ state: "error", message: result.message });
        return;
      }

      setStatus({
        state: "success",
        message: result.message,
        reference: result.reference,
      });
      form.reset();
      startedAt.current = Date.now();
    } catch {
      setStatus({
        state: "error",
        message:
          "La réception n’a pas pu être confirmée. Votre demande n’est pas considérée comme envoyée.",
      });
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} aria-describedby="contact-privacy-note">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-bold text-foreground">
          Prénom et nom
          <Input
            required
            name="name"
            autoComplete="name"
            maxLength={80}
            placeholder="Votre nom"
            className={fieldClassName}
          />
        </label>
        <label className="text-sm font-bold text-foreground">
          Email professionnel
          <Input
            required
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            maxLength={160}
            placeholder="vous@entreprise.fr"
            className={fieldClassName}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-bold text-foreground">
          Entreprise
          <Input
            required
            name="company"
            autoComplete="organization"
            maxLength={120}
            placeholder="Votre organisation"
            className={fieldClassName}
          />
        </label>
        <label className="text-sm font-bold text-foreground">
          Fonction
          <Input
            required
            name="role"
            autoComplete="organization-title"
            maxLength={120}
            placeholder="Votre rôle"
            className={fieldClassName}
          />
        </label>
      </div>

      <label className="block text-sm font-bold text-foreground">
        Quelle opération ralentit votre équipe aujourd’hui ?
        <Textarea
          required
          name="process"
          rows={5}
          minLength={20}
          maxLength={1800}
          placeholder="Décrivez le déclencheur, les étapes, les outils, les exceptions et le résultat à obtenir."
          className={`${fieldClassName} min-h-28 resize-y py-4 leading-7`}
        />
      </label>

      <label className="block text-sm font-bold text-foreground">
        Quels outils ou données sont concernés ?
        <Input
          name="tools"
          maxLength={600}
          placeholder="Excel, Google Workspace, CRM, ERP, base métier…"
          className={fieldClassName}
        />
      </label>

      <label className="block text-sm font-bold text-foreground">
        Quelles conséquences cette situation a-t-elle aujourd’hui ?
        <Textarea
          required
          name="impact"
          rows={3}
          minLength={10}
          maxLength={1000}
          placeholder="Retard, erreur, travail manuel, manque de visibilité…"
          className={`${fieldClassName} min-h-24 resize-y py-4 leading-7`}
        />
      </label>

      <div
        className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label>
          Ne pas remplir ce champ
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="flex items-start gap-3 rounded-2xl border border-border bg-background/45 p-4 text-sm leading-6 text-muted-foreground">
        <input
          required
          name="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-accent)]"
        />
        <span>
          J’accepte que ces informations soient utilisées uniquement pour examiner ma demande et
          préparer un échange.
        </span>
      </label>

      <div id="contact-privacy-note" className="text-sm leading-6 text-muted-foreground">
        <p>
          N’envoyez aucune donnée client, pièce comptable, information personnelle sensible,
          identifiant ou secret d’affaires dans ce formulaire.
        </p>
      </div>

      <Button
        type="submit"
        disabled={status.state === "submitting"}
        className="h-14 w-full rounded-full px-6 text-sm font-bold shadow-none"
      >
        {status.state === "submitting" ? "Envoi en cours" : "Décrire cette opération"}
        {status.state === "submitting" ? (
          <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : null}
      </Button>

      <div aria-live="polite" aria-atomic="true" className="min-h-7">
        {status.state === "success" ? (
          <p className="flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-4 text-sm leading-6 text-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <span>
              {status.message} Référence : <strong>{status.reference}</strong>.
            </span>
          </p>
        ) : null}
        {status.state === "error" ? (
          <p className="rounded-2xl border border-destructive/40 bg-destructive/10 p-4 text-sm leading-6 text-foreground">
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
