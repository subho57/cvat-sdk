/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.8.2
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { LabeledImageRequest } from './labeled-image-request';
// May contain unused imports in some cases
// @ts-ignore
import { LabeledShapeRequest } from './labeled-shape-request';
// May contain unused imports in some cases
// @ts-ignore
import { LabeledTrackRequest } from './labeled-track-request';

/**
 * 
 * @export
 * @interface LabeledDataRequest
 */
export interface LabeledDataRequest {
    /**
     * 
     * @type {number}
     * @memberof LabeledDataRequest
     */
    'version'?: number;
    /**
     * 
     * @type {Array<LabeledImageRequest>}
     * @memberof LabeledDataRequest
     */
    'tags'?: Array<LabeledImageRequest>;
    /**
     * 
     * @type {Array<LabeledShapeRequest>}
     * @memberof LabeledDataRequest
     */
    'shapes'?: Array<LabeledShapeRequest>;
    /**
     * 
     * @type {Array<LabeledTrackRequest>}
     * @memberof LabeledDataRequest
     */
    'tracks'?: Array<LabeledTrackRequest>;
}

