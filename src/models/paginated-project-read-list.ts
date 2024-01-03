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
import { ProjectRead } from './project-read';

/**
 * 
 * @export
 * @interface PaginatedProjectReadList
 */
export interface PaginatedProjectReadList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedProjectReadList
     */
    'count'?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedProjectReadList
     */
    'next'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedProjectReadList
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<ProjectRead>}
     * @memberof PaginatedProjectReadList
     */
    'results'?: Array<ProjectRead>;
}

