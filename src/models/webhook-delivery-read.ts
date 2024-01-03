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



/**
 * 
 * @export
 * @interface WebhookDeliveryRead
 */
export interface WebhookDeliveryRead {
    /**
     * 
     * @type {number}
     * @memberof WebhookDeliveryRead
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof WebhookDeliveryRead
     */
    'webhook_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof WebhookDeliveryRead
     */
    'event'?: string;
    /**
     * 
     * @type {number}
     * @memberof WebhookDeliveryRead
     */
    'status_code'?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof WebhookDeliveryRead
     */
    'redelivery'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WebhookDeliveryRead
     */
    'created_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookDeliveryRead
     */
    'updated_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookDeliveryRead
     */
    'changed_fields'?: string;
    /**
     * 
     * @type {object}
     * @memberof WebhookDeliveryRead
     */
    'request'?: object;
    /**
     * 
     * @type {object}
     * @memberof WebhookDeliveryRead
     */
    'response'?: object;
}

