import { Controller, Logger } from "@nestjs/common";
import { MessagePattern, Client, Transport, ClientProxy } from "@nestjs/microservices";
import { Observable, of, from } from "rxjs";
import { delay } from "rxjs/operators";

@Controller()
export class MessageController {
  private logger = new Logger("MessageController");

  @MessagePattern({ cmd: "get-cumulative" })
  getCumulative(data: number[]): Observable<number> {
    this.logger.debug("cumulative:" + JSON.stringify(data));

    // return (data || [2, 2, 3]).reduce((a, b) => a + b);
    // return of((data || [2, 2, 3]).reduce((a, b) => a + b)).pipe(delay(1000));
    return from([data.reduce((a, b) => a + b), 0]).pipe(delay(500));
  }

  // @Client({ transport: Transport.TCP })
  // client: ClientProxy;

  // @MessagePattern({ cmd: "subscribe-order" })
  // subscribeOrder(data: number[]) {
  //   this.logger.debug("HIT:" + JSON.stringify(data));
  //   return data;
  // }

  // @Post("createOrder")
  // createOrder(@Body() data): Observable<any> {
  //   this.logger.debug("HIT:" + JSON.stringify(data));
  //   return this.client.emit<any, string>({ cmd: "subscribe-order" }, data.name);
  // }

  // @MessagePattern({ cmd: "ping" })
  // ping(_: any) {
  //   return of("pong").pipe(delay(1000));
  // }
}
