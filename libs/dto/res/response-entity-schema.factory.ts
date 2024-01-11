import { z } from 'nestjs-zod/z';

export class ResponseEntitySchemaFactory {
  public static OK() {
    return z.object({
      message: z.string(),
      code: z.string(),
      data: z.string(),
    });
  }

  public static OK_WITH<T extends z.ZodRawShape>(data: T) {
    return z.object({
      message: z.string(),
      code: z.string(),
      data: z.object(data),
    });
  }

  public static ERROR() {
    return z.object({
      message: z.string(),
      code: z.string(),
      data: z.string(),
    });
  }

  public static ERROR_WITH<T extends z.ZodRawShape>(data: T) {
    return z.object({
      message: z.string(),
      code: z.string(),
      data: z.object(data),
    });
  }
}
