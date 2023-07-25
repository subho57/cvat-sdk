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
import { BasicUserRequest } from './basic-user-request';
// May contain unused imports in some cases
// @ts-ignore
import { CredentialsTypeEnum } from './credentials-type-enum';
// May contain unused imports in some cases
// @ts-ignore
import { ProviderTypeEnum } from './provider-type-enum';

/**
 * 
 * @export
 * @interface CloudStorageWriteRequest
 */
export interface CloudStorageWriteRequest {
    /**
     * 
     * @type {ProviderTypeEnum}
     * @memberof CloudStorageWriteRequest
     */
    'provider_type': ProviderTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CloudStorageWriteRequest
     */
    'resource': string;
    /**
     * 
     * @type {string}
     * @memberof CloudStorageWriteRequest
     */
    'display_name': string;
    /**
     * 
     * @type {BasicUserRequest}
     * @memberof CloudStorageWriteRequest
     */
    'owner'?: BasicUserRequest;
    /**
     * 
     * @type {CredentialsTypeEnum}
     * @memberof CloudStorageWriteRequest
     */
    'credentials_type': CredentialsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CloudStorageWriteRequest
     */
    'session_token'?: string;
    /**
     * 
     * @type {string}
     * @memberof CloudStorageWriteRequest
     */
    'account_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof CloudStorageWriteRequest
     */
    'key'?: string;
    /**
     * 
     * @type {string}
     * @memberof CloudStorageWriteRequest
     */
    'secret_key'?: string;
    /**
     * 
     * @type {string}
     * @memberof CloudStorageWriteRequest
     */
    'connection_string'?: string;
    /**
     * 
     * @type {File}
     * @memberof CloudStorageWriteRequest
     */
    'key_file'?: File;
    /**
     * 
     * @type {string}
     * @memberof CloudStorageWriteRequest
     */
    'specific_attributes'?: string;
    /**
     * 
     * @type {string}
     * @memberof CloudStorageWriteRequest
     */
    'description'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CloudStorageWriteRequest
     */
    'manifests'?: Array<string>;
}



