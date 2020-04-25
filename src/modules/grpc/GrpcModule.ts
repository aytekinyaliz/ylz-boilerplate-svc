import { Module } from "@nestjs/common";

import { GrpcController } from "./controllers/GrpcController";

@Module({
  imports: [],
  controllers: [GrpcController],
  providers: []
})
export class GrpcModule {}
