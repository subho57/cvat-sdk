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



/**
 * 
 * @export
 * @interface BasicUser
 */
export interface BasicUser {
    /**
     * 
     * @type {string}
     * @memberof BasicUser
     */
    'url'?: string;
    /**
     * 
     * @type {number}
     * @memberof BasicUser
     */
    'id'?: number;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     * @type {string}
     * @memberof BasicUser
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof BasicUser
     */
    'first_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof BasicUser
     */
    'last_name'?: string;
}

