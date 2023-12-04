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
import { DatasetFormat } from './dataset-format';

/**
 * 
 * @export
 * @interface DatasetFormats
 */
export interface DatasetFormats {
    /**
     * 
     * @type {Array<DatasetFormat>}
     * @memberof DatasetFormats
     */
    'importers': Array<DatasetFormat>;
    /**
     * 
     * @type {Array<DatasetFormat>}
     * @memberof DatasetFormats
     */
    'exporters': Array<DatasetFormat>;
}

