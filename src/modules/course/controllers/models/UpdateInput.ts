import { IsNotEmpty } from "class-validator";
import { CourseLevel } from "../../domains/constants";

export class UpdateInput {
  @IsNotEmpty()
  title: string;

  description: string;
  code: string;
  author: string;

  @IsNotEmpty()
  level: CourseLevel;
}
