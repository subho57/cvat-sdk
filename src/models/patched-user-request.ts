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
 * @interface PatchedUserRequest
 */
export interface PatchedUserRequest {
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     * @type {string}
     * @memberof PatchedUserRequest
     */
    'username'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedUserRequest
     */
    'first_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedUserRequest
     */
    'last_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedUserRequest
     */
    'email'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PatchedUserRequest
     */
    'groups'?: Array<string>;
    /**
     * Designates whether the user can log into this admin site.
     * @type {boolean}
     * @memberof PatchedUserRequest
     */
    'is_staff'?: boolean;
    /**
     * Designates that this user has all permissions without explicitly assigning them.
     * @type {boolean}
     * @memberof PatchedUserRequest
     */
    'is_superuser'?: boolean;
    /**
     * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
     * @type {boolean}
     * @memberof PatchedUserRequest
     */
    'is_active'?: boolean;
}

