import { ConfigService } from "@nestjs/config";
import { ValidationPipe, Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import * as compression from "compression";

import { AppModule } from "./modules/app/AppModule";
import { join } from "path";

const logger = new Logger("Main");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  //#region [TCP, gRPC]
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: process.env.TCP_HOST,
      port: process.env.TCP_PORT
    }
  });

  console.log(join(__dirname, "../src/modules/grpc/protos/grpc.proto"));

  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      package: "grpcModule",
      protoPath: join(__dirname, "../src/modules/grpc/protos/grpc.proto")
    }
  });
  //#endregion

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
