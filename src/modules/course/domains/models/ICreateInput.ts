import { models } from "@ylz/data-access";
import { CourseLevel } from "../constants";

export interface ICreateInput extends models.IBaseCreateInput {
  title: string;
  description: string;
  code: string;
  author: string;
  level: CourseLevel;
}
