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
import { JobRead } from './job-read';

/**
 * 
 * @export
 * @interface PaginatedJobReadList
 */
export interface PaginatedJobReadList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedJobReadList
     */
    'count'?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedJobReadList
     */
    'next'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedJobReadList
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<JobRead>}
     * @memberof PaginatedJobReadList
     */
    'results'?: Array<JobRead>;
}

