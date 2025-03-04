/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.31.0
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * * `job` - JOB * `task` - TASK
 * @export
 * @enum {string}
 */

export const QualityReportTarget = {
    Job: 'job',
    Task: 'task'
} as const;

export type QualityReportTarget = typeof QualityReportTarget[keyof typeof QualityReportTarget];



