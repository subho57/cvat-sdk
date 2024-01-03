/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.9.2
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { AttributeVal } from './attribute-val';
// May contain unused imports in some cases
// @ts-ignore
import { SubLabeledTrack } from './sub-labeled-track';
// May contain unused imports in some cases
// @ts-ignore
import { TrackedShape } from './tracked-shape';

/**
 * 
 * @export
 * @interface LabeledTrack
 */
export interface LabeledTrack {
    /**
     * 
     * @type {number}
     * @memberof LabeledTrack
     */
    'id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LabeledTrack
     */
    'frame': number;
    /**
     * 
     * @type {number}
     * @memberof LabeledTrack
     */
    'label_id': number;
    /**
     * 
     * @type {number}
     * @memberof LabeledTrack
     */
    'group'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LabeledTrack
     */
    'source'?: string;
    /**
     * 
     * @type {Array<TrackedShape>}
     * @memberof LabeledTrack
     */
    'shapes': Array<TrackedShape>;
    /**
     * 
     * @type {Array<AttributeVal>}
     * @memberof LabeledTrack
     */
    'attributes'?: Array<AttributeVal>;
    /**
     * 
     * @type {Array<SubLabeledTrack>}
     * @memberof LabeledTrack
     */
    'elements'?: Array<SubLabeledTrack>;
}

