import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { configureApplication, configureOpenAPI } from '@udtt-libs/configs';
import { AppModule } from '@udtt/app.module';
import { Environment } from '@udtt/commons/environments';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  configureApplication(app);
  configureOpenAPI(app);

  app.enableShutdownHooks();

  const configService = app.get(ConfigService<Environment>);
  const port = configService.get('PORT');

  await app.listen(port);
}

bootstrap();
