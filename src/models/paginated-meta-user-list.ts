/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.4.9
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { MetaUser } from './meta-user';

/**
 * 
 * @export
 * @interface PaginatedMetaUserList
 */
export interface PaginatedMetaUserList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedMetaUserList
     */
    'count'?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMetaUserList
     */
    'next'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMetaUserList
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<MetaUser>}
     * @memberof PaginatedMetaUserList
     */
    'results'?: Array<MetaUser>;
}

