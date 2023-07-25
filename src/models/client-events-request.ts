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
import { EventRequest } from './event-request';

/**
 * 
 * @export
 * @interface ClientEventsRequest
 */
export interface ClientEventsRequest {
    /**
     * 
     * @type {Array<EventRequest>}
     * @memberof ClientEventsRequest
     */
    'events'?: Array<EventRequest>;
    /**
     * 
     * @type {string}
     * @memberof ClientEventsRequest
     */
    'timestamp': string;
}

