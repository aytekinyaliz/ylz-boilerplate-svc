import { ConfigService } from "@nestjs/config";
import { ValidationPipe, Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import * as compression from "compression";

import { AppModule } from "./modules/app/AppModule";

const logger = new Logger("Main");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      // host: "127.0.0.1",
      port: process.env.MICROSERVICE_PORT
    }
  });

  app.use(compression());
  app.useGlobalPipes(new ValidationPipe());

  await app.startAllMicroservicesAsync();

  await app
    .listen(configService.get("PORT"))
    .then(async () => {
      const ann = `|| App is running at: "${await app.getUrl()}" in "${configService.get("NODE_ENV")}" mode ||`;

      logger.debug(ann.replace(/[^]/g, "-"));
      logger.debug(ann);
      logger.debug(ann.replace(/[^]/g, "-"));
      logger.debug("Press CTRL-C to stop\n");
    })
    .catch(error => {
      logger.error("ERROR WHILE STARTING: ", error);
    });
}
bootstrap();
