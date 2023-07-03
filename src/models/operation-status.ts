/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.4.9
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * * `new` - NEW * `in progress` - IN_PROGRESS * `completed` - COMPLETED * `rejected` - REJECTED
 * @export
 * @enum {string}
 */

export const OperationStatus = {
    New: 'new',
    InProgress: 'in progress',
    Completed: 'completed',
    Rejected: 'rejected'
} as const;

export type OperationStatus = typeof OperationStatus[keyof typeof OperationStatus];


