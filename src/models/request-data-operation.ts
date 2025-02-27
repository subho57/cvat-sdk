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
import type { RequestDataOperationTargetEnum } from './request-data-operation-target-enum';

/**
 * 
 * @export
 * @interface RequestDataOperation
 */
export interface RequestDataOperation {
    /**
     * 
     * @type {string}
     * @memberof RequestDataOperation
     */
    'type': string;
    /**
     * 
     * @type {RequestDataOperationTargetEnum}
     * @memberof RequestDataOperation
     */
    'target': RequestDataOperationTargetEnum;
    /**
     * 
     * @type {number}
     * @memberof RequestDataOperation
     */
    'project_id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof RequestDataOperation
     */
    'task_id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof RequestDataOperation
     */
    'job_id'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof RequestDataOperation
     */
    'format'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RequestDataOperation
     */
    'function_id'?: string | null;
}



