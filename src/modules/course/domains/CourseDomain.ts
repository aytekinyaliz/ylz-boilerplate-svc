import { Injectable, Logger } from "@nestjs/common";

import { CourseRepository } from "../repositories/CourseRepository";
import { ICreateInput, IUpdateInput, IDeleteInput } from "./models";

@Injectable()
export class CourseDomain {
  private logger = new Logger("CourseDomain");
  constructor(private courseRepository: CourseRepository) {}

  getAll() {
    this.logger.debug("getAll:");
    return this.courseRepository.list();
  }

  async get(id: string): Promise<any> {
    return new Promise(async resolve => {
      const course = await this.courseRepository.get({ id });

      if (!course) {
        throw Error("Course does not exist!");
        // return reject("Course does not exist!");
        // throw HttpException("Course does not exist!", 404);
      }

      resolve(course);
    });
  }

  async create(input: ICreateInput): Promise<string> {
    this.logger.debug("create: " + JSON.stringify(input));

    const newCourse = await this.courseRepository.create(input);

    return newCourse._id;
  }

  async update(input: IUpdateInput): Promise<string> {
    this.logger.debug("update: " + JSON.stringify(input));

    await this.courseRepository.update(input);

    return;
  }

  delete(input: IDeleteInput): Promise<void> {
    this.logger.debug("delete: " + JSON.stringify(input));

    this.courseRepository.delete(input);

    return;
  }
}
