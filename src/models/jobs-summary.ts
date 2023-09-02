/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.6.1
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface JobsSummary
 */
export interface JobsSummary {
    /**
     * 
     * @type {number}
     * @memberof JobsSummary
     */
    'count'?: number;
    /**
     * 
     * @type {number}
     * @memberof JobsSummary
     */
    'completed': number | null;
    /**
     * 
     * @type {number}
     * @memberof JobsSummary
     */
    'validation': number | null;
    /**
     * 
     * @type {string}
     * @memberof JobsSummary
     */
    'url'?: string;
}

