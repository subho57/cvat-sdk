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
import { QualityReportSummary } from './quality-report-summary';
// May contain unused imports in some cases
// @ts-ignore
import { QualityReportTarget } from './quality-report-target';

/**
 * 
 * @export
 * @interface QualityReport
 */
export interface QualityReport {
    /**
     * 
     * @type {number}
     * @memberof QualityReport
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof QualityReport
     */
    'job_id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof QualityReport
     */
    'task_id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof QualityReport
     */
    'parent_id'?: number | null;
    /**
     * 
     * @type {QualityReportTarget}
     * @memberof QualityReport
     */
    'target': QualityReportTarget;
    /**
     * 
     * @type {QualityReportSummary}
     * @memberof QualityReport
     */
    'summary': QualityReportSummary;
    /**
     * 
     * @type {string}
     * @memberof QualityReport
     */
    'created_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof QualityReport
     */
    'target_last_updated'?: string;
    /**
     * 
     * @type {string}
     * @memberof QualityReport
     */
    'gt_last_updated'?: string;
}



