import { SchemaOptions, Model, model } from "mongoose";
import { BaseSchema } from "@ylz/data-access";

class CourseSchema extends BaseSchema {
  constructor(options?: SchemaOptions) {
    const definition = {
      title: {
        type: String,
        trim: true,
        required: [true, "Title is required!"],
        minlength: [2, "Title needs to be at least 2 chars!"]
      },
      description: {
        type: String,
        trim: true,
        required: [true, "Description is required!"],
        minlength: [2, "Description needs to be at least 5 chars!"]
      },
      code: {
        type: String,
        trim: true,
        required: [true, "Description is required!"],
        minlength: [3, "Description needs to be at least 3 chars!"]
      },
      author: {
        type: String,
        trim: true,
        required: [true, "Author is required!"]
      },
      level: {
        type: Number,
        required: [true, "Level is required!"]
      }

      // ...auditSchema
    };

    super(definition, options);
  }
}

/**
 * Home Schema
 */
const courseSchema = new CourseSchema({
  collection: "Courses",
  versionKey: false
});

/**
 * Indicies
 */
courseSchema.index({ code: 1 }, { unique: true });

/**
 * Hooks
 * - pre-save hook
 * - validation
 * - virtual
 */
courseSchema.post("save", function(doc: any, next: any) {
  next();
});

/**
 * Plugins
 */
// courseSchema.plugin(mongooseLeanVirtuals);

/**
 * Methods
 */
courseSchema.methods = {
  // copyToMaterializedView
};

/**
 * Statics
 */
courseSchema.statics = {
  // copyToMaterializedView
};

export const courseModel = {
  name: "Course",
  schema: courseSchema
};
