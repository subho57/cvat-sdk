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
import { CloudStorageRead } from './cloud-storage-read';

/**
 * 
 * @export
 * @interface PaginatedCloudStorageReadList
 */
export interface PaginatedCloudStorageReadList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedCloudStorageReadList
     */
    'count'?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedCloudStorageReadList
     */
    'next'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedCloudStorageReadList
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<CloudStorageRead>}
     * @memberof PaginatedCloudStorageReadList
     */
    'results'?: Array<CloudStorageRead>;
}
