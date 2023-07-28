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



/**
 * * `missing_annotation` - MISSING_ANNOTATION * `extra_annotation` - EXTRA_ANNOTATION * `mismatching_label` - MISMATCHING_LABEL * `low_overlap` - LOW_OVERLAP * `mismatching_direction` - MISMATCHING_DIRECTION * `mismatching_attributes` - MISMATCHING_ATTRIBUTES * `mismatching_groups` - MISMATCHING_GROUPS * `covered_annotation` - COVERED_ANNOTATION
 * @export
 * @enum {string}
 */

export const AnnotationConflictTypeEnum = {
    MissingAnnotation: 'missing_annotation',
    ExtraAnnotation: 'extra_annotation',
    MismatchingLabel: 'mismatching_label',
    LowOverlap: 'low_overlap',
    MismatchingDirection: 'mismatching_direction',
    MismatchingAttributes: 'mismatching_attributes',
    MismatchingGroups: 'mismatching_groups',
    CoveredAnnotation: 'covered_annotation'
} as const;

export type AnnotationConflictTypeEnum = typeof AnnotationConflictTypeEnum[keyof typeof AnnotationConflictTypeEnum];



