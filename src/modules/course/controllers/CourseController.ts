import { Controller, Get, Param, Post, Body, Delete, Res, UsePipes, Logger, Put } from "@nestjs/common";

import { CourseDomain } from "../domains/CourseDomain";
import { CreateInput, DeleteInput, GetInput, UpdateInput } from "./models";
import { CourseValidationPipe } from "./pipes";

@Controller("courses")
export class CourseController {
  private logger = new Logger("CourseController");

  constructor(private courseDomain: CourseDomain) {}

  @Get()
  getAll() {
    this.logger.log("getAll");
    return this.courseDomain.getAll();
  }

  @Get(":id")
  get(@Param() params: GetInput) {
    this.logger.debug("get: " + JSON.stringify(params));

    return this.courseDomain.get(params.id);
  }

  @Post()
  @UsePipes(CourseValidationPipe)
  async create(@Body() course: CreateInput, @Res() res) {
    this.logger.debug("create: " + JSON.stringify(course));

    const id = await this.courseDomain.create(course);

    return res.status(201).json({ id });
  }

  @Put(":id")
  @UsePipes(CourseValidationPipe)
  async update(@Param() params: GetInput, @Body() course: UpdateInput, @Res() res) {
    this.logger.debug("update: " + JSON.stringify(course));

    await this.courseDomain.update({ ...params, ...course });

    return res.status(204).send();
  }

  @Delete(":id")
  delete(@Param() params: DeleteInput) {
    this.logger.debug("delete: " + JSON.stringify(params));

    return this.courseDomain.delete(params);
  }
}
