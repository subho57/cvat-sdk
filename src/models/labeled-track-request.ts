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


// May contain unused imports in some cases
// @ts-ignore
import { AttributeValRequest } from './attribute-val-request';
// May contain unused imports in some cases
// @ts-ignore
import { SubLabeledTrackRequest } from './sub-labeled-track-request';
// May contain unused imports in some cases
// @ts-ignore
import { TrackedShapeRequest } from './tracked-shape-request';

/**
 * 
 * @export
 * @interface LabeledTrackRequest
 */
export interface LabeledTrackRequest {
    /**
     * 
     * @type {number}
     * @memberof LabeledTrackRequest
     */
    'id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LabeledTrackRequest
     */
    'frame': number;
    /**
     * 
     * @type {number}
     * @memberof LabeledTrackRequest
     */
    'label_id': number;
    /**
     * 
     * @type {number}
     * @memberof LabeledTrackRequest
     */
    'group'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LabeledTrackRequest
     */
    'source'?: string;
    /**
     * 
     * @type {Array<TrackedShapeRequest>}
     * @memberof LabeledTrackRequest
     */
    'shapes': Array<TrackedShapeRequest>;
    /**
     * 
     * @type {Array<AttributeValRequest>}
     * @memberof LabeledTrackRequest
     */
    'attributes'?: Array<AttributeValRequest>;
    /**
     * 
     * @type {Array<SubLabeledTrackRequest>}
     * @memberof LabeledTrackRequest
     */
    'elements'?: Array<SubLabeledTrackRequest>;
}

