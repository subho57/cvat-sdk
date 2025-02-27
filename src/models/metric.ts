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
import type { DataFrame } from './data-frame';
// May contain unused imports in some cases
// @ts-ignore
import type { DefaultViewEnum } from './default-view-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { GranularityEnum } from './granularity-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { Transformation } from './transformation';

/**
 * 
 * @export
 * @interface Metric
 */
export interface Metric {
    /**
     * 
     * @type {string}
     * @memberof Metric
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof Metric
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof Metric
     */
    'description': string;
    /**
     * 
     * @type {GranularityEnum}
     * @memberof Metric
     */
    'granularity'?: GranularityEnum | null;
    /**
     * 
     * @type {DefaultViewEnum}
     * @memberof Metric
     */
    'default_view': DefaultViewEnum;
    /**
     * 
     * @type {{ [key: string]: Array<DataFrame>; }}
     * @memberof Metric
     */
    'data_series': { [key: string]: Array<DataFrame>; };
    /**
     * 
     * @type {Array<Transformation>}
     * @memberof Metric
     */
    'transformations': Array<Transformation>;
}



