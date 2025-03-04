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
import type { AttributeRequest } from './attribute-request';
// May contain unused imports in some cases
// @ts-ignore
import type { LabelType } from './label-type';

/**
 * 
 * @export
 * @interface SublabelRequest
 */
export interface SublabelRequest {
    /**
     * 
     * @type {number}
     * @memberof SublabelRequest
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof SublabelRequest
     */
    'name': string;
    /**
     * The hex value for the RGB color. Will be generated automatically, unless specified explicitly.
     * @type {string}
     * @memberof SublabelRequest
     */
    'color'?: string;
    /**
     * The list of attributes. If you want to remove an attribute, you need to recreate the label and specify the remaining attributes.
     * @type {Array<AttributeRequest>}
     * @memberof SublabelRequest
     */
    'attributes'?: Array<AttributeRequest>;
    /**
     * Associated annotation type for this label  * `any` - ANY * `cuboid` - CUBOID * `ellipse` - ELLIPSE * `mask` - MASK * `points` - POINTS * `polygon` - POLYGON * `polyline` - POLYLINE * `rectangle` - RECTANGLE * `skeleton` - SKELETON * `tag` - TAG
     * @type {LabelType}
     * @memberof SublabelRequest
     */
    'type'?: LabelType;
    /**
     * 
     * @type {boolean}
     * @memberof SublabelRequest
     */
    'has_parent'?: boolean;
}



