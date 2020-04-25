import { Module } from "@nestjs/common";

import { TcpController } from "./controllers/TcpController";

@Module({
  imports: [],
  controllers: [TcpController],
  providers: []
})
export class TcpModule {}
