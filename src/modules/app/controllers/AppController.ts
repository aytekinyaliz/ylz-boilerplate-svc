import { Controller, Get, Logger } from "@nestjs/common";

@Controller()
export class AppController {
  private logger = new Logger("AppController");

  @Get("health-check")
  healthCheck(): string {
    return "OK";
  }

  @Get("version")
  version(): string {
    let version = "0.0.0";
    try {
      const pjson = require("../../../../package.json");
      version = pjson.version;
    } catch (err) {
      this.logger.error(err);
    }

    return version;
  }
}
