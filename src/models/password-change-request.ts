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
 * @interface PasswordChangeRequest
 */
export interface PasswordChangeRequest {
    /**
     * 
     * @type {string}
     * @memberof PasswordChangeRequest
     */
    'old_password': string;
    /**
     * 
     * @type {string}
     * @memberof PasswordChangeRequest
     */
    'new_password1': string;
    /**
     * 
     * @type {string}
     * @memberof PasswordChangeRequest
     */
    'new_password2': string;
}

