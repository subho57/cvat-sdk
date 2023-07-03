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
import { OrganizationRead } from '../models';
// @ts-ignore
import { OrganizationWriteRequest } from '../models';
// @ts-ignore
import { PaginatedOrganizationReadList } from '../models';
// @ts-ignore
import { PatchedOrganizationWriteRequest } from '../models';
/**
 * OrganizationsApi - axios parameter creator
 * @export
 */
export const OrganizationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Method creates an organization
         * @param {OrganizationWriteRequest} organizationWriteRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organizationsCreate: async (organizationWriteRequest: OrganizationWriteRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'organizationWriteRequest' is not null or undefined
            assertParamExists('organizationsCreate', 'organizationWriteRequest', organizationWriteRequest)
            const localVarPath = `/api/organizations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(organizationWriteRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Method deletes an organization
         * @param {number} id A unique integer value identifying this organization.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organizationsDestroy: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('organizationsDestroy', 'id', id)
            const localVarPath = `/api/organizations/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * @summary Method returns a paginated list of organizations
         * @param {string} [filter] A filter term. Available filter_fields: [\&#39;name\&#39;, \&#39;owner\&#39;, \&#39;id\&#39;, \&#39;slug\&#39;]
         * @param {string} [name] A simple equality filter for the name field
         * @param {string} [owner] A simple equality filter for the owner field
         * @param {number} [page] A page number within the paginated result set.
         * @param {number} [pageSize] Number of results to return per page.
         * @param {string} [search] A search term. Available search_fields: (\&#39;name\&#39;, \&#39;owner\&#39;)
         * @param {string} [slug] A simple equality filter for the slug field
         * @param {string} [sort] Which field to use when ordering the results. Available ordering_fields: [\&#39;name\&#39;, \&#39;owner\&#39;, \&#39;id\&#39;, \&#39;slug\&#39;]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organizationsList: async (filter?: string, name?: string, owner?: string, page?: number, pageSize?: number, search?: string, slug?: string, sort?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/organizations`;
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

            if (filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (owner !== undefined) {
                localVarQueryParameter['owner'] = owner;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (slug !== undefined) {
                localVarQueryParameter['slug'] = slug;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
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
         * @summary Methods does a partial update of chosen fields in an organization
         * @param {number} id A unique integer value identifying this organization.
         * @param {PatchedOrganizationWriteRequest} [patchedOrganizationWriteRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organizationsPartialUpdate: async (id: number, patchedOrganizationWriteRequest?: PatchedOrganizationWriteRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('organizationsPartialUpdate', 'id', id)
            const localVarPath = `/api/organizations/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchedOrganizationWriteRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Method returns details of an organization
         * @param {number} id A unique integer value identifying this organization.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organizationsRetrieve: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('organizationsRetrieve', 'id', id)
            const localVarPath = `/api/organizations/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
 * OrganizationsApi - functional programming interface
 * @export
 */
export const OrganizationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OrganizationsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Method creates an organization
         * @param {OrganizationWriteRequest} organizationWriteRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async organizationsCreate(organizationWriteRequest: OrganizationWriteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OrganizationRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.organizationsCreate(organizationWriteRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Method deletes an organization
         * @param {number} id A unique integer value identifying this organization.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async organizationsDestroy(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.organizationsDestroy(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Method returns a paginated list of organizations
         * @param {string} [filter] A filter term. Available filter_fields: [\&#39;name\&#39;, \&#39;owner\&#39;, \&#39;id\&#39;, \&#39;slug\&#39;]
         * @param {string} [name] A simple equality filter for the name field
         * @param {string} [owner] A simple equality filter for the owner field
         * @param {number} [page] A page number within the paginated result set.
         * @param {number} [pageSize] Number of results to return per page.
         * @param {string} [search] A search term. Available search_fields: (\&#39;name\&#39;, \&#39;owner\&#39;)
         * @param {string} [slug] A simple equality filter for the slug field
         * @param {string} [sort] Which field to use when ordering the results. Available ordering_fields: [\&#39;name\&#39;, \&#39;owner\&#39;, \&#39;id\&#39;, \&#39;slug\&#39;]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async organizationsList(filter?: string, name?: string, owner?: string, page?: number, pageSize?: number, search?: string, slug?: string, sort?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedOrganizationReadList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.organizationsList(filter, name, owner, page, pageSize, search, slug, sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Methods does a partial update of chosen fields in an organization
         * @param {number} id A unique integer value identifying this organization.
         * @param {PatchedOrganizationWriteRequest} [patchedOrganizationWriteRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async organizationsPartialUpdate(id: number, patchedOrganizationWriteRequest?: PatchedOrganizationWriteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OrganizationRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.organizationsPartialUpdate(id, patchedOrganizationWriteRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Method returns details of an organization
         * @param {number} id A unique integer value identifying this organization.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async organizationsRetrieve(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OrganizationRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.organizationsRetrieve(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OrganizationsApi - factory interface
 * @export
 */
export const OrganizationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OrganizationsApiFp(configuration)
    return {
        /**
         * 
         * @summary Method creates an organization
         * @param {OrganizationsApiOrganizationsCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organizationsCreate(requestParameters: OrganizationsApiOrganizationsCreateRequest, options?: AxiosRequestConfig): AxiosPromise<OrganizationRead> {
            return localVarFp.organizationsCreate(requestParameters.organizationWriteRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Method deletes an organization
         * @param {OrganizationsApiOrganizationsDestroyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organizationsDestroy(requestParameters: OrganizationsApiOrganizationsDestroyRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.organizationsDestroy(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Method returns a paginated list of organizations
         * @param {OrganizationsApiOrganizationsListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organizationsList(requestParameters: OrganizationsApiOrganizationsListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<PaginatedOrganizationReadList> {
            return localVarFp.organizationsList(requestParameters.filter, requestParameters.name, requestParameters.owner, requestParameters.page, requestParameters.pageSize, requestParameters.search, requestParameters.slug, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Methods does a partial update of chosen fields in an organization
         * @param {OrganizationsApiOrganizationsPartialUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organizationsPartialUpdate(requestParameters: OrganizationsApiOrganizationsPartialUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<OrganizationRead> {
            return localVarFp.organizationsPartialUpdate(requestParameters.id, requestParameters.patchedOrganizationWriteRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Method returns details of an organization
         * @param {OrganizationsApiOrganizationsRetrieveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organizationsRetrieve(requestParameters: OrganizationsApiOrganizationsRetrieveRequest, options?: AxiosRequestConfig): AxiosPromise<OrganizationRead> {
            return localVarFp.organizationsRetrieve(requestParameters.id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for organizationsCreate operation in OrganizationsApi.
 * @export
 * @interface OrganizationsApiOrganizationsCreateRequest
 */
export interface OrganizationsApiOrganizationsCreateRequest {
    /**
     * 
     * @type {OrganizationWriteRequest}
     * @memberof OrganizationsApiOrganizationsCreate
     */
    readonly organizationWriteRequest: OrganizationWriteRequest
}

/**
 * Request parameters for organizationsDestroy operation in OrganizationsApi.
 * @export
 * @interface OrganizationsApiOrganizationsDestroyRequest
 */
export interface OrganizationsApiOrganizationsDestroyRequest {
    /**
     * A unique integer value identifying this organization.
     * @type {number}
     * @memberof OrganizationsApiOrganizationsDestroy
     */
    readonly id: number
}

/**
 * Request parameters for organizationsList operation in OrganizationsApi.
 * @export
 * @interface OrganizationsApiOrganizationsListRequest
 */
export interface OrganizationsApiOrganizationsListRequest {
    /**
     * A filter term. Available filter_fields: [\&#39;name\&#39;, \&#39;owner\&#39;, \&#39;id\&#39;, \&#39;slug\&#39;]
     * @type {string}
     * @memberof OrganizationsApiOrganizationsList
     */
    readonly filter?: string

    /**
     * A simple equality filter for the name field
     * @type {string}
     * @memberof OrganizationsApiOrganizationsList
     */
    readonly name?: string

    /**
     * A simple equality filter for the owner field
     * @type {string}
     * @memberof OrganizationsApiOrganizationsList
     */
    readonly owner?: string

    /**
     * A page number within the paginated result set.
     * @type {number}
     * @memberof OrganizationsApiOrganizationsList
     */
    readonly page?: number

    /**
     * Number of results to return per page.
     * @type {number}
     * @memberof OrganizationsApiOrganizationsList
     */
    readonly pageSize?: number

    /**
     * A search term. Available search_fields: (\&#39;name\&#39;, \&#39;owner\&#39;)
     * @type {string}
     * @memberof OrganizationsApiOrganizationsList
     */
    readonly search?: string

    /**
     * A simple equality filter for the slug field
     * @type {string}
     * @memberof OrganizationsApiOrganizationsList
     */
    readonly slug?: string

    /**
     * Which field to use when ordering the results. Available ordering_fields: [\&#39;name\&#39;, \&#39;owner\&#39;, \&#39;id\&#39;, \&#39;slug\&#39;]
     * @type {string}
     * @memberof OrganizationsApiOrganizationsList
     */
    readonly sort?: string
}

/**
 * Request parameters for organizationsPartialUpdate operation in OrganizationsApi.
 * @export
 * @interface OrganizationsApiOrganizationsPartialUpdateRequest
 */
export interface OrganizationsApiOrganizationsPartialUpdateRequest {
    /**
     * A unique integer value identifying this organization.
     * @type {number}
     * @memberof OrganizationsApiOrganizationsPartialUpdate
     */
    readonly id: number

    /**
     * 
     * @type {PatchedOrganizationWriteRequest}
     * @memberof OrganizationsApiOrganizationsPartialUpdate
     */
    readonly patchedOrganizationWriteRequest?: PatchedOrganizationWriteRequest
}

/**
 * Request parameters for organizationsRetrieve operation in OrganizationsApi.
 * @export
 * @interface OrganizationsApiOrganizationsRetrieveRequest
 */
export interface OrganizationsApiOrganizationsRetrieveRequest {
    /**
     * A unique integer value identifying this organization.
     * @type {number}
     * @memberof OrganizationsApiOrganizationsRetrieve
     */
    readonly id: number
}

/**
 * OrganizationsApi - object-oriented interface
 * @export
 * @class OrganizationsApi
 * @extends {BaseAPI}
 */
export class OrganizationsApi extends BaseAPI {
    /**
     * 
     * @summary Method creates an organization
     * @param {OrganizationsApiOrganizationsCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApi
     */
    public organizationsCreate(requestParameters: OrganizationsApiOrganizationsCreateRequest, options?: AxiosRequestConfig) {
        return OrganizationsApiFp(this.configuration).organizationsCreate(requestParameters.organizationWriteRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Method deletes an organization
     * @param {OrganizationsApiOrganizationsDestroyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApi
     */
    public organizationsDestroy(requestParameters: OrganizationsApiOrganizationsDestroyRequest, options?: AxiosRequestConfig) {
        return OrganizationsApiFp(this.configuration).organizationsDestroy(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Method returns a paginated list of organizations
     * @param {OrganizationsApiOrganizationsListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApi
     */
    public organizationsList(requestParameters: OrganizationsApiOrganizationsListRequest = {}, options?: AxiosRequestConfig) {
        return OrganizationsApiFp(this.configuration).organizationsList(requestParameters.filter, requestParameters.name, requestParameters.owner, requestParameters.page, requestParameters.pageSize, requestParameters.search, requestParameters.slug, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Methods does a partial update of chosen fields in an organization
     * @param {OrganizationsApiOrganizationsPartialUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApi
     */
    public organizationsPartialUpdate(requestParameters: OrganizationsApiOrganizationsPartialUpdateRequest, options?: AxiosRequestConfig) {
        return OrganizationsApiFp(this.configuration).organizationsPartialUpdate(requestParameters.id, requestParameters.patchedOrganizationWriteRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Method returns details of an organization
     * @param {OrganizationsApiOrganizationsRetrieveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApi
     */
    public organizationsRetrieve(requestParameters: OrganizationsApiOrganizationsRetrieveRequest, options?: AxiosRequestConfig) {
        return OrganizationsApiFp(this.configuration).organizationsRetrieve(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }
}

