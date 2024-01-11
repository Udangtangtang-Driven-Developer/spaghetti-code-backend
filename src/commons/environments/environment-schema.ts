import { z } from 'zod';

export const EnvironmentSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z
    .string()
    .transform((v) => parseInt(v, 10))
    .pipe(z.number().min(3000).max(9999)),
});

export type Environment = z.infer<typeof EnvironmentSchema>;
