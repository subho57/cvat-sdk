/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.9.2
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
 * @interface PatchedProjectWriteRequest
 */
export interface PatchedProjectWriteRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchedProjectWriteRequest
     */
    'name'?: string;
    /**
     * 
     * @type {Array<PatchedLabelRequest>}
     * @memberof PatchedProjectWriteRequest
     */
    'labels'?: Array<PatchedLabelRequest>;
    /**
     * 
     * @type {number}
     * @memberof PatchedProjectWriteRequest
     */
    'owner_id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedProjectWriteRequest
     */
    'assignee_id'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedProjectWriteRequest
     */
    'bug_tracker'?: string;
    /**
     * 
     * @type {StorageRequest}
     * @memberof PatchedProjectWriteRequest
     */
    'target_storage'?: StorageRequest;
    /**
     * 
     * @type {StorageRequest}
     * @memberof PatchedProjectWriteRequest
     */
    'source_storage'?: StorageRequest;
    /**
     * 
     * @type {Array<string>}
     * @memberof PatchedProjectWriteRequest
     */
    'task_subsets'?: Array<string>;
}

