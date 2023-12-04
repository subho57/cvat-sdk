/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.9.1
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * * `checkbox` - CHECKBOX * `radio` - RADIO * `number` - NUMBER * `text` - TEXT * `select` - SELECT
 * @export
 * @enum {string}
 */

export const InputTypeEnum = {
    Checkbox: 'checkbox',
    Radio: 'radio',
    Number: 'number',
    Text: 'text',
    Select: 'select'
} as const;

export type InputTypeEnum = typeof InputTypeEnum[keyof typeof InputTypeEnum];



