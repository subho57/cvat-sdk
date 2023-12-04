/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.9.1
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { AttributeVal } from './attribute-val';
// May contain unused imports in some cases
// @ts-ignore
import { ShapeType } from './shape-type';

/**
 * 
 * @export
 * @interface SubLabeledShape
 */
export interface SubLabeledShape {
    /**
     * 
     * @type {ShapeType}
     * @memberof SubLabeledShape
     */
    'type': ShapeType;
    /**
     * 
     * @type {boolean}
     * @memberof SubLabeledShape
     */
    'occluded'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubLabeledShape
     */
    'outside'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SubLabeledShape
     */
    'z_order'?: number;
    /**
     * 
     * @type {number}
     * @memberof SubLabeledShape
     */
    'rotation'?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof SubLabeledShape
     */
    'points'?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof SubLabeledShape
     */
    'id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubLabeledShape
     */
    'frame': number;
    /**
     * 
     * @type {number}
     * @memberof SubLabeledShape
     */
    'label_id': number;
    /**
     * 
     * @type {number}
     * @memberof SubLabeledShape
     */
    'group'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubLabeledShape
     */
    'source'?: string;
    /**
     * 
     * @type {Array<AttributeVal>}
     * @memberof SubLabeledShape
     */
    'attributes'?: Array<AttributeVal>;
}



