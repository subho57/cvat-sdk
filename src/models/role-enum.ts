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



/**
 * * `worker` - Worker * `supervisor` - Supervisor * `maintainer` - Maintainer * `owner` - Owner
 * @export
 * @enum {string}
 */

export const RoleEnum = {
    Worker: 'worker',
    Supervisor: 'supervisor',
    Maintainer: 'maintainer',
    Owner: 'owner'
} as const;

export type RoleEnum = typeof RoleEnum[keyof typeof RoleEnum];



