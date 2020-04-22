import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { CourseController } from "./controllers/CourseController";
import { CourseDomain } from "./domains/CourseDomain";
import { CourseRepository } from "./repositories/CourseRepository";
import { courseSchema } from "./repositories/courseModel";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Course", schema: courseSchema }])],
  controllers: [CourseController],
  providers: [CourseDomain, CourseRepository]
})
export class CourseModule {}
