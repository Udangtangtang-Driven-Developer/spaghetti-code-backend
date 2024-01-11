import { z } from 'nestjs-zod/z';
import { ZodRawShape, string } from 'zod';

export const createResponseEntitySchema = <T extends ZodRawShape>(data: T) =>
  z.object({ message: string(), code: string(), data: z.object(data) });
