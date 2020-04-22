import { IsNumberString, IsNotEmpty } from "class-validator";

export class DeleteInput {
  @IsNotEmpty()
  id: string;
}
