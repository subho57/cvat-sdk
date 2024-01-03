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
import { BasicUser } from './basic-user';

/**
 * 
 * @export
 * @interface AssetRead
 */
export interface AssetRead {
    /**
     * 
     * @type {string}
     * @memberof AssetRead
     */
    'uuid'?: string;
    /**
     * 
     * @type {string}
     * @memberof AssetRead
     */
    'filename': string;
    /**
     * 
     * @type {string}
     * @memberof AssetRead
     */
    'created_date'?: string;
    /**
     * 
     * @type {BasicUser}
     * @memberof AssetRead
     */
    'owner'?: BasicUser;
    /**
     * 
     * @type {number}
     * @memberof AssetRead
     */
    'guide_id'?: number;
}

