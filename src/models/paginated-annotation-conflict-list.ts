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
import { AnnotationConflict } from './annotation-conflict';

/**
 * 
 * @export
 * @interface PaginatedAnnotationConflictList
 */
export interface PaginatedAnnotationConflictList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedAnnotationConflictList
     */
    'count'?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedAnnotationConflictList
     */
    'next'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedAnnotationConflictList
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<AnnotationConflict>}
     * @memberof PaginatedAnnotationConflictList
     */
    'results'?: Array<AnnotationConflict>;
}

