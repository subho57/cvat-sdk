/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.31.0
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { BasicUser } from './basic-user';
// May contain unused imports in some cases
// @ts-ignore
import type { EventsEnum } from './events-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { WebhookContentType } from './webhook-content-type';
// May contain unused imports in some cases
// @ts-ignore
import type { WebhookType } from './webhook-type';

/**
 * 
 * @export
 * @interface WebhookRead
 */
export interface WebhookRead {
    /**
     * 
     * @type {number}
     * @memberof WebhookRead
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof WebhookRead
     */
    'url'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookRead
     */
    'target_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookRead
     */
    'description'?: string;
    /**
     * 
     * @type {WebhookType}
     * @memberof WebhookRead
     */
    'type': WebhookType;
    /**
     * 
     * @type {WebhookContentType}
     * @memberof WebhookRead
     */
    'content_type': WebhookContentType;
    /**
     * 
     * @type {boolean}
     * @memberof WebhookRead
     */
    'is_active'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WebhookRead
     */
    'enable_ssl'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WebhookRead
     */
    'created_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookRead
     */
    'updated_date'?: string;
    /**
     * 
     * @type {BasicUser}
     * @memberof WebhookRead
     */
    'owner'?: BasicUser | null;
    /**
     * 
     * @type {number}
     * @memberof WebhookRead
     */
    'project_id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof WebhookRead
     */
    'organization'?: number | null;
    /**
     * 
     * @type {Array<EventsEnum>}
     * @memberof WebhookRead
     */
    'events'?: Array<EventsEnum>;
    /**
     * 
     * @type {number}
     * @memberof WebhookRead
     */
    'last_status'?: number;
    /**
     * 
     * @type {string}
     * @memberof WebhookRead
     */
    'last_delivery_date'?: string;
}



