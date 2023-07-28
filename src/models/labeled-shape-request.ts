/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.5.2
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { AttributeValRequest } from './attribute-val-request';
// May contain unused imports in some cases
// @ts-ignore
import { ShapeType } from './shape-type';
// May contain unused imports in some cases
// @ts-ignore
import { SubLabeledShapeRequest } from './sub-labeled-shape-request';

/**
 * 
 * @export
 * @interface LabeledShapeRequest
 */
export interface LabeledShapeRequest {
    /**
     * 
     * @type {ShapeType}
     * @memberof LabeledShapeRequest
     */
    'type': ShapeType;
    /**
     * 
     * @type {boolean}
     * @memberof LabeledShapeRequest
     */
    'occluded'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LabeledShapeRequest
     */
    'outside'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LabeledShapeRequest
     */
    'z_order'?: number;
    /**
     * 
     * @type {number}
     * @memberof LabeledShapeRequest
     */
    'rotation'?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof LabeledShapeRequest
     */
    'points'?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof LabeledShapeRequest
     */
    'id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LabeledShapeRequest
     */
    'frame': number;
    /**
     * 
     * @type {number}
     * @memberof LabeledShapeRequest
     */
    'label_id': number;
    /**
     * 
     * @type {number}
     * @memberof LabeledShapeRequest
     */
    'group'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LabeledShapeRequest
     */
    'source'?: string;
    /**
     * 
     * @type {Array<AttributeValRequest>}
     * @memberof LabeledShapeRequest
     */
    'attributes'?: Array<AttributeValRequest>;
    /**
     * 
     * @type {Array<SubLabeledShapeRequest>}
     * @memberof LabeledShapeRequest
     */
    'elements'?: Array<SubLabeledShapeRequest>;
}



