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


// May contain unused imports in some cases
// @ts-ignore
import type { PatchedLabelRequest } from './patched-label-request';
// May contain unused imports in some cases
// @ts-ignore
import type { StorageRequest } from './storage-request';

/**
 * 
 * @export
 * @interface TaskWriteRequest
 */
export interface TaskWriteRequest {
    /**
     * 
     * @type {string}
     * @memberof TaskWriteRequest
     */
    'name': string;
    /**
     * 
     * @type {number}
     * @memberof TaskWriteRequest
     */
    'project_id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TaskWriteRequest
     */
    'owner_id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TaskWriteRequest
     */
    'assignee_id'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof TaskWriteRequest
     */
    'bug_tracker'?: string;
    /**
     * 
     * @type {number}
     * @memberof TaskWriteRequest
     */
    'overlap'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TaskWriteRequest
     */
    'segment_size'?: number;
    /**
     * 
     * @type {Array<PatchedLabelRequest>}
     * @memberof TaskWriteRequest
     */
    'labels'?: Array<PatchedLabelRequest>;
    /**
     * 
     * @type {string}
     * @memberof TaskWriteRequest
     */
    'subset'?: string;
    /**
     * 
     * @type {StorageRequest}
     * @memberof TaskWriteRequest
     */
    'target_storage'?: StorageRequest | null;
    /**
     * 
     * @type {StorageRequest}
     * @memberof TaskWriteRequest
     */
    'source_storage'?: StorageRequest | null;
    /**
     * The number of consensus replica jobs for each annotation job. Configured at task creation 
     * @type {number}
     * @memberof TaskWriteRequest
     */
    'consensus_replicas'?: number;
}

