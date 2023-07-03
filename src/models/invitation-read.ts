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
import { BasicUser } from './basic-user';
// May contain unused imports in some cases
// @ts-ignore
import { RoleEnum } from './role-enum';

/**
 * 
 * @export
 * @interface InvitationRead
 */
export interface InvitationRead {
    /**
     * 
     * @type {string}
     * @memberof InvitationRead
     */
    'key'?: string;
    /**
     * 
     * @type {string}
     * @memberof InvitationRead
     */
    'created_date'?: string;
    /**
     * 
     * @type {BasicUser}
     * @memberof InvitationRead
     */
    'owner': BasicUser;
    /**
     * 
     * @type {RoleEnum}
     * @memberof InvitationRead
     */
    'role': RoleEnum;
    /**
     * 
     * @type {BasicUser}
     * @memberof InvitationRead
     */
    'user': BasicUser;
    /**
     * 
     * @type {number}
     * @memberof InvitationRead
     */
    'organization': number;
}



