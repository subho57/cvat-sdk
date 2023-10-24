/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.8.0
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
import { WebhookType } from './webhook-type';

/**
 * 
 * @export
 * @interface Events
 */
export interface Events {
    /**
     * 
     * @type {WebhookType}
     * @memberof Events
     */
    'webhook_type': WebhookType;
    /**
     * 
     * @type {Array<EventsEnum>}
     * @memberof Events
     */
    'events': Array<EventsEnum>;
}



