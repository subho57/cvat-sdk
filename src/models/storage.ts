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
import type { LocationEnum } from './location-enum';

/**
 * 
 * @export
 * @interface Storage
 */
export interface Storage {
    /**
     * 
     * @type {number}
     * @memberof Storage
     */
    'id'?: number;
    /**
     * 
     * @type {LocationEnum}
     * @memberof Storage
     */
    'location'?: LocationEnum;
    /**
     * 
     * @type {number}
     * @memberof Storage
     */
    'cloud_storage_id'?: number | null;
}



