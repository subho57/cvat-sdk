/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.5.1
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { EventsEnum } from './events-enum';
// May contain unused imports in some cases
// @ts-ignore
import { WebhookContentType } from './webhook-content-type';
// May contain unused imports in some cases
// @ts-ignore
import { WebhookType } from './webhook-type';

/**
 * 
 * @export
 * @interface WebhookWriteRequest
 */
export interface WebhookWriteRequest {
    /**
     * 
     * @type {string}
     * @memberof WebhookWriteRequest
     */
    'target_url': string;
    /**
     * 
     * @type {string}
     * @memberof WebhookWriteRequest
     */
    'description'?: string;
    /**
     * 
     * @type {WebhookType}
     * @memberof WebhookWriteRequest
     */
    'type': WebhookType;
    /**
     * 
     * @type {WebhookContentType}
     * @memberof WebhookWriteRequest
     */
    'content_type'?: WebhookContentType;
    /**
     * 
     * @type {string}
     * @memberof WebhookWriteRequest
     */
    'secret'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof WebhookWriteRequest
     */
    'is_active'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WebhookWriteRequest
     */
    'enable_ssl'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof WebhookWriteRequest
     */
    'project_id'?: number | null;
    /**
     * 
     * @type {Array<EventsEnum>}
     * @memberof WebhookWriteRequest
     */
    'events': Array<EventsEnum>;
}



