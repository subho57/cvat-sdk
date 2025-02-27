/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.30.0
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * * `KEY_SECRET_KEY_PAIR` - KEY_SECRET_KEY_PAIR * `ACCOUNT_NAME_TOKEN_PAIR` - ACCOUNT_NAME_TOKEN_PAIR * `KEY_FILE_PATH` - KEY_FILE_PATH * `ANONYMOUS_ACCESS` - ANONYMOUS_ACCESS * `CONNECTION_STRING` - CONNECTION_STRING
 * @export
 * @enum {string}
 */

export const CredentialsTypeEnum = {
    KeySecretKeyPair: 'KEY_SECRET_KEY_PAIR',
    AccountNameTokenPair: 'ACCOUNT_NAME_TOKEN_PAIR',
    KeyFilePath: 'KEY_FILE_PATH',
    AnonymousAccess: 'ANONYMOUS_ACCESS',
    ConnectionString: 'CONNECTION_STRING'
} as const;

export type CredentialsTypeEnum = typeof CredentialsTypeEnum[keyof typeof CredentialsTypeEnum];



