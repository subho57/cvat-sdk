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


// May contain unused imports in some cases
// @ts-ignore
import type { RequestDataOperation } from './request-data-operation';
// May contain unused imports in some cases
// @ts-ignore
import type { RequestStatus } from './request-status';
// May contain unused imports in some cases
// @ts-ignore
import type { UserIdentifiers } from './user-identifiers';

/**
 * 
 * @export
 * @interface Request
 */
export interface Request {
    /**
     * 
     * @type {RequestStatus}
     * @memberof Request
     */
    'status': RequestStatus;
    /**
     * 
     * @type {string}
     * @memberof Request
     */
    'message'?: string;
    /**
     * 
     * @type {string}
     * @memberof Request
     */
    'id': string;
    /**
     * 
     * @type {RequestDataOperation}
     * @memberof Request
     */
    'operation': RequestDataOperation;
    /**
     * 
     * @type {number}
     * @memberof Request
     */
    'progress'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Request
     */
    'created_date': string;
    /**
     * 
     * @type {string}
     * @memberof Request
     */
    'started_date'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Request
     */
    'finished_date'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Request
     */
    'expiry_date'?: string | null;
    /**
     * 
     * @type {UserIdentifiers}
     * @memberof Request
     */
    'owner'?: UserIdentifiers;
    /**
     * 
     * @type {string}
     * @memberof Request
     */
    'result_url'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Request
     */
    'result_id'?: number | null;
}



