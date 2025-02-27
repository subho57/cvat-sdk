/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.30.0
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface SublabelMappingEntryRequest
 */
export interface SublabelMappingEntryRequest {
    /**
     * 
     * @type {string}
     * @memberof SublabelMappingEntryRequest
     */
    'name': string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SublabelMappingEntryRequest
     */
    'attributes'?: { [key: string]: string; };
}

