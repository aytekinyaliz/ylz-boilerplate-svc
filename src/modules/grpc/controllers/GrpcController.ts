import { Controller, Logger } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";

import { IFindMaxOutput, IFindMaxInput } from "./models";
import { from, Observable } from "rxjs";

@Controller()
export class GrpcController {
  private logger = new Logger("GrpcController");

  @GrpcMethod()
  findMax(input: IFindMaxInput): IFindMaxOutput {
    this.logger.debug("findMax: " + JSON.stringify(input));

    const max = input.data.reduce((acc, curr) => (acc > curr ? acc : curr));

    return { max };
  }
}
