import { Module } from "@nestjs/common";

import { MessageController } from "./controllers/MessageController";

@Module({
  imports: [],
  controllers: [MessageController],
  providers: []
})
export class MessageModule {}
