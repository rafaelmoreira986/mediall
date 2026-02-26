import { z } from "zod";

export const complaintSchema = z
  .object({
    anonimo: z.boolean(),
    nome: z.string().optional(),
    email: z.string().optional(),
    telefone: z.string().optional(),
    departamento: z.string().optional(),
    unidade: z.string().min(1, "Selecione uma unidade"),
    tipo: z.string().min(1, "Selecione o tipo de incidente"),
    dataIncidente: z.string().optional(),
    descricao: z.string().min(20, "Descreva com pelo menos 20 caracteres"),
    declaracao: z.literal(true, {
      errorMap: () => ({ message: "Você deve aceitar a declaração" }),
    }),
  })
  .superRefine((data, ctx) => {
    if (!data.anonimo) {
      if (!data.nome || data.nome.trim().length < 3) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["nome"],
          message: "Nome deve ter ao menos 3 caracteres",
        });
      }
      if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["email"],
          message: "Informe um e-mail válido",
        });
      }
    }
  });

export type ComplaintFormData = z.infer<typeof complaintSchema>;
