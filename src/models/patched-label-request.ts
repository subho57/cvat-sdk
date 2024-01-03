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
import { AttributeRequest } from './attribute-request';
// May contain unused imports in some cases
// @ts-ignore
import { SublabelRequest } from './sublabel-request';

/**
 * 
 * @export
 * @interface PatchedLabelRequest
 */
export interface PatchedLabelRequest {
    /**
     * 
     * @type {number}
     * @memberof PatchedLabelRequest
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedLabelRequest
     */
    'name'?: string;
    /**
     * The hex value for the RGB color. Will be generated automatically, unless specified explicitly.
     * @type {string}
     * @memberof PatchedLabelRequest
     */
    'color'?: string;
    /**
     * The list of attributes. If you want to remove an attribute, you need to recreate the label and specify the remaining attributes.
     * @type {Array<AttributeRequest>}
     * @memberof PatchedLabelRequest
     */
    'attributes'?: Array<AttributeRequest>;
    /**
     * Delete the label. Only applicable in the PATCH methods of a project or a task.
     * @type {boolean}
     * @memberof PatchedLabelRequest
     */
    'deleted'?: boolean;
    /**
     * Associated annotation type for this label
     * @type {string}
     * @memberof PatchedLabelRequest
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedLabelRequest
     */
    'svg'?: string;
    /**
     * 
     * @type {Array<SublabelRequest>}
     * @memberof PatchedLabelRequest
     */
    'sublabels'?: Array<SublabelRequest>;
}

