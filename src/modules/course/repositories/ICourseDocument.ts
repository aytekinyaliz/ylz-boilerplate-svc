import { IBaseDocument } from "@ylz/data-access";
// import { IAuditDocument } from "@ylz/data-access";

export interface ICourseDocument extends IBaseDocument {
  //, IAuditDocument {
  readonly title: string;
  readonly description: string;
  readonly code: string;
  readonly author: string;
  readonly level: number;
}
