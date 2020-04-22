import { Controller, Get, Res } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class AppController {
  @Get("health-check")
  healthCheck(): string {
    return "OK";
  }
}
