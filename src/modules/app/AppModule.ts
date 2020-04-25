import { ConnectionOptions } from "mongoose";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

import configuration from "../../config";
import { AppController } from "./controllers/AppController";
import { CourseModule } from "../course/CourseModule";
import { TcpModule } from "../tcp/TcpModule";
import { GrpcModule } from "../grpc/GrpcModule";

const connectionOptions: ConnectionOptions = {
  poolSize: 20,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};
@Module({
  imports: [
    CourseModule, //
    TcpModule,
    GrpcModule,
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    MongooseModule.forRoot(configuration().mongoUrl, connectionOptions)
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
