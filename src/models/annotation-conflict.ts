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
import type { AnnotationConflictTypeEnum } from './annotation-conflict-type-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { AnnotationId } from './annotation-id';
// May contain unused imports in some cases
// @ts-ignore
import type { SeverityEnum } from './severity-enum';

/**
 * 
 * @export
 * @interface AnnotationConflict
 */
export interface AnnotationConflict {
    /**
     * 
     * @type {number}
     * @memberof AnnotationConflict
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof AnnotationConflict
     */
    'frame'?: number;
    /**
     * 
     * @type {AnnotationConflictTypeEnum}
     * @memberof AnnotationConflict
     */
    'type'?: AnnotationConflictTypeEnum;
    /**
     * 
     * @type {Array<AnnotationId>}
     * @memberof AnnotationConflict
     */
    'annotation_ids': Array<AnnotationId>;
    /**
     * 
     * @type {number}
     * @memberof AnnotationConflict
     */
    'report_id'?: number;
    /**
     * 
     * @type {SeverityEnum}
     * @memberof AnnotationConflict
     */
    'severity'?: SeverityEnum;
}



