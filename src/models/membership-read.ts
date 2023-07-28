/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.5.2
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
 * @interface MembershipRead
 */
export interface MembershipRead {
    /**
     * 
     * @type {number}
     * @memberof MembershipRead
     */
    'id'?: number;
    /**
     * 
     * @type {BasicUser}
     * @memberof MembershipRead
     */
    'user': BasicUser;
    /**
     * 
     * @type {number}
     * @memberof MembershipRead
     */
    'organization'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof MembershipRead
     */
    'is_active'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MembershipRead
     */
    'joined_date'?: string | null;
    /**
     * 
     * @type {RoleEnum}
     * @memberof MembershipRead
     */
    'role'?: RoleEnum;
    /**
     * 
     * @type {string}
     * @memberof MembershipRead
     */
    'invitation'?: string;
}



