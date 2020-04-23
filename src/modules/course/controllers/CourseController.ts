import { Controller, Get, Param, Post, Body, Delete, Res, UsePipes, Logger, Put, HttpStatus } from "@nestjs/common";

import { CourseDomain } from "../domains/CourseDomain";
import { CreateInput, DeleteInput, GetInput, UpdateInput } from "./models";
import { CourseValidationPipe } from "../../../shared/pipes/pipes";
import { ValidateObjectId } from "src/shared/pipes/ValidateObjectId";

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

    return res.status(HttpStatus.CREATED).json({ id });
  }

  @Put(":id")
  @UsePipes(CourseValidationPipe)
  async update(@Param("id", new ValidateObjectId()) id: string, @Body() course: UpdateInput, @Res() res) {
    this.logger.debug("update: " + id + JSON.stringify(course));

    await this.courseDomain.update({ id, ...course });

    return res.status(HttpStatus.NO_CONTENT).send();
  }

  @Delete(":id")
  async delete(@Param("id", new ValidateObjectId()) id: string, @Res() res) {
    this.logger.debug("delete: " + JSON.stringify(id));

    await this.courseDomain.delete({ id });

    return res.status(HttpStatus.NO_CONTENT).send();
  }
}
