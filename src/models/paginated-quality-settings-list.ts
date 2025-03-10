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
import type { QualitySettings } from './quality-settings';

/**
 * 
 * @export
 * @interface PaginatedQualitySettingsList
 */
export interface PaginatedQualitySettingsList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedQualitySettingsList
     */
    'count': number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedQualitySettingsList
     */
    'next'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedQualitySettingsList
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<QualitySettings>}
     * @memberof PaginatedQualitySettingsList
     */
    'results': Array<QualitySettings>;
}

