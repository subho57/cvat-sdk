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
import type { BasicUser } from './basic-user';
// May contain unused imports in some cases
// @ts-ignore
import type { ChunkType } from './chunk-type';
// May contain unused imports in some cases
// @ts-ignore
import type { JobStatus } from './job-status';
// May contain unused imports in some cases
// @ts-ignore
import type { JobsSummary } from './jobs-summary';
// May contain unused imports in some cases
// @ts-ignore
import type { LabelsSummary } from './labels-summary';
// May contain unused imports in some cases
// @ts-ignore
import type { Storage } from './storage';

/**
 * 
 * @export
 * @interface TaskRead
 */
export interface TaskRead {
    /**
     * 
     * @type {string}
     * @memberof TaskRead
     */
    'url'?: string;
    /**
     * 
     * @type {number}
     * @memberof TaskRead
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof TaskRead
     */
    'name'?: string;
    /**
     * 
     * @type {number}
     * @memberof TaskRead
     */
    'project_id'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof TaskRead
     */
    'mode'?: string;
    /**
     * 
     * @type {BasicUser}
     * @memberof TaskRead
     */
    'owner'?: BasicUser | null;
    /**
     * 
     * @type {BasicUser}
     * @memberof TaskRead
     */
    'assignee'?: BasicUser | null;
    /**
     * 
     * @type {string}
     * @memberof TaskRead
     */
    'bug_tracker'?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskRead
     */
    'created_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskRead
     */
    'updated_date'?: string;
    /**
     * 
     * @type {number}
     * @memberof TaskRead
     */
    'overlap'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TaskRead
     */
    'segment_size'?: number;
    /**
     * 
     * @type {JobStatus}
     * @memberof TaskRead
     */
    'status'?: JobStatus;
    /**
     * 
     * @type {number}
     * @memberof TaskRead
     */
    'data_chunk_size'?: number | null;
    /**
     * 
     * @type {ChunkType}
     * @memberof TaskRead
     */
    'data_compressed_chunk_type'?: ChunkType;
    /**
     * 
     * @type {number}
     * @memberof TaskRead
     */
    'guide_id'?: number | null;
    /**
     * 
     * @type {ChunkType}
     * @memberof TaskRead
     */
    'data_original_chunk_type'?: ChunkType;
    /**
     * 
     * @type {number}
     * @memberof TaskRead
     */
    'size'?: number;
    /**
     * 
     * @type {number}
     * @memberof TaskRead
     */
    'image_quality'?: number;
    /**
     * 
     * @type {number}
     * @memberof TaskRead
     */
    'data'?: number;
    /**
     * 
     * @type {string}
     * @memberof TaskRead
     */
    'dimension'?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskRead
     */
    'subset'?: string;
    /**
     * 
     * @type {number}
     * @memberof TaskRead
     */
    'organization'?: number | null;
    /**
     * 
     * @type {Storage}
     * @memberof TaskRead
     */
    'target_storage'?: Storage | null;
    /**
     * 
     * @type {Storage}
     * @memberof TaskRead
     */
    'source_storage'?: Storage | null;
    /**
     * 
     * @type {JobsSummary}
     * @memberof TaskRead
     */
    'jobs': JobsSummary;
    /**
     * 
     * @type {LabelsSummary}
     * @memberof TaskRead
     */
    'labels': LabelsSummary;
    /**
     * 
     * @type {string}
     * @memberof TaskRead
     */
    'assignee_updated_date'?: string | null;
    /**
     * Describes how the task validation is performed. Configured at task creation
     * @type {string}
     * @memberof TaskRead
     */
    'validation_mode'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TaskRead
     */
    'consensus_enabled'?: boolean;
}



