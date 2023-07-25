/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.5.1
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface PatchedOrganizationWriteRequest
 */
export interface PatchedOrganizationWriteRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchedOrganizationWriteRequest
     */
    'slug'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOrganizationWriteRequest
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOrganizationWriteRequest
     */
    'description'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof PatchedOrganizationWriteRequest
     */
    'contact'?: { [key: string]: any; };
}

