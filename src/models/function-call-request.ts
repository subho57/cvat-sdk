/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.5.1
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { QualityEnum } from './quality-enum';

/**
 * 
 * @export
 * @interface FunctionCallRequest
 */
export interface FunctionCallRequest {
    /**
     * The name of the function to execute
     * @type {string}
     * @memberof FunctionCallRequest
     */
    'function': string;
    /**
     * The id of the task to annotate
     * @type {number}
     * @memberof FunctionCallRequest
     */
    'task': number;
    /**
     * The id of the job to annotate
     * @type {number}
     * @memberof FunctionCallRequest
     */
    'job'?: number;
    /**
     * 
     * @type {QualityEnum}
     * @memberof FunctionCallRequest
     */
    'quality'?: QualityEnum;
    /**
     * 
     * @type {boolean}
     * @memberof FunctionCallRequest
     */
    'cleanup'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FunctionCallRequest
     */
    'convMaskToPoly'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FunctionCallRequest
     */
    'threshold'?: number;
    /**
     * Label mapping from the model to the task labels
     * @type {{ [key: string]: { [key: string]: any; }; }}
     * @memberof FunctionCallRequest
     */
    'mapping'?: { [key: string]: { [key: string]: any; }; };
    /**
     * 
     * @type {number}
     * @memberof FunctionCallRequest
     */
    'max_distance'?: number;
}



