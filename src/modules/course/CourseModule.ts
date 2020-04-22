import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { CourseController } from "./controllers/CourseController";
import { CourseDomain } from "./domains/CourseDomain";
import { CourseRepository } from "./repositories/CourseRepository";
import { courseSchema as courseSchemaInstance } from "./repositories/courseModel";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Course", schema: courseSchemaInstance }])],
  controllers: [CourseController],
  providers: [CourseDomain, CourseRepository]
})
export class CourseModule {}
