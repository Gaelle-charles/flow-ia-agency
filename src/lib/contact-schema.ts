import { z } from "zod";

import type { Locale } from "@/lib/locale";

const validationMessages = {
  fr: {
    nameRequired: "Indiquez votre nom.",
    nameLong: "Le nom est trop long.",
    companyRequired: "Indiquez le nom de votre organisation.",
    companyLong: "Le nom de l’organisation est trop long.",
    roleRequired: "Indiquez votre fonction.",
    roleLong: "La fonction est trop longue.",
    email: "Indiquez une adresse email professionnelle valide.",
    processShort: "Décrivez le processus en au moins 20 caractères.",
    processLong: "La description du processus est trop longue.",
    toolsLong: "La liste des outils est trop longue.",
    impactShort: "Précisez brièvement ce qui se passe lorsque le processus fonctionne mal.",
    impactLong: "La description de l’impact est trop longue.",
    consent: "Confirmez que vous avez lu l’information de confidentialité.",
  },
  en: {
    nameRequired: "Enter your name.",
    nameLong: "The name is too long.",
    companyRequired: "Enter your company name.",
    companyLong: "The company name is too long.",
    roleRequired: "Enter your role.",
    roleLong: "The role is too long.",
    email: "Enter a valid work email address.",
    processShort: "Describe the process in at least 20 characters.",
    processLong: "The process description is too long.",
    toolsLong: "The list of tools is too long.",
    impactShort: "Briefly describe what happens when the process breaks down.",
    impactLong: "The impact description is too long.",
    consent: "Confirm that you have read the privacy information.",
  },
} as const;

export function createContactInputSchema(locale: Locale = "fr") {
  const message = validationMessages[locale];

  return z.object({
    name: z.string().trim().min(2, message.nameRequired).max(80, message.nameLong),
    company: z.string().trim().min(2, message.companyRequired).max(120, message.companyLong),
    role: z.string().trim().min(2, message.roleRequired).max(120, message.roleLong),
    email: z.string().trim().email(message.email).max(160),
    process: z.string().trim().min(20, message.processShort).max(1800, message.processLong),
    tools: z.string().trim().max(600, message.toolsLong),
    impact: z.string().trim().min(10, message.impactShort).max(1000, message.impactLong),
    consent: z.literal(true, { invalid_type_error: message.consent }),
    website: z.string().max(0).optional().default(""),
    startedAt: z.number().int().positive(),
  });
}

export const contactInputSchema = createContactInputSchema();

export type ContactInput = z.infer<typeof contactInputSchema>;
