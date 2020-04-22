import { IBaseDocument } from "@ylz/data-access";
// import { IAuditDocument } from "@ylz/data-access";

export interface ICourseDocument extends IBaseDocument {
  //, IAuditDocument {
  readonly title: String;
  readonly description: String;
  readonly code: String;
  readonly author: String;
  readonly level: Number;
}
