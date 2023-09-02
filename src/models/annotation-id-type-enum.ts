/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.6.1
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * * `tag` - TAG * `shape` - SHAPE * `track` - TRACK
 * @export
 * @enum {string}
 */

export const AnnotationIdTypeEnum = {
    Tag: 'tag',
    Shape: 'shape',
    Track: 'track'
} as const;

export type AnnotationIdTypeEnum = typeof AnnotationIdTypeEnum[keyof typeof AnnotationIdTypeEnum];



