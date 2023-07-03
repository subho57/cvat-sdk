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


// May contain unused imports in some cases
// @ts-ignore
import { RoleEnum } from './role-enum';

/**
 * 
 * @export
 * @interface InvitationWriteRequest
 */
export interface InvitationWriteRequest {
    /**
     * 
     * @type {RoleEnum}
     * @memberof InvitationWriteRequest
     */
    'role': RoleEnum;
    /**
     * 
     * @type {string}
     * @memberof InvitationWriteRequest
     */
    'email': string;
}



