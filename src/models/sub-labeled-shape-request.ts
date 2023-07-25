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
import { AttributeValRequest } from './attribute-val-request';
// May contain unused imports in some cases
// @ts-ignore
import { ShapeType } from './shape-type';

/**
 * 
 * @export
 * @interface SubLabeledShapeRequest
 */
export interface SubLabeledShapeRequest {
    /**
     * 
     * @type {ShapeType}
     * @memberof SubLabeledShapeRequest
     */
    'type': ShapeType;
    /**
     * 
     * @type {boolean}
     * @memberof SubLabeledShapeRequest
     */
    'occluded'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubLabeledShapeRequest
     */
    'outside'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SubLabeledShapeRequest
     */
    'z_order'?: number;
    /**
     * 
     * @type {number}
     * @memberof SubLabeledShapeRequest
     */
    'rotation'?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof SubLabeledShapeRequest
     */
    'points'?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof SubLabeledShapeRequest
     */
    'id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubLabeledShapeRequest
     */
    'frame': number;
    /**
     * 
     * @type {number}
     * @memberof SubLabeledShapeRequest
     */
    'label_id': number;
    /**
     * 
     * @type {number}
     * @memberof SubLabeledShapeRequest
     */
    'group'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubLabeledShapeRequest
     */
    'source'?: string;
    /**
     * 
     * @type {Array<AttributeValRequest>}
     * @memberof SubLabeledShapeRequest
     */
    'attributes'?: Array<AttributeValRequest>;
}



