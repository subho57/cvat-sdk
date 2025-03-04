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
import type { LabeledImage } from './labeled-image';
// May contain unused imports in some cases
// @ts-ignore
import type { LabeledShape } from './labeled-shape';
// May contain unused imports in some cases
// @ts-ignore
import type { LabeledTrack } from './labeled-track';

/**
 * 
 * @export
 * @interface LabeledData
 */
export interface LabeledData {
    /**
     * 
     * @type {number}
     * @memberof LabeledData
     */
    'version'?: number;
    /**
     * 
     * @type {Array<LabeledImage>}
     * @memberof LabeledData
     */
    'tags'?: Array<LabeledImage>;
    /**
     * 
     * @type {Array<LabeledShape>}
     * @memberof LabeledData
     */
    'shapes'?: Array<LabeledShape>;
    /**
     * 
     * @type {Array<LabeledTrack>}
     * @memberof LabeledData
     */
    'tracks'?: Array<LabeledTrack>;
}

