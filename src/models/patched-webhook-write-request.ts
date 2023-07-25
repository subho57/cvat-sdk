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

/**
 * 
 * @export
 * @interface PatchedWebhookWriteRequest
 */
export interface PatchedWebhookWriteRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchedWebhookWriteRequest
     */
    'target_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedWebhookWriteRequest
     */
    'description'?: string;
    /**
     * 
     * @type {WebhookContentType}
     * @memberof PatchedWebhookWriteRequest
     */
    'content_type'?: WebhookContentType;
    /**
     * 
     * @type {string}
     * @memberof PatchedWebhookWriteRequest
     */
    'secret'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedWebhookWriteRequest
     */
    'is_active'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedWebhookWriteRequest
     */
    'enable_ssl'?: boolean;
    /**
     * 
     * @type {Array<EventsEnum>}
     * @memberof PatchedWebhookWriteRequest
     */
    'events'?: Array<EventsEnum>;
}



