/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.5.2
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { BasicUser } from './basic-user';
// May contain unused imports in some cases
// @ts-ignore
import { ChunkType } from './chunk-type';
// May contain unused imports in some cases
// @ts-ignore
import { IssuesSummary } from './issues-summary';
// May contain unused imports in some cases
// @ts-ignore
import { JobStage } from './job-stage';
// May contain unused imports in some cases
// @ts-ignore
import { JobStatus } from './job-status';
// May contain unused imports in some cases
// @ts-ignore
import { JobType } from './job-type';
// May contain unused imports in some cases
// @ts-ignore
import { LabelsSummary } from './labels-summary';
// May contain unused imports in some cases
// @ts-ignore
import { OperationStatus } from './operation-status';

/**
 * 
 * @export
 * @interface JobRead
 */
export interface JobRead {
    /**
     * 
     * @type {string}
     * @memberof JobRead
     */
    'url'?: string;
    /**
     * 
     * @type {number}
     * @memberof JobRead
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof JobRead
     */
    'task_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof JobRead
     */
    'project_id'?: number | null;
    /**
     * 
     * @type {BasicUser}
     * @memberof JobRead
     */
    'assignee'?: BasicUser | null;
    /**
     * 
     * @type {number}
     * @memberof JobRead
     */
    'guide_id'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof JobRead
     */
    'dimension'?: string;
    /**
     * 
     * @type {string}
     * @memberof JobRead
     */
    'bug_tracker'?: string | null;
    /**
     * 
     * @type {JobStatus}
     * @memberof JobRead
     */
    'status'?: JobStatus;
    /**
     * 
     * @type {JobStage}
     * @memberof JobRead
     */
    'stage'?: JobStage;
    /**
     * 
     * @type {OperationStatus}
     * @memberof JobRead
     */
    'state'?: OperationStatus;
    /**
     * 
     * @type {string}
     * @memberof JobRead
     */
    'mode'?: string;
    /**
     * 
     * @type {number}
     * @memberof JobRead
     */
    'frame_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof JobRead
     */
    'start_frame'?: number;
    /**
     * 
     * @type {number}
     * @memberof JobRead
     */
    'stop_frame'?: number;
    /**
     * 
     * @type {number}
     * @memberof JobRead
     */
    'data_chunk_size'?: number | null;
    /**
     * 
     * @type {ChunkType}
     * @memberof JobRead
     */
    'data_compressed_chunk_type'?: ChunkType;
    /**
     * 
     * @type {string}
     * @memberof JobRead
     */
    'created_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof JobRead
     */
    'updated_date'?: string;
    /**
     * 
     * @type {IssuesSummary}
     * @memberof JobRead
     */
    'issues': IssuesSummary;
    /**
     * 
     * @type {LabelsSummary}
     * @memberof JobRead
     */
    'labels': LabelsSummary;
    /**
     * 
     * @type {JobType}
     * @memberof JobRead
     */
    'type'?: JobType;
    /**
     * 
     * @type {number}
     * @memberof JobRead
     */
    'organization'?: number | null;
}



