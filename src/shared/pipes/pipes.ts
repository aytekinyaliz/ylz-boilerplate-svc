import { PipeTransform, ArgumentMetadata } from "@nestjs/common";

/**
 * Pipes have two typical use cases:
 *   - transformation: transform input data to the desired output
 *   - validation: evaluate input data and if valid, simply pass it through unchanged;
 *     otherwise, throw an exception when the data is incorrect
 *
 * export interface ArgumentMetadata {
 *    type: 'body' | 'query' | 'param' | 'custom';
 *    metatype?: Type<unknown>;
 *    data?: string;
 *  }
 */
export class CourseValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("VALUE:", value);
    console.log("METADATA", metadata);

    return value;
  }
}
