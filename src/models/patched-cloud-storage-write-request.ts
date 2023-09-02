/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.6.1
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
 * @interface PatchedCloudStorageWriteRequest
 */
export interface PatchedCloudStorageWriteRequest {
    /**
     * 
     * @type {ProviderTypeEnum}
     * @memberof PatchedCloudStorageWriteRequest
     */
    'provider_type'?: ProviderTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PatchedCloudStorageWriteRequest
     */
    'resource'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedCloudStorageWriteRequest
     */
    'display_name'?: string;
    /**
     * 
     * @type {BasicUserRequest}
     * @memberof PatchedCloudStorageWriteRequest
     */
    'owner'?: BasicUserRequest;
    /**
     * 
     * @type {CredentialsTypeEnum}
     * @memberof PatchedCloudStorageWriteRequest
     */
    'credentials_type'?: CredentialsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PatchedCloudStorageWriteRequest
     */
    'session_token'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedCloudStorageWriteRequest
     */
    'account_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedCloudStorageWriteRequest
     */
    'key'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedCloudStorageWriteRequest
     */
    'secret_key'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedCloudStorageWriteRequest
     */
    'connection_string'?: string;
    /**
     * 
     * @type {File}
     * @memberof PatchedCloudStorageWriteRequest
     */
    'key_file'?: File;
    /**
     * 
     * @type {string}
     * @memberof PatchedCloudStorageWriteRequest
     */
    'specific_attributes'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedCloudStorageWriteRequest
     */
    'description'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PatchedCloudStorageWriteRequest
     */
    'manifests'?: Array<string>;
}



