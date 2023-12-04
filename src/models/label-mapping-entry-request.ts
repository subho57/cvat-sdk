/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.9.1
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { SublabelMappingEntryRequest } from './sublabel-mapping-entry-request';

/**
 * 
 * @export
 * @interface LabelMappingEntryRequest
 */
export interface LabelMappingEntryRequest {
    /**
     * 
     * @type {string}
     * @memberof LabelMappingEntryRequest
     */
    'name': string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof LabelMappingEntryRequest
     */
    'attributes'?: { [key: string]: string; };
    /**
     * Label mapping for from the model to the task sublabels within a parent label
     * @type {{ [key: string]: SublabelMappingEntryRequest; }}
     * @memberof LabelMappingEntryRequest
     */
    'sublabels'?: { [key: string]: SublabelMappingEntryRequest; };
}

