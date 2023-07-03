/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.4.9
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
import { TrackedShape } from './tracked-shape';

/**
 * 
 * @export
 * @interface SubLabeledTrack
 */
export interface SubLabeledTrack {
    /**
     * 
     * @type {number}
     * @memberof SubLabeledTrack
     */
    'id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubLabeledTrack
     */
    'frame': number;
    /**
     * 
     * @type {number}
     * @memberof SubLabeledTrack
     */
    'label_id': number;
    /**
     * 
     * @type {number}
     * @memberof SubLabeledTrack
     */
    'group'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubLabeledTrack
     */
    'source'?: string;
    /**
     * 
     * @type {Array<TrackedShape>}
     * @memberof SubLabeledTrack
     */
    'shapes': Array<TrackedShape>;
    /**
     * 
     * @type {Array<AttributeVal>}
     * @memberof SubLabeledTrack
     */
    'attributes'?: Array<AttributeVal>;
}

