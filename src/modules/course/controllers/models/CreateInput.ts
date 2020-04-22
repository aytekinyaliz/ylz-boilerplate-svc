import { IsNotEmpty, IsEnum } from "class-validator";
import { CourseLevel } from "../../domains/constants";

export class CreateInput {
  @IsNotEmpty()
  title: string;

  description: string;
  code: string;
  author: string;

  @IsNotEmpty()
  @IsEnum(CourseLevel)
  level: CourseLevel;
}
