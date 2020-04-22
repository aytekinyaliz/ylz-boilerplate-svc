import { models } from "@ylz/data-access";

import { CourseLevel } from "../../domains/constants";

export interface IUpdateInput extends models.IBaseUpdateInput {
  title: string;
  description: string;
  code: string;
  author: string;
  level: CourseLevel;
}
