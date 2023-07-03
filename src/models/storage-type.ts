/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.4.9
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * * `cloud_storage` - CLOUD_STORAGE * `local` - LOCAL * `share` - SHARE
 * @export
 * @enum {string}
 */

export const StorageType = {
    CloudStorage: 'cloud_storage',
    Local: 'local',
    Share: 'share'
} as const;

export type StorageType = typeof StorageType[keyof typeof StorageType];



