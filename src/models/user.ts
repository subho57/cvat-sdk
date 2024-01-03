/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.9.2
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'url'?: string;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'id'?: number;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     * @type {string}
     * @memberof User
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'first_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'last_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'email'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof User
     */
    'groups': Array<string>;
    /**
     * Designates whether the user can log into this admin site.
     * @type {boolean}
     * @memberof User
     */
    'is_staff'?: boolean;
    /**
     * Designates that this user has all permissions without explicitly assigning them.
     * @type {boolean}
     * @memberof User
     */
    'is_superuser'?: boolean;
    /**
     * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
     * @type {boolean}
     * @memberof User
     */
    'is_active'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'last_login'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'date_joined'?: string;
}

