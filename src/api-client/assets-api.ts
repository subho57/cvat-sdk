/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.5.2
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AssetRead } from '../models';
/**
 * AssetsApi - axios parameter creator
 * @export
 */
export const AssetsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Method saves new asset on the server and attaches it to a corresponding guide
         * @param {File} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetsCreate: async (file?: File, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/assets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication signatureAuth required
            await setApiKeyToObject(localVarQueryParameter, "sign", configuration)

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication tokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            // authentication csrfAuth required

            // authentication sessionAuth required


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Method deletes a specific asset from the server
         * @param {string} uuid A UUID string identifying this asset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetsDestroy: async (uuid: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            assertParamExists('assetsDestroy', 'uuid', uuid)
            const localVarPath = `/api/assets/{uuid}`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication signatureAuth required
            await setApiKeyToObject(localVarQueryParameter, "sign", configuration)

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication tokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            // authentication csrfAuth required

            // authentication sessionAuth required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Method returns an asset file
         * @param {string} uuid A UUID string identifying this asset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetsRetrieve: async (uuid: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            assertParamExists('assetsRetrieve', 'uuid', uuid)
            const localVarPath = `/api/assets/{uuid}`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication signatureAuth required
            await setApiKeyToObject(localVarQueryParameter, "sign", configuration)

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication tokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            // authentication csrfAuth required

            // authentication sessionAuth required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AssetsApi - functional programming interface
 * @export
 */
export const AssetsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AssetsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Method saves new asset on the server and attaches it to a corresponding guide
         * @param {File} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async assetsCreate(file?: File, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AssetRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.assetsCreate(file, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Method deletes a specific asset from the server
         * @param {string} uuid A UUID string identifying this asset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async assetsDestroy(uuid: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.assetsDestroy(uuid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Method returns an asset file
         * @param {string} uuid A UUID string identifying this asset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async assetsRetrieve(uuid: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.assetsRetrieve(uuid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AssetsApi - factory interface
 * @export
 */
export const AssetsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AssetsApiFp(configuration)
    return {
        /**
         * 
         * @summary Method saves new asset on the server and attaches it to a corresponding guide
         * @param {AssetsApiAssetsCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetsCreate(requestParameters: AssetsApiAssetsCreateRequest = {}, options?: AxiosRequestConfig): AxiosPromise<AssetRead> {
            return localVarFp.assetsCreate(requestParameters.file, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Method deletes a specific asset from the server
         * @param {AssetsApiAssetsDestroyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetsDestroy(requestParameters: AssetsApiAssetsDestroyRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.assetsDestroy(requestParameters.uuid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Method returns an asset file
         * @param {AssetsApiAssetsRetrieveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetsRetrieve(requestParameters: AssetsApiAssetsRetrieveRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.assetsRetrieve(requestParameters.uuid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for assetsCreate operation in AssetsApi.
 * @export
 * @interface AssetsApiAssetsCreateRequest
 */
export interface AssetsApiAssetsCreateRequest {
    /**
     * 
     * @type {File}
     * @memberof AssetsApiAssetsCreate
     */
    readonly file?: File
}

/**
 * Request parameters for assetsDestroy operation in AssetsApi.
 * @export
 * @interface AssetsApiAssetsDestroyRequest
 */
export interface AssetsApiAssetsDestroyRequest {
    /**
     * A UUID string identifying this asset.
     * @type {string}
     * @memberof AssetsApiAssetsDestroy
     */
    readonly uuid: string
}

/**
 * Request parameters for assetsRetrieve operation in AssetsApi.
 * @export
 * @interface AssetsApiAssetsRetrieveRequest
 */
export interface AssetsApiAssetsRetrieveRequest {
    /**
     * A UUID string identifying this asset.
     * @type {string}
     * @memberof AssetsApiAssetsRetrieve
     */
    readonly uuid: string
}

/**
 * AssetsApi - object-oriented interface
 * @export
 * @class AssetsApi
 * @extends {BaseAPI}
 */
export class AssetsApi extends BaseAPI {
    /**
     * 
     * @summary Method saves new asset on the server and attaches it to a corresponding guide
     * @param {AssetsApiAssetsCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    public assetsCreate(requestParameters: AssetsApiAssetsCreateRequest = {}, options?: AxiosRequestConfig) {
        return AssetsApiFp(this.configuration).assetsCreate(requestParameters.file, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Method deletes a specific asset from the server
     * @param {AssetsApiAssetsDestroyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    public assetsDestroy(requestParameters: AssetsApiAssetsDestroyRequest, options?: AxiosRequestConfig) {
        return AssetsApiFp(this.configuration).assetsDestroy(requestParameters.uuid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Method returns an asset file
     * @param {AssetsApiAssetsRetrieveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    public assetsRetrieve(requestParameters: AssetsApiAssetsRetrieveRequest, options?: AxiosRequestConfig) {
        return AssetsApiFp(this.configuration).assetsRetrieve(requestParameters.uuid, options).then((request) => request(this.axios, this.basePath));
    }
}

