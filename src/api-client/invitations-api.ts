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
import { InvitationRead } from '../models';
// @ts-ignore
import { InvitationWriteRequest } from '../models';
// @ts-ignore
import { PaginatedInvitationReadList } from '../models';
// @ts-ignore
import { PatchedInvitationWriteRequest } from '../models';
/**
 * InvitationsApi - axios parameter creator
 * @export
 */
export const InvitationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Method creates an invitation
         * @param {InvitationWriteRequest} invitationWriteRequest 
         * @param {string} [xOrganization] Organization unique slug
         * @param {string} [org] Organization unique slug
         * @param {number} [orgId] Organization identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invitationsCreate: async (invitationWriteRequest: InvitationWriteRequest, xOrganization?: string, org?: string, orgId?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'invitationWriteRequest' is not null or undefined
            assertParamExists('invitationsCreate', 'invitationWriteRequest', invitationWriteRequest)
            const localVarPath = `/api/invitations`;
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

            if (org !== undefined) {
                localVarQueryParameter['org'] = org;
            }

            if (orgId !== undefined) {
                localVarQueryParameter['org_id'] = orgId;
            }

            if (xOrganization != null) {
                localVarHeaderParameter['X-Organization'] = String(xOrganization);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(invitationWriteRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Method deletes an invitation
         * @param {string} key A unique value identifying this invitation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invitationsDestroy: async (key: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('invitationsDestroy', 'key', key)
            const localVarPath = `/api/invitations/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
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
         * @summary Method returns a paginated list of invitations
         * @param {string} [xOrganization] Organization unique slug
         * @param {string} [filter] A filter term. Available filter_fields: [\&#39;owner\&#39;]
         * @param {string} [org] Organization unique slug
         * @param {number} [orgId] Organization identifier
         * @param {string} [owner] A simple equality filter for the owner field
         * @param {number} [page] A page number within the paginated result set.
         * @param {number} [pageSize] Number of results to return per page.
         * @param {string} [search] A search term. Available search_fields: (\&#39;owner\&#39;,)
         * @param {string} [sort] Which field to use when ordering the results. Available ordering_fields: [\&#39;owner\&#39;, \&#39;created_date\&#39;]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invitationsList: async (xOrganization?: string, filter?: string, org?: string, orgId?: number, owner?: string, page?: number, pageSize?: number, search?: string, sort?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/invitations`;
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

            if (org !== undefined) {
                localVarQueryParameter['org'] = org;
            }

            if (orgId !== undefined) {
                localVarQueryParameter['org_id'] = orgId;
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

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (xOrganization != null) {
                localVarHeaderParameter['X-Organization'] = String(xOrganization);
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
         * @summary Methods does a partial update of chosen fields in an invitation
         * @param {string} key A unique value identifying this invitation.
         * @param {PatchedInvitationWriteRequest} [patchedInvitationWriteRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invitationsPartialUpdate: async (key: string, patchedInvitationWriteRequest?: PatchedInvitationWriteRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('invitationsPartialUpdate', 'key', key)
            const localVarPath = `/api/invitations/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedInvitationWriteRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Method returns details of an invitation
         * @param {string} key A unique value identifying this invitation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invitationsRetrieve: async (key: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('invitationsRetrieve', 'key', key)
            const localVarPath = `/api/invitations/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
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
 * InvitationsApi - functional programming interface
 * @export
 */
export const InvitationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = InvitationsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Method creates an invitation
         * @param {InvitationWriteRequest} invitationWriteRequest 
         * @param {string} [xOrganization] Organization unique slug
         * @param {string} [org] Organization unique slug
         * @param {number} [orgId] Organization identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invitationsCreate(invitationWriteRequest: InvitationWriteRequest, xOrganization?: string, org?: string, orgId?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InvitationRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invitationsCreate(invitationWriteRequest, xOrganization, org, orgId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Method deletes an invitation
         * @param {string} key A unique value identifying this invitation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invitationsDestroy(key: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invitationsDestroy(key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Method returns a paginated list of invitations
         * @param {string} [xOrganization] Organization unique slug
         * @param {string} [filter] A filter term. Available filter_fields: [\&#39;owner\&#39;]
         * @param {string} [org] Organization unique slug
         * @param {number} [orgId] Organization identifier
         * @param {string} [owner] A simple equality filter for the owner field
         * @param {number} [page] A page number within the paginated result set.
         * @param {number} [pageSize] Number of results to return per page.
         * @param {string} [search] A search term. Available search_fields: (\&#39;owner\&#39;,)
         * @param {string} [sort] Which field to use when ordering the results. Available ordering_fields: [\&#39;owner\&#39;, \&#39;created_date\&#39;]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invitationsList(xOrganization?: string, filter?: string, org?: string, orgId?: number, owner?: string, page?: number, pageSize?: number, search?: string, sort?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedInvitationReadList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invitationsList(xOrganization, filter, org, orgId, owner, page, pageSize, search, sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Methods does a partial update of chosen fields in an invitation
         * @param {string} key A unique value identifying this invitation.
         * @param {PatchedInvitationWriteRequest} [patchedInvitationWriteRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invitationsPartialUpdate(key: string, patchedInvitationWriteRequest?: PatchedInvitationWriteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InvitationRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invitationsPartialUpdate(key, patchedInvitationWriteRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Method returns details of an invitation
         * @param {string} key A unique value identifying this invitation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invitationsRetrieve(key: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InvitationRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invitationsRetrieve(key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * InvitationsApi - factory interface
 * @export
 */
export const InvitationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = InvitationsApiFp(configuration)
    return {
        /**
         * 
         * @summary Method creates an invitation
         * @param {InvitationsApiInvitationsCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invitationsCreate(requestParameters: InvitationsApiInvitationsCreateRequest, options?: AxiosRequestConfig): AxiosPromise<InvitationRead> {
            return localVarFp.invitationsCreate(requestParameters.invitationWriteRequest, requestParameters.xOrganization, requestParameters.org, requestParameters.orgId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Method deletes an invitation
         * @param {InvitationsApiInvitationsDestroyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invitationsDestroy(requestParameters: InvitationsApiInvitationsDestroyRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.invitationsDestroy(requestParameters.key, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Method returns a paginated list of invitations
         * @param {InvitationsApiInvitationsListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invitationsList(requestParameters: InvitationsApiInvitationsListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<PaginatedInvitationReadList> {
            return localVarFp.invitationsList(requestParameters.xOrganization, requestParameters.filter, requestParameters.org, requestParameters.orgId, requestParameters.owner, requestParameters.page, requestParameters.pageSize, requestParameters.search, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Methods does a partial update of chosen fields in an invitation
         * @param {InvitationsApiInvitationsPartialUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invitationsPartialUpdate(requestParameters: InvitationsApiInvitationsPartialUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<InvitationRead> {
            return localVarFp.invitationsPartialUpdate(requestParameters.key, requestParameters.patchedInvitationWriteRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Method returns details of an invitation
         * @param {InvitationsApiInvitationsRetrieveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invitationsRetrieve(requestParameters: InvitationsApiInvitationsRetrieveRequest, options?: AxiosRequestConfig): AxiosPromise<InvitationRead> {
            return localVarFp.invitationsRetrieve(requestParameters.key, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for invitationsCreate operation in InvitationsApi.
 * @export
 * @interface InvitationsApiInvitationsCreateRequest
 */
export interface InvitationsApiInvitationsCreateRequest {
    /**
     * 
     * @type {InvitationWriteRequest}
     * @memberof InvitationsApiInvitationsCreate
     */
    readonly invitationWriteRequest: InvitationWriteRequest

    /**
     * Organization unique slug
     * @type {string}
     * @memberof InvitationsApiInvitationsCreate
     */
    readonly xOrganization?: string

    /**
     * Organization unique slug
     * @type {string}
     * @memberof InvitationsApiInvitationsCreate
     */
    readonly org?: string

    /**
     * Organization identifier
     * @type {number}
     * @memberof InvitationsApiInvitationsCreate
     */
    readonly orgId?: number
}

/**
 * Request parameters for invitationsDestroy operation in InvitationsApi.
 * @export
 * @interface InvitationsApiInvitationsDestroyRequest
 */
export interface InvitationsApiInvitationsDestroyRequest {
    /**
     * A unique value identifying this invitation.
     * @type {string}
     * @memberof InvitationsApiInvitationsDestroy
     */
    readonly key: string
}

/**
 * Request parameters for invitationsList operation in InvitationsApi.
 * @export
 * @interface InvitationsApiInvitationsListRequest
 */
export interface InvitationsApiInvitationsListRequest {
    /**
     * Organization unique slug
     * @type {string}
     * @memberof InvitationsApiInvitationsList
     */
    readonly xOrganization?: string

    /**
     * A filter term. Available filter_fields: [\&#39;owner\&#39;]
     * @type {string}
     * @memberof InvitationsApiInvitationsList
     */
    readonly filter?: string

    /**
     * Organization unique slug
     * @type {string}
     * @memberof InvitationsApiInvitationsList
     */
    readonly org?: string

    /**
     * Organization identifier
     * @type {number}
     * @memberof InvitationsApiInvitationsList
     */
    readonly orgId?: number

    /**
     * A simple equality filter for the owner field
     * @type {string}
     * @memberof InvitationsApiInvitationsList
     */
    readonly owner?: string

    /**
     * A page number within the paginated result set.
     * @type {number}
     * @memberof InvitationsApiInvitationsList
     */
    readonly page?: number

    /**
     * Number of results to return per page.
     * @type {number}
     * @memberof InvitationsApiInvitationsList
     */
    readonly pageSize?: number

    /**
     * A search term. Available search_fields: (\&#39;owner\&#39;,)
     * @type {string}
     * @memberof InvitationsApiInvitationsList
     */
    readonly search?: string

    /**
     * Which field to use when ordering the results. Available ordering_fields: [\&#39;owner\&#39;, \&#39;created_date\&#39;]
     * @type {string}
     * @memberof InvitationsApiInvitationsList
     */
    readonly sort?: string
}

/**
 * Request parameters for invitationsPartialUpdate operation in InvitationsApi.
 * @export
 * @interface InvitationsApiInvitationsPartialUpdateRequest
 */
export interface InvitationsApiInvitationsPartialUpdateRequest {
    /**
     * A unique value identifying this invitation.
     * @type {string}
     * @memberof InvitationsApiInvitationsPartialUpdate
     */
    readonly key: string

    /**
     * 
     * @type {PatchedInvitationWriteRequest}
     * @memberof InvitationsApiInvitationsPartialUpdate
     */
    readonly patchedInvitationWriteRequest?: PatchedInvitationWriteRequest
}

/**
 * Request parameters for invitationsRetrieve operation in InvitationsApi.
 * @export
 * @interface InvitationsApiInvitationsRetrieveRequest
 */
export interface InvitationsApiInvitationsRetrieveRequest {
    /**
     * A unique value identifying this invitation.
     * @type {string}
     * @memberof InvitationsApiInvitationsRetrieve
     */
    readonly key: string
}

/**
 * InvitationsApi - object-oriented interface
 * @export
 * @class InvitationsApi
 * @extends {BaseAPI}
 */
export class InvitationsApi extends BaseAPI {
    /**
     * 
     * @summary Method creates an invitation
     * @param {InvitationsApiInvitationsCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvitationsApi
     */
    public invitationsCreate(requestParameters: InvitationsApiInvitationsCreateRequest, options?: AxiosRequestConfig) {
        return InvitationsApiFp(this.configuration).invitationsCreate(requestParameters.invitationWriteRequest, requestParameters.xOrganization, requestParameters.org, requestParameters.orgId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Method deletes an invitation
     * @param {InvitationsApiInvitationsDestroyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvitationsApi
     */
    public invitationsDestroy(requestParameters: InvitationsApiInvitationsDestroyRequest, options?: AxiosRequestConfig) {
        return InvitationsApiFp(this.configuration).invitationsDestroy(requestParameters.key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Method returns a paginated list of invitations
     * @param {InvitationsApiInvitationsListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvitationsApi
     */
    public invitationsList(requestParameters: InvitationsApiInvitationsListRequest = {}, options?: AxiosRequestConfig) {
        return InvitationsApiFp(this.configuration).invitationsList(requestParameters.xOrganization, requestParameters.filter, requestParameters.org, requestParameters.orgId, requestParameters.owner, requestParameters.page, requestParameters.pageSize, requestParameters.search, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Methods does a partial update of chosen fields in an invitation
     * @param {InvitationsApiInvitationsPartialUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvitationsApi
     */
    public invitationsPartialUpdate(requestParameters: InvitationsApiInvitationsPartialUpdateRequest, options?: AxiosRequestConfig) {
        return InvitationsApiFp(this.configuration).invitationsPartialUpdate(requestParameters.key, requestParameters.patchedInvitationWriteRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Method returns details of an invitation
     * @param {InvitationsApiInvitationsRetrieveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvitationsApi
     */
    public invitationsRetrieve(requestParameters: InvitationsApiInvitationsRetrieveRequest, options?: AxiosRequestConfig) {
        return InvitationsApiFp(this.configuration).invitationsRetrieve(requestParameters.key, options).then((request) => request(this.axios, this.basePath));
    }
}

