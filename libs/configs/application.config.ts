import { INestApplication } from '@nestjs/common';

export function configureApplication<T extends INestApplication>(app: T): T {
  return app;
}
