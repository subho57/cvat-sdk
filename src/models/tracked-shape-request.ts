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
import type { AttributeValRequest } from './attribute-val-request';
// May contain unused imports in some cases
// @ts-ignore
import type { ShapeType } from './shape-type';

/**
 * 
 * @export
 * @interface TrackedShapeRequest
 */
export interface TrackedShapeRequest {
    /**
     * 
     * @type {ShapeType}
     * @memberof TrackedShapeRequest
     */
    'type': ShapeType;
    /**
     * 
     * @type {boolean}
     * @memberof TrackedShapeRequest
     */
    'occluded'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TrackedShapeRequest
     */
    'outside'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TrackedShapeRequest
     */
    'z_order'?: number;
    /**
     * 
     * @type {number}
     * @memberof TrackedShapeRequest
     */
    'rotation'?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof TrackedShapeRequest
     */
    'points'?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof TrackedShapeRequest
     */
    'id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TrackedShapeRequest
     */
    'frame': number;
    /**
     * 
     * @type {Array<AttributeValRequest>}
     * @memberof TrackedShapeRequest
     */
    'attributes'?: Array<AttributeValRequest>;
}



