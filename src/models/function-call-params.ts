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



/**
 * 
 * @export
 * @interface FunctionCallParams
 */
export interface FunctionCallParams {
    /**
     * The name of the function
     * @type {string}
     * @memberof FunctionCallParams
     */
    'id': string | null;
    /**
     * The id of the task
     * @type {number}
     * @memberof FunctionCallParams
     */
    'task': number | null;
    /**
     * The id of the job
     * @type {number}
     * @memberof FunctionCallParams
     */
    'job'?: number;
    /**
     * 
     * @type {number}
     * @memberof FunctionCallParams
     */
    'threshold': number | null;
}

