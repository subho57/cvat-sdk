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
import type { FrameSelectionMethod } from './frame-selection-method';

/**
 * 
 * @export
 * @interface PatchedTaskValidationLayoutWriteRequest
 */
export interface PatchedTaskValidationLayoutWriteRequest {
    /**
     * The list of frame ids to be excluded from validation 
     * @type {Array<number>}
     * @memberof PatchedTaskValidationLayoutWriteRequest
     */
    'disabled_frames'?: Array<number>;
    /**
     * The method to use for frame selection of new real frames for honeypots in the task   * `random_uniform` - RANDOM_UNIFORM * `random_per_job` - RANDOM_PER_JOB * `manual` - MANUAL
     * @type {FrameSelectionMethod}
     * @memberof PatchedTaskValidationLayoutWriteRequest
     */
    'frame_selection_method'?: FrameSelectionMethod;
    /**
     * The list of frame ids. Applicable only to the \"manual\" frame selection method 
     * @type {Array<number>}
     * @memberof PatchedTaskValidationLayoutWriteRequest
     */
    'honeypot_real_frames'?: Array<number>;
}



