/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.5.2
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { QualityReport } from './quality-report';

/**
 * 
 * @export
 * @interface PaginatedQualityReportList
 */
export interface PaginatedQualityReportList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedQualityReportList
     */
    'count'?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedQualityReportList
     */
    'next'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedQualityReportList
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<QualityReport>}
     * @memberof PaginatedQualityReportList
     */
    'results'?: Array<QualityReport>;
}

