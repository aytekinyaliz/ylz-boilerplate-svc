import { Model } from "mongoose";
import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { BaseRepository } from "@ylz/data-access";

import { ICourseDocument } from "./ICourseDocument";
import { IListInput, IGetInput, ICreateInput, IDeleteInput, IUpdateInput } from "./models";

@Injectable()
export class CourseRepository extends BaseRepository<ICourseDocument> {
  private logger = new Logger("CourseRepository");

  constructor(@InjectModel("Course") private courseModel: Model<ICourseDocument>) {
    super(courseModel);
  }
  // constructor() {
  //   super(courseModel);
  // }

  list(input?: IListInput): Promise<ICourseDocument[]> {
    this.logger.debug("list: " + JSON.stringify(input));

    return super.list(input);
  }

  get(input: IGetInput): Promise<ICourseDocument> {
    this.logger.debug("get: " + JSON.stringify(input));

    return super.get(input);
  }

  create(input: ICreateInput): Promise<ICourseDocument> {
    this.logger.debug("create: " + JSON.stringify(input));

    try {
      return super.create(input);
    } catch (err) {
      // if (err.code === 11000) {
      //   throw new errors.DuplicateKeyError("The name is in use!");
      // }
      // if (err.name === errors.DbValidationError.name) {
      //   const data = [];
      //   for (const e in err.errors) {
      //     if (err.errors.hasOwnProperty(e)) {
      //       const { message, path, value } = err.errors[e];
      //       data.push({ message, path, value });
      //     }
      //   }
      //   throw new errors.DbValidationError(data);
      // }

      throw err;
    }
  }

  update(input: IUpdateInput): Promise<ICourseDocument> {
    this.logger.debug("update: " + JSON.stringify(input));

    return super.update(input);
  }
  delete(input: IDeleteInput): Promise<ICourseDocument> {
    this.logger.debug("delete: " + JSON.stringify(input));

    return super.delete(input);
  }
}
