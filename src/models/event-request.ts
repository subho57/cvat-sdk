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
 * @interface EventRequest
 */
export interface EventRequest {
    /**
     * 
     * @type {string}
     * @memberof EventRequest
     */
    'scope': string;
    /**
     * 
     * @type {string}
     * @memberof EventRequest
     */
    'obj_name'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof EventRequest
     */
    'obj_id'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof EventRequest
     */
    'obj_val'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventRequest
     */
    'source'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventRequest
     */
    'timestamp': string;
    /**
     * 
     * @type {number}
     * @memberof EventRequest
     */
    'count'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof EventRequest
     */
    'duration'?: number;
    /**
     * 
     * @type {number}
     * @memberof EventRequest
     */
    'project_id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof EventRequest
     */
    'task_id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof EventRequest
     */
    'job_id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof EventRequest
     */
    'user_id'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof EventRequest
     */
    'user_name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventRequest
     */
    'user_email'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof EventRequest
     */
    'org_id'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof EventRequest
     */
    'org_slug'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventRequest
     */
    'payload'?: string | null;
}

