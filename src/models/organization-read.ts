/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.8.2
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { BasicUser } from './basic-user';

/**
 * 
 * @export
 * @interface OrganizationRead
 */
export interface OrganizationRead {
    /**
     * 
     * @type {number}
     * @memberof OrganizationRead
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof OrganizationRead
     */
    'slug'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationRead
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationRead
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationRead
     */
    'created_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationRead
     */
    'updated_date'?: string;
    /**
     * 
     * @type {object}
     * @memberof OrganizationRead
     */
    'contact'?: object;
    /**
     * 
     * @type {BasicUser}
     * @memberof OrganizationRead
     */
    'owner': BasicUser | null;
}

