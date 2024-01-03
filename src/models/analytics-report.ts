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
import { AnalyticsReportTargetEnum } from './analytics-report-target-enum';
// May contain unused imports in some cases
// @ts-ignore
import { Metric } from './metric';

/**
 * 
 * @export
 * @interface AnalyticsReport
 */
export interface AnalyticsReport {
    /**
     * 
     * @type {string}
     * @memberof AnalyticsReport
     */
    'created_date': string;
    /**
     * 
     * @type {AnalyticsReportTargetEnum}
     * @memberof AnalyticsReport
     */
    'target': AnalyticsReportTargetEnum;
    /**
     * 
     * @type {number}
     * @memberof AnalyticsReport
     */
    'job_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof AnalyticsReport
     */
    'task_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof AnalyticsReport
     */
    'project_id'?: number;
    /**
     * 
     * @type {Array<Metric>}
     * @memberof AnalyticsReport
     */
    'statistics': Array<Metric>;
}



