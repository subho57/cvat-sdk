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



/**
 * 
 * @export
 * @interface BasicUserRequest
 */
export interface BasicUserRequest {
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     * @type {string}
     * @memberof BasicUserRequest
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof BasicUserRequest
     */
    'first_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof BasicUserRequest
     */
    'last_name'?: string;
}

