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
import { About } from '../models';
// @ts-ignore
import { DatasetFormats } from '../models';
// @ts-ignore
import { FileInfo } from '../models';
// @ts-ignore
import { Plugins } from '../models';
/**
 * ServerApi - axios parameter creator
 * @export
 */
export const ServerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Returns all files and folders that are on the server along specified path
         * @param {string} [directory] Directory to browse
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serverListShare: async (directory?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/server/share`;
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

            if (directory !== undefined) {
                localVarQueryParameter['directory'] = directory;
            }


    
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
         * @summary Method provides basic CVAT information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serverRetrieveAbout: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/server/about`;
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
        /**
         * 
         * @summary Method provides the list of supported annotations formats
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serverRetrieveAnnotationFormats: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/server/annotation/formats`;
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
        /**
         * 
         * @summary Method provides allowed plugins
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serverRetrievePlugins: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/server/plugins`;
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
 * ServerApi - functional programming interface
 * @export
 */
export const ServerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ServerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Returns all files and folders that are on the server along specified path
         * @param {string} [directory] Directory to browse
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async serverListShare(directory?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<FileInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.serverListShare(directory, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Method provides basic CVAT information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async serverRetrieveAbout(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<About>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.serverRetrieveAbout(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Method provides the list of supported annotations formats
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async serverRetrieveAnnotationFormats(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DatasetFormats>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.serverRetrieveAnnotationFormats(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Method provides allowed plugins
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async serverRetrievePlugins(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Plugins>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.serverRetrievePlugins(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ServerApi - factory interface
 * @export
 */
export const ServerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ServerApiFp(configuration)
    return {
        /**
         * 
         * @summary Returns all files and folders that are on the server along specified path
         * @param {ServerApiServerListShareRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serverListShare(requestParameters: ServerApiServerListShareRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<FileInfo>> {
            return localVarFp.serverListShare(requestParameters.directory, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Method provides basic CVAT information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serverRetrieveAbout(options?: AxiosRequestConfig): AxiosPromise<About> {
            return localVarFp.serverRetrieveAbout(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Method provides the list of supported annotations formats
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serverRetrieveAnnotationFormats(options?: AxiosRequestConfig): AxiosPromise<DatasetFormats> {
            return localVarFp.serverRetrieveAnnotationFormats(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Method provides allowed plugins
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serverRetrievePlugins(options?: AxiosRequestConfig): AxiosPromise<Plugins> {
            return localVarFp.serverRetrievePlugins(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for serverListShare operation in ServerApi.
 * @export
 * @interface ServerApiServerListShareRequest
 */
export interface ServerApiServerListShareRequest {
    /**
     * Directory to browse
     * @type {string}
     * @memberof ServerApiServerListShare
     */
    readonly directory?: string
}

/**
 * ServerApi - object-oriented interface
 * @export
 * @class ServerApi
 * @extends {BaseAPI}
 */
export class ServerApi extends BaseAPI {
    /**
     * 
     * @summary Returns all files and folders that are on the server along specified path
     * @param {ServerApiServerListShareRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServerApi
     */
    public serverListShare(requestParameters: ServerApiServerListShareRequest = {}, options?: AxiosRequestConfig) {
        return ServerApiFp(this.configuration).serverListShare(requestParameters.directory, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Method provides basic CVAT information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServerApi
     */
    public serverRetrieveAbout(options?: AxiosRequestConfig) {
        return ServerApiFp(this.configuration).serverRetrieveAbout(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Method provides the list of supported annotations formats
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServerApi
     */
    public serverRetrieveAnnotationFormats(options?: AxiosRequestConfig) {
        return ServerApiFp(this.configuration).serverRetrieveAnnotationFormats(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Method provides allowed plugins
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServerApi
     */
    public serverRetrievePlugins(options?: AxiosRequestConfig) {
        return ServerApiFp(this.configuration).serverRetrievePlugins(options).then((request) => request(this.axios, this.basePath));
    }
}

