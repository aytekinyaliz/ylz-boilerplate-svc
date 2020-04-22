import { IsNotEmpty } from "class-validator";

export class GetInput {
  @IsNotEmpty()
  id: string;
}
