/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.6.1
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { FunctionCallParams } from './function-call-params';

/**
 * 
 * @export
 * @interface FunctionCall
 */
export interface FunctionCall {
    /**
     * Request id
     * @type {string}
     * @memberof FunctionCall
     */
    'id': string;
    /**
     * 
     * @type {FunctionCallParams}
     * @memberof FunctionCall
     */
    'function': FunctionCallParams;
    /**
     * 
     * @type {string}
     * @memberof FunctionCall
     */
    'status': string | null;
    /**
     * 
     * @type {number}
     * @memberof FunctionCall
     */
    'progress'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof FunctionCall
     */
    'enqueued': string | null;
    /**
     * 
     * @type {string}
     * @memberof FunctionCall
     */
    'started': string | null;
    /**
     * 
     * @type {string}
     * @memberof FunctionCall
     */
    'ended': string | null;
    /**
     * 
     * @type {string}
     * @memberof FunctionCall
     */
    'exc_info'?: string | null;
}

