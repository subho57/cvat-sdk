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
import type { LabelMappingEntryRequest } from './label-mapping-entry-request';

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
     * The id of the task to be annotated
     * @type {number}
     * @memberof FunctionCallRequest
     */
    'task': number;
    /**
     * The id of the job to be annotated
     * @type {number}
     * @memberof FunctionCallRequest
     */
    'job'?: number;
    /**
     * 
     * @type {number}
     * @memberof FunctionCallRequest
     */
    'max_distance'?: number;
    /**
     * 
     * @type {number}
     * @memberof FunctionCallRequest
     */
    'threshold'?: number;
    /**
     * Whether existing annotations should be removed
     * @type {boolean}
     * @memberof FunctionCallRequest
     */
    'cleanup'?: boolean;
    /**
     * Deprecated; use conv_mask_to_poly instead
     * @type {boolean}
     * @memberof FunctionCallRequest
     */
    'convMaskToPoly'?: boolean;
    /**
     * Convert mask shapes to polygons
     * @type {boolean}
     * @memberof FunctionCallRequest
     */
    'conv_mask_to_poly'?: boolean;
    /**
     * Label mapping from the model to the task labels
     * @type {{ [key: string]: LabelMappingEntryRequest; }}
     * @memberof FunctionCallRequest
     */
    'mapping'?: { [key: string]: LabelMappingEntryRequest; };
}

