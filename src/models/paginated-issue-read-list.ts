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
import type { IssueRead } from './issue-read';

/**
 * 
 * @export
 * @interface PaginatedIssueReadList
 */
export interface PaginatedIssueReadList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedIssueReadList
     */
    'count': number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedIssueReadList
     */
    'next'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedIssueReadList
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<IssueRead>}
     * @memberof PaginatedIssueReadList
     */
    'results': Array<IssueRead>;
}

