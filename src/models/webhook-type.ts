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



/**
 * * `organization` - ORGANIZATION * `project` - PROJECT
 * @export
 * @enum {string}
 */

export const WebhookType = {
    Organization: 'organization',
    Project: 'project'
} as const;

export type WebhookType = typeof WebhookType[keyof typeof WebhookType];



