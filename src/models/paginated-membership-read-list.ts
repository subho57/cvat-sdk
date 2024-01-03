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


// May contain unused imports in some cases
// @ts-ignore
import { MembershipRead } from './membership-read';

/**
 * 
 * @export
 * @interface PaginatedMembershipReadList
 */
export interface PaginatedMembershipReadList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedMembershipReadList
     */
    'count'?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMembershipReadList
     */
    'next'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMembershipReadList
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<MembershipRead>}
     * @memberof PaginatedMembershipReadList
     */
    'results'?: Array<MembershipRead>;
}

