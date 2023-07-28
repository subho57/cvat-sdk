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
 * 
 * @export
 * @interface AnnotationGuideRead
 */
export interface AnnotationGuideRead {
    /**
     * 
     * @type {number}
     * @memberof AnnotationGuideRead
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof AnnotationGuideRead
     */
    'task_id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AnnotationGuideRead
     */
    'project_id'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AnnotationGuideRead
     */
    'created_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof AnnotationGuideRead
     */
    'updated_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof AnnotationGuideRead
     */
    'markdown'?: string;
}

