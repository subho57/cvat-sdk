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
import type { AttributeVal } from './attribute-val';
// May contain unused imports in some cases
// @ts-ignore
import type { ShapeType } from './shape-type';

/**
 * 
 * @export
 * @interface TrackedShape
 */
export interface TrackedShape {
    /**
     * 
     * @type {ShapeType}
     * @memberof TrackedShape
     */
    'type': ShapeType;
    /**
     * 
     * @type {boolean}
     * @memberof TrackedShape
     */
    'occluded'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TrackedShape
     */
    'outside'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TrackedShape
     */
    'z_order'?: number;
    /**
     * 
     * @type {number}
     * @memberof TrackedShape
     */
    'rotation'?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof TrackedShape
     */
    'points'?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof TrackedShape
     */
    'id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TrackedShape
     */
    'frame': number;
    /**
     * 
     * @type {Array<AttributeVal>}
     * @memberof TrackedShape
     */
    'attributes'?: Array<AttributeVal>;
}



