// import * as mongoose from "mongoose";
// import { model, Model } from "mongoose";
// import mongooseLeanVirtuals from "mongoose-lean-virtuals";

import { CourseSchema } from "./CourseSchema";
// import { ICourseDocument } from "./ICourseDocument";

/**
 * Home Schema
 */
export const courseSchema = new CourseSchema({
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

/**
 * @typedef Home
 */
// const courseModel: Model<ICourseDocument> = model<ICourseDocument>("Course", courseSchema);

// export default courseModel;
