/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.4.9
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface FrameMeta
 */
export interface FrameMeta {
    /**
     * 
     * @type {number}
     * @memberof FrameMeta
     */
    'width': number;
    /**
     * 
     * @type {number}
     * @memberof FrameMeta
     */
    'height': number;
    /**
     * 
     * @type {string}
     * @memberof FrameMeta
     */
    'name': string;
    /**
     * 
     * @type {number}
     * @memberof FrameMeta
     */
    'related_files': number;
    /**
     * 
     * @type {boolean}
     * @memberof FrameMeta
     */
    'has_related_context'?: boolean;
}
