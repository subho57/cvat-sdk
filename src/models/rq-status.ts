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
import type { RqStatusStateEnum } from './rq-status-state-enum';

/**
 * 
 * @export
 * @interface RqStatus
 */
export interface RqStatus {
    /**
     * 
     * @type {RqStatusStateEnum}
     * @memberof RqStatus
     */
    'state': RqStatusStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RqStatus
     */
    'message'?: string;
    /**
     * 
     * @type {number}
     * @memberof RqStatus
     */
    'progress'?: number;
}



