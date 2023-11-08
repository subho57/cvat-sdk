/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.8.2
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { PatchedLabelRequest } from './patched-label-request';
// May contain unused imports in some cases
// @ts-ignore
import { StorageRequest } from './storage-request';

/**
 * 
 * @export
 * @interface ProjectWriteRequest
 */
export interface ProjectWriteRequest {
    /**
     * 
     * @type {string}
     * @memberof ProjectWriteRequest
     */
    'name': string;
    /**
     * 
     * @type {Array<PatchedLabelRequest>}
     * @memberof ProjectWriteRequest
     */
    'labels'?: Array<PatchedLabelRequest>;
    /**
     * 
     * @type {number}
     * @memberof ProjectWriteRequest
     */
    'owner_id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ProjectWriteRequest
     */
    'assignee_id'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ProjectWriteRequest
     */
    'bug_tracker'?: string;
    /**
     * 
     * @type {StorageRequest}
     * @memberof ProjectWriteRequest
     */
    'target_storage'?: StorageRequest;
    /**
     * 
     * @type {StorageRequest}
     * @memberof ProjectWriteRequest
     */
    'source_storage'?: StorageRequest;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProjectWriteRequest
     */
    'task_subsets'?: Array<string>;
}

