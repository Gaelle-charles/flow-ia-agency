import { z } from "zod";

export const contactInputSchema = z.object({
  name: z.string().trim().min(2, "Indiquez votre nom.").max(80, "Le nom est trop long."),
  company: z
    .string()
    .trim()
    .min(2, "Indiquez le nom de votre organisation.")
    .max(120, "Le nom de l’organisation est trop long."),
  role: z
    .string()
    .trim()
    .min(2, "Indiquez votre fonction.")
    .max(120, "La fonction est trop longue."),
  email: z.string().trim().email("Indiquez une adresse email professionnelle valide.").max(160),
  process: z
    .string()
    .trim()
    .min(20, "Décrivez le processus en au moins 20 caractères.")
    .max(1800, "La description du processus est trop longue."),
  tools: z.string().trim().max(600, "La liste des outils est trop longue."),
  impact: z
    .string()
    .trim()
    .min(10, "Précisez brièvement ce qui se passe lorsque le processus fonctionne mal.")
    .max(1000, "La description de l’impact est trop longue."),
  consent: z.literal(true, {
    invalid_type_error: "Confirmez que vous avez lu l’information de confidentialité.",
  }),
  website: z.string().max(0).optional().default(""),
  startedAt: z.number().int().positive(),
});

export type ContactInput = z.infer<typeof contactInputSchema>;
