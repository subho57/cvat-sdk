/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.30.0
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { AnnotationIdTypeEnum } from './annotation-id-type-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { ShapeType } from './shape-type';

/**
 * 
 * @export
 * @interface AnnotationId
 */
export interface AnnotationId {
    /**
     * 
     * @type {number}
     * @memberof AnnotationId
     */
    'obj_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof AnnotationId
     */
    'job_id'?: number;
    /**
     * 
     * @type {AnnotationIdTypeEnum}
     * @memberof AnnotationId
     */
    'type'?: AnnotationIdTypeEnum;
    /**
     * 
     * @type {ShapeType}
     * @memberof AnnotationId
     */
    'shape_type'?: ShapeType | null;
}



