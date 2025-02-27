/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.30.0
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { JobStage } from './job-stage';
// May contain unused imports in some cases
// @ts-ignore
import type { OperationStatus } from './operation-status';

/**
 * 
 * @export
 * @interface PatchedJobWriteRequest
 */
export interface PatchedJobWriteRequest {
    /**
     * 
     * @type {number}
     * @memberof PatchedJobWriteRequest
     */
    'assignee'?: number | null;
    /**
     * 
     * @type {JobStage}
     * @memberof PatchedJobWriteRequest
     */
    'stage'?: JobStage;
    /**
     * 
     * @type {OperationStatus}
     * @memberof PatchedJobWriteRequest
     */
    'state'?: OperationStatus;
}



