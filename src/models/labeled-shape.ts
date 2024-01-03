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
import { AttributeVal } from './attribute-val';
// May contain unused imports in some cases
// @ts-ignore
import { ShapeType } from './shape-type';
// May contain unused imports in some cases
// @ts-ignore
import { SubLabeledShape } from './sub-labeled-shape';

/**
 * 
 * @export
 * @interface LabeledShape
 */
export interface LabeledShape {
    /**
     * 
     * @type {ShapeType}
     * @memberof LabeledShape
     */
    'type': ShapeType;
    /**
     * 
     * @type {boolean}
     * @memberof LabeledShape
     */
    'occluded'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LabeledShape
     */
    'outside'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LabeledShape
     */
    'z_order'?: number;
    /**
     * 
     * @type {number}
     * @memberof LabeledShape
     */
    'rotation'?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof LabeledShape
     */
    'points'?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof LabeledShape
     */
    'id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LabeledShape
     */
    'frame': number;
    /**
     * 
     * @type {number}
     * @memberof LabeledShape
     */
    'label_id': number;
    /**
     * 
     * @type {number}
     * @memberof LabeledShape
     */
    'group'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LabeledShape
     */
    'source'?: string;
    /**
     * 
     * @type {Array<AttributeVal>}
     * @memberof LabeledShape
     */
    'attributes'?: Array<AttributeVal>;
    /**
     * 
     * @type {Array<SubLabeledShape>}
     * @memberof LabeledShape
     */
    'elements'?: Array<SubLabeledShape>;
}



