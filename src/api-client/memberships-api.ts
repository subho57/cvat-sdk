/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.8.2
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
import { MembershipRead } from '../models';
// @ts-ignore
import { PaginatedMembershipReadList } from '../models';
// @ts-ignore
import { PatchedMembershipWriteRequest } from '../models';
/**
 * MembershipsApi - axios parameter creator
 * @export
 */
export const MembershipsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Method deletes a membership
         * @param {number} id A unique integer value identifying this membership.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        membershipsDestroy: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('membershipsDestroy', 'id', id)
            const localVarPath = `/api/memberships/{id}`
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
         * @summary Method returns a paginated list of memberships
         * @param {string} [xOrganization] Organization unique slug
         * @param {string} [filter]  JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.  For example, using such a filter you can get all resources created by you:      - {\&quot;and\&quot;:[{\&quot;&#x3D;&#x3D;\&quot;:[{\&quot;var\&quot;:\&quot;owner\&quot;},\&quot;&lt;user&gt;\&quot;]}]}  Details about the syntax used can be found at the link: https://jsonlogic.com/   Available filter_fields: [\&#39;user\&#39;, \&#39;role\&#39;, \&#39;id\&#39;].
         * @param {string} [org] Organization unique slug
         * @param {number} [orgId] Organization identifier
         * @param {number} [page] A page number within the paginated result set.
         * @param {number} [pageSize] Number of results to return per page.
         * @param {MembershipsListRoleEnum} [role] A simple equality filter for the role field
         * @param {string} [search] A search term. Available search_fields: (\&#39;user\&#39;, \&#39;role\&#39;)
         * @param {string} [sort] Which field to use when ordering the results. Available ordering_fields: [\&#39;user\&#39;, \&#39;role\&#39;, \&#39;id\&#39;]
         * @param {string} [user] A simple equality filter for the user field
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        membershipsList: async (xOrganization?: string, filter?: string, org?: string, orgId?: number, page?: number, pageSize?: number, role?: MembershipsListRoleEnum, search?: string, sort?: string, user?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/memberships`;
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

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            if (role !== undefined) {
                localVarQueryParameter['role'] = role;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
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
         * @summary Methods does a partial update of chosen fields in a membership
         * @param {number} id A unique integer value identifying this membership.
         * @param {PatchedMembershipWriteRequest} [patchedMembershipWriteRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        membershipsPartialUpdate: async (id: number, patchedMembershipWriteRequest?: PatchedMembershipWriteRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('membershipsPartialUpdate', 'id', id)
            const localVarPath = `/api/memberships/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedMembershipWriteRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Method returns details of a membership
         * @param {number} id A unique integer value identifying this membership.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        membershipsRetrieve: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('membershipsRetrieve', 'id', id)
            const localVarPath = `/api/memberships/{id}`
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
 * MembershipsApi - functional programming interface
 * @export
 */
export const MembershipsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MembershipsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Method deletes a membership
         * @param {number} id A unique integer value identifying this membership.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async membershipsDestroy(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.membershipsDestroy(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Method returns a paginated list of memberships
         * @param {string} [xOrganization] Organization unique slug
         * @param {string} [filter]  JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.  For example, using such a filter you can get all resources created by you:      - {\&quot;and\&quot;:[{\&quot;&#x3D;&#x3D;\&quot;:[{\&quot;var\&quot;:\&quot;owner\&quot;},\&quot;&lt;user&gt;\&quot;]}]}  Details about the syntax used can be found at the link: https://jsonlogic.com/   Available filter_fields: [\&#39;user\&#39;, \&#39;role\&#39;, \&#39;id\&#39;].
         * @param {string} [org] Organization unique slug
         * @param {number} [orgId] Organization identifier
         * @param {number} [page] A page number within the paginated result set.
         * @param {number} [pageSize] Number of results to return per page.
         * @param {MembershipsListRoleEnum} [role] A simple equality filter for the role field
         * @param {string} [search] A search term. Available search_fields: (\&#39;user\&#39;, \&#39;role\&#39;)
         * @param {string} [sort] Which field to use when ordering the results. Available ordering_fields: [\&#39;user\&#39;, \&#39;role\&#39;, \&#39;id\&#39;]
         * @param {string} [user] A simple equality filter for the user field
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async membershipsList(xOrganization?: string, filter?: string, org?: string, orgId?: number, page?: number, pageSize?: number, role?: MembershipsListRoleEnum, search?: string, sort?: string, user?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedMembershipReadList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.membershipsList(xOrganization, filter, org, orgId, page, pageSize, role, search, sort, user, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Methods does a partial update of chosen fields in a membership
         * @param {number} id A unique integer value identifying this membership.
         * @param {PatchedMembershipWriteRequest} [patchedMembershipWriteRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async membershipsPartialUpdate(id: number, patchedMembershipWriteRequest?: PatchedMembershipWriteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MembershipRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.membershipsPartialUpdate(id, patchedMembershipWriteRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Method returns details of a membership
         * @param {number} id A unique integer value identifying this membership.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async membershipsRetrieve(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MembershipRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.membershipsRetrieve(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MembershipsApi - factory interface
 * @export
 */
export const MembershipsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MembershipsApiFp(configuration)
    return {
        /**
         * 
         * @summary Method deletes a membership
         * @param {MembershipsApiMembershipsDestroyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        membershipsDestroy(requestParameters: MembershipsApiMembershipsDestroyRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.membershipsDestroy(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Method returns a paginated list of memberships
         * @param {MembershipsApiMembershipsListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        membershipsList(requestParameters: MembershipsApiMembershipsListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<PaginatedMembershipReadList> {
            return localVarFp.membershipsList(requestParameters.xOrganization, requestParameters.filter, requestParameters.org, requestParameters.orgId, requestParameters.page, requestParameters.pageSize, requestParameters.role, requestParameters.search, requestParameters.sort, requestParameters.user, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Methods does a partial update of chosen fields in a membership
         * @param {MembershipsApiMembershipsPartialUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        membershipsPartialUpdate(requestParameters: MembershipsApiMembershipsPartialUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<MembershipRead> {
            return localVarFp.membershipsPartialUpdate(requestParameters.id, requestParameters.patchedMembershipWriteRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Method returns details of a membership
         * @param {MembershipsApiMembershipsRetrieveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        membershipsRetrieve(requestParameters: MembershipsApiMembershipsRetrieveRequest, options?: AxiosRequestConfig): AxiosPromise<MembershipRead> {
            return localVarFp.membershipsRetrieve(requestParameters.id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for membershipsDestroy operation in MembershipsApi.
 * @export
 * @interface MembershipsApiMembershipsDestroyRequest
 */
export interface MembershipsApiMembershipsDestroyRequest {
    /**
     * A unique integer value identifying this membership.
     * @type {number}
     * @memberof MembershipsApiMembershipsDestroy
     */
    readonly id: number
}

/**
 * Request parameters for membershipsList operation in MembershipsApi.
 * @export
 * @interface MembershipsApiMembershipsListRequest
 */
export interface MembershipsApiMembershipsListRequest {
    /**
     * Organization unique slug
     * @type {string}
     * @memberof MembershipsApiMembershipsList
     */
    readonly xOrganization?: string

    /**
     *  JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.  For example, using such a filter you can get all resources created by you:      - {\&quot;and\&quot;:[{\&quot;&#x3D;&#x3D;\&quot;:[{\&quot;var\&quot;:\&quot;owner\&quot;},\&quot;&lt;user&gt;\&quot;]}]}  Details about the syntax used can be found at the link: https://jsonlogic.com/   Available filter_fields: [\&#39;user\&#39;, \&#39;role\&#39;, \&#39;id\&#39;].
     * @type {string}
     * @memberof MembershipsApiMembershipsList
     */
    readonly filter?: string

    /**
     * Organization unique slug
     * @type {string}
     * @memberof MembershipsApiMembershipsList
     */
    readonly org?: string

    /**
     * Organization identifier
     * @type {number}
     * @memberof MembershipsApiMembershipsList
     */
    readonly orgId?: number

    /**
     * A page number within the paginated result set.
     * @type {number}
     * @memberof MembershipsApiMembershipsList
     */
    readonly page?: number

    /**
     * Number of results to return per page.
     * @type {number}
     * @memberof MembershipsApiMembershipsList
     */
    readonly pageSize?: number

    /**
     * A simple equality filter for the role field
     * @type {'worker' | 'supervisor' | 'maintainer' | 'owner'}
     * @memberof MembershipsApiMembershipsList
     */
    readonly role?: MembershipsListRoleEnum

    /**
     * A search term. Available search_fields: (\&#39;user\&#39;, \&#39;role\&#39;)
     * @type {string}
     * @memberof MembershipsApiMembershipsList
     */
    readonly search?: string

    /**
     * Which field to use when ordering the results. Available ordering_fields: [\&#39;user\&#39;, \&#39;role\&#39;, \&#39;id\&#39;]
     * @type {string}
     * @memberof MembershipsApiMembershipsList
     */
    readonly sort?: string

    /**
     * A simple equality filter for the user field
     * @type {string}
     * @memberof MembershipsApiMembershipsList
     */
    readonly user?: string
}

/**
 * Request parameters for membershipsPartialUpdate operation in MembershipsApi.
 * @export
 * @interface MembershipsApiMembershipsPartialUpdateRequest
 */
export interface MembershipsApiMembershipsPartialUpdateRequest {
    /**
     * A unique integer value identifying this membership.
     * @type {number}
     * @memberof MembershipsApiMembershipsPartialUpdate
     */
    readonly id: number

    /**
     * 
     * @type {PatchedMembershipWriteRequest}
     * @memberof MembershipsApiMembershipsPartialUpdate
     */
    readonly patchedMembershipWriteRequest?: PatchedMembershipWriteRequest
}

/**
 * Request parameters for membershipsRetrieve operation in MembershipsApi.
 * @export
 * @interface MembershipsApiMembershipsRetrieveRequest
 */
export interface MembershipsApiMembershipsRetrieveRequest {
    /**
     * A unique integer value identifying this membership.
     * @type {number}
     * @memberof MembershipsApiMembershipsRetrieve
     */
    readonly id: number
}

/**
 * MembershipsApi - object-oriented interface
 * @export
 * @class MembershipsApi
 * @extends {BaseAPI}
 */
export class MembershipsApi extends BaseAPI {
    /**
     * 
     * @summary Method deletes a membership
     * @param {MembershipsApiMembershipsDestroyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MembershipsApi
     */
    public membershipsDestroy(requestParameters: MembershipsApiMembershipsDestroyRequest, options?: AxiosRequestConfig) {
        return MembershipsApiFp(this.configuration).membershipsDestroy(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Method returns a paginated list of memberships
     * @param {MembershipsApiMembershipsListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MembershipsApi
     */
    public membershipsList(requestParameters: MembershipsApiMembershipsListRequest = {}, options?: AxiosRequestConfig) {
        return MembershipsApiFp(this.configuration).membershipsList(requestParameters.xOrganization, requestParameters.filter, requestParameters.org, requestParameters.orgId, requestParameters.page, requestParameters.pageSize, requestParameters.role, requestParameters.search, requestParameters.sort, requestParameters.user, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Methods does a partial update of chosen fields in a membership
     * @param {MembershipsApiMembershipsPartialUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MembershipsApi
     */
    public membershipsPartialUpdate(requestParameters: MembershipsApiMembershipsPartialUpdateRequest, options?: AxiosRequestConfig) {
        return MembershipsApiFp(this.configuration).membershipsPartialUpdate(requestParameters.id, requestParameters.patchedMembershipWriteRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Method returns details of a membership
     * @param {MembershipsApiMembershipsRetrieveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MembershipsApi
     */
    public membershipsRetrieve(requestParameters: MembershipsApiMembershipsRetrieveRequest, options?: AxiosRequestConfig) {
        return MembershipsApiFp(this.configuration).membershipsRetrieve(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const MembershipsListRoleEnum = {
    Worker: 'worker',
    Supervisor: 'supervisor',
    Maintainer: 'maintainer',
    Owner: 'owner'
} as const;
export type MembershipsListRoleEnum = typeof MembershipsListRoleEnum[keyof typeof MembershipsListRoleEnum];
