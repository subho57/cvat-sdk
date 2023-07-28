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
import { FileInfo } from './file-info';

/**
 * 
 * @export
 * @interface CloudStorageContent
 */
export interface CloudStorageContent {
    /**
     * This token is used to continue listing files in the bucket.
     * @type {string}
     * @memberof CloudStorageContent
     */
    'next'?: string | null;
    /**
     * 
     * @type {Array<FileInfo>}
     * @memberof CloudStorageContent
     */
    'content': Array<FileInfo>;
}

