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
import type { ValidationMode } from './validation-mode';

/**
 * 
 * @export
 * @interface TaskValidationLayoutRead
 */
export interface TaskValidationLayoutRead {
    /**
     * 
     * @type {ValidationMode}
     * @memberof TaskValidationLayoutRead
     */
    'mode'?: ValidationMode | null;
    /**
     * 
     * @type {number}
     * @memberof TaskValidationLayoutRead
     */
    'frames_per_job_count'?: number | null;
    /**
     * The list of frame ids to be used for validation 
     * @type {Array<number>}
     * @memberof TaskValidationLayoutRead
     */
    'validation_frames'?: Array<number>;
    /**
     * The list of frame ids excluded from validation 
     * @type {Array<number>}
     * @memberof TaskValidationLayoutRead
     */
    'disabled_frames'?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof TaskValidationLayoutRead
     */
    'honeypot_count'?: number;
    /**
     * The list of frame ids for all honeypots in the task 
     * @type {Array<number>}
     * @memberof TaskValidationLayoutRead
     */
    'honeypot_frames'?: Array<number>;
    /**
     * The list of real (validation) frame ids for all honeypots in the task 
     * @type {Array<number>}
     * @memberof TaskValidationLayoutRead
     */
    'honeypot_real_frames'?: Array<number>;
}



