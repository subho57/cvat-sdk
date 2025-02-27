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
import type { WebhookRead } from './webhook-read';

/**
 * 
 * @export
 * @interface PaginatedWebhookReadList
 */
export interface PaginatedWebhookReadList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedWebhookReadList
     */
    'count': number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedWebhookReadList
     */
    'next'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedWebhookReadList
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<WebhookRead>}
     * @memberof PaginatedWebhookReadList
     */
    'results': Array<WebhookRead>;
}

