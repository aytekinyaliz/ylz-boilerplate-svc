import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { CourseController } from "./controllers/CourseController";
import { CourseDomain } from "./domains/CourseDomain";
import { CourseRepository } from "./repositories/CourseRepository";
import { courseModel } from "./repositories/CourseSchema";

@Module({
  imports: [MongooseModule.forFeature([{ ...courseModel }])],
  controllers: [CourseController],
  providers: [CourseDomain, CourseRepository]
})
export class CourseModule {}
