/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.6.1
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * * `annotation` - ANNOTATION * `validation` - VALIDATION * `completed` - COMPLETED
 * @export
 * @enum {string}
 */

export const JobStatus = {
    Annotation: 'annotation',
    Validation: 'validation',
    Completed: 'completed'
} as const;

export type JobStatus = typeof JobStatus[keyof typeof JobStatus];



