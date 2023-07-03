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
import { AttributeValRequest } from './attribute-val-request';

/**
 * 
 * @export
 * @interface LabeledImageRequest
 */
export interface LabeledImageRequest {
    /**
     * 
     * @type {number}
     * @memberof LabeledImageRequest
     */
    'id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LabeledImageRequest
     */
    'frame': number;
    /**
     * 
     * @type {number}
     * @memberof LabeledImageRequest
     */
    'label_id': number;
    /**
     * 
     * @type {number}
     * @memberof LabeledImageRequest
     */
    'group'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LabeledImageRequest
     */
    'source'?: string;
    /**
     * 
     * @type {Array<AttributeValRequest>}
     * @memberof LabeledImageRequest
     */
    'attributes'?: Array<AttributeValRequest>;
}

