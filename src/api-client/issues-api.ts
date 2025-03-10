/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.31.0
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { IssueRead } from '../models';
// @ts-ignore
import type { IssueWriteRequest } from '../models';
// @ts-ignore
import type { PaginatedIssueReadList } from '../models';
// @ts-ignore
import type { PatchedIssueWriteRequest } from '../models';
/**
 * IssuesApi - axios parameter creator
 * @export
 */
export const IssuesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create an issue
         * @param {IssueWriteRequest} issueWriteRequest 
         * @param {string} [xOrganization] Organization unique slug
         * @param {string} [org] Organization unique slug
         * @param {number} [orgId] Organization identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issuesCreate: async (issueWriteRequest: IssueWriteRequest, xOrganization?: string, org?: string, orgId?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'issueWriteRequest' is not null or undefined
            assertParamExists('issuesCreate', 'issueWriteRequest', issueWriteRequest)
            const localVarPath = `/api/issues`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            if (xOrganization != null) {
                localVarHeaderParameter['X-Organization'] = String(xOrganization);
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(issueWriteRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete an issue
         * @param {number} id A unique integer value identifying this issue.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issuesDestroy: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('issuesDestroy', 'id', id)
            const localVarPath = `/api/issues/{id}`
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
         * @summary List issues
         * @param {string} [xOrganization] Organization unique slug
         * @param {string} [assignee] A simple equality filter for the assignee field
         * @param {string} [filter]  JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.  For example, using such a filter you can get all resources created by you:      - {\&quot;and\&quot;:[{\&quot;&#x3D;&#x3D;\&quot;:[{\&quot;var\&quot;:\&quot;owner\&quot;},\&quot;&lt;user&gt;\&quot;]}]}  Details about the syntax used can be found at the link: https://jsonlogic.com/   Available filter_fields: [\&#39;owner\&#39;, \&#39;assignee\&#39;, \&#39;id\&#39;, \&#39;job_id\&#39;, \&#39;task_id\&#39;, \&#39;resolved\&#39;, \&#39;frame_id\&#39;].
         * @param {number} [frameId] A simple equality filter for the frame_id field
         * @param {number} [jobId] A simple equality filter for the job_id field
         * @param {string} [org] Organization unique slug
         * @param {number} [orgId] Organization identifier
         * @param {string} [owner] A simple equality filter for the owner field
         * @param {number} [page] A page number within the paginated result set.
         * @param {number} [pageSize] Number of results to return per page.
         * @param {boolean} [resolved] A simple equality filter for the resolved field
         * @param {string} [search] A search term. Available search_fields: (\&#39;owner\&#39;, \&#39;assignee\&#39;)
         * @param {string} [sort] Which field to use when ordering the results. Available ordering_fields: [\&#39;owner\&#39;, \&#39;assignee\&#39;, \&#39;id\&#39;, \&#39;job_id\&#39;, \&#39;task_id\&#39;, \&#39;resolved\&#39;, \&#39;frame_id\&#39;]
         * @param {number} [taskId] A simple equality filter for the task_id field
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issuesList: async (xOrganization?: string, assignee?: string, filter?: string, frameId?: number, jobId?: number, org?: string, orgId?: number, owner?: string, page?: number, pageSize?: number, resolved?: boolean, search?: string, sort?: string, taskId?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/issues`;
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

            if (assignee !== undefined) {
                localVarQueryParameter['assignee'] = assignee;
            }

            if (filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }

            if (frameId !== undefined) {
                localVarQueryParameter['frame_id'] = frameId;
            }

            if (jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
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

            if (resolved !== undefined) {
                localVarQueryParameter['resolved'] = resolved;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
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
         * @summary Update an issue
         * @param {number} id A unique integer value identifying this issue.
         * @param {PatchedIssueWriteRequest} [patchedIssueWriteRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issuesPartialUpdate: async (id: number, patchedIssueWriteRequest?: PatchedIssueWriteRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('issuesPartialUpdate', 'id', id)
            const localVarPath = `/api/issues/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedIssueWriteRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get issue details
         * @param {number} id A unique integer value identifying this issue.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issuesRetrieve: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('issuesRetrieve', 'id', id)
            const localVarPath = `/api/issues/{id}`
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
 * IssuesApi - functional programming interface
 * @export
 */
export const IssuesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = IssuesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create an issue
         * @param {IssueWriteRequest} issueWriteRequest 
         * @param {string} [xOrganization] Organization unique slug
         * @param {string} [org] Organization unique slug
         * @param {number} [orgId] Organization identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async issuesCreate(issueWriteRequest: IssueWriteRequest, xOrganization?: string, org?: string, orgId?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IssueRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.issuesCreate(issueWriteRequest, xOrganization, org, orgId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['IssuesApi.issuesCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Delete an issue
         * @param {number} id A unique integer value identifying this issue.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async issuesDestroy(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.issuesDestroy(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['IssuesApi.issuesDestroy']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List issues
         * @param {string} [xOrganization] Organization unique slug
         * @param {string} [assignee] A simple equality filter for the assignee field
         * @param {string} [filter]  JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.  For example, using such a filter you can get all resources created by you:      - {\&quot;and\&quot;:[{\&quot;&#x3D;&#x3D;\&quot;:[{\&quot;var\&quot;:\&quot;owner\&quot;},\&quot;&lt;user&gt;\&quot;]}]}  Details about the syntax used can be found at the link: https://jsonlogic.com/   Available filter_fields: [\&#39;owner\&#39;, \&#39;assignee\&#39;, \&#39;id\&#39;, \&#39;job_id\&#39;, \&#39;task_id\&#39;, \&#39;resolved\&#39;, \&#39;frame_id\&#39;].
         * @param {number} [frameId] A simple equality filter for the frame_id field
         * @param {number} [jobId] A simple equality filter for the job_id field
         * @param {string} [org] Organization unique slug
         * @param {number} [orgId] Organization identifier
         * @param {string} [owner] A simple equality filter for the owner field
         * @param {number} [page] A page number within the paginated result set.
         * @param {number} [pageSize] Number of results to return per page.
         * @param {boolean} [resolved] A simple equality filter for the resolved field
         * @param {string} [search] A search term. Available search_fields: (\&#39;owner\&#39;, \&#39;assignee\&#39;)
         * @param {string} [sort] Which field to use when ordering the results. Available ordering_fields: [\&#39;owner\&#39;, \&#39;assignee\&#39;, \&#39;id\&#39;, \&#39;job_id\&#39;, \&#39;task_id\&#39;, \&#39;resolved\&#39;, \&#39;frame_id\&#39;]
         * @param {number} [taskId] A simple equality filter for the task_id field
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async issuesList(xOrganization?: string, assignee?: string, filter?: string, frameId?: number, jobId?: number, org?: string, orgId?: number, owner?: string, page?: number, pageSize?: number, resolved?: boolean, search?: string, sort?: string, taskId?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedIssueReadList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.issuesList(xOrganization, assignee, filter, frameId, jobId, org, orgId, owner, page, pageSize, resolved, search, sort, taskId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['IssuesApi.issuesList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update an issue
         * @param {number} id A unique integer value identifying this issue.
         * @param {PatchedIssueWriteRequest} [patchedIssueWriteRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async issuesPartialUpdate(id: number, patchedIssueWriteRequest?: PatchedIssueWriteRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IssueRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.issuesPartialUpdate(id, patchedIssueWriteRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['IssuesApi.issuesPartialUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get issue details
         * @param {number} id A unique integer value identifying this issue.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async issuesRetrieve(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IssueRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.issuesRetrieve(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['IssuesApi.issuesRetrieve']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * IssuesApi - factory interface
 * @export
 */
export const IssuesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = IssuesApiFp(configuration)
    return {
        /**
         * 
         * @summary Create an issue
         * @param {IssuesApiIssuesCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issuesCreate(requestParameters: IssuesApiIssuesCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<IssueRead> {
            return localVarFp.issuesCreate(requestParameters.issueWriteRequest, requestParameters.xOrganization, requestParameters.org, requestParameters.orgId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete an issue
         * @param {IssuesApiIssuesDestroyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issuesDestroy(requestParameters: IssuesApiIssuesDestroyRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.issuesDestroy(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List issues
         * @param {IssuesApiIssuesListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issuesList(requestParameters: IssuesApiIssuesListRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<PaginatedIssueReadList> {
            return localVarFp.issuesList(requestParameters.xOrganization, requestParameters.assignee, requestParameters.filter, requestParameters.frameId, requestParameters.jobId, requestParameters.org, requestParameters.orgId, requestParameters.owner, requestParameters.page, requestParameters.pageSize, requestParameters.resolved, requestParameters.search, requestParameters.sort, requestParameters.taskId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update an issue
         * @param {IssuesApiIssuesPartialUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issuesPartialUpdate(requestParameters: IssuesApiIssuesPartialUpdateRequest, options?: RawAxiosRequestConfig): AxiosPromise<IssueRead> {
            return localVarFp.issuesPartialUpdate(requestParameters.id, requestParameters.patchedIssueWriteRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get issue details
         * @param {IssuesApiIssuesRetrieveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issuesRetrieve(requestParameters: IssuesApiIssuesRetrieveRequest, options?: RawAxiosRequestConfig): AxiosPromise<IssueRead> {
            return localVarFp.issuesRetrieve(requestParameters.id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for issuesCreate operation in IssuesApi.
 * @export
 * @interface IssuesApiIssuesCreateRequest
 */
export interface IssuesApiIssuesCreateRequest {
    /**
     * 
     * @type {IssueWriteRequest}
     * @memberof IssuesApiIssuesCreate
     */
    readonly issueWriteRequest: IssueWriteRequest

    /**
     * Organization unique slug
     * @type {string}
     * @memberof IssuesApiIssuesCreate
     */
    readonly xOrganization?: string

    /**
     * Organization unique slug
     * @type {string}
     * @memberof IssuesApiIssuesCreate
     */
    readonly org?: string

    /**
     * Organization identifier
     * @type {number}
     * @memberof IssuesApiIssuesCreate
     */
    readonly orgId?: number
}

/**
 * Request parameters for issuesDestroy operation in IssuesApi.
 * @export
 * @interface IssuesApiIssuesDestroyRequest
 */
export interface IssuesApiIssuesDestroyRequest {
    /**
     * A unique integer value identifying this issue.
     * @type {number}
     * @memberof IssuesApiIssuesDestroy
     */
    readonly id: number
}

/**
 * Request parameters for issuesList operation in IssuesApi.
 * @export
 * @interface IssuesApiIssuesListRequest
 */
export interface IssuesApiIssuesListRequest {
    /**
     * Organization unique slug
     * @type {string}
     * @memberof IssuesApiIssuesList
     */
    readonly xOrganization?: string

    /**
     * A simple equality filter for the assignee field
     * @type {string}
     * @memberof IssuesApiIssuesList
     */
    readonly assignee?: string

    /**
     *  JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.  For example, using such a filter you can get all resources created by you:      - {\&quot;and\&quot;:[{\&quot;&#x3D;&#x3D;\&quot;:[{\&quot;var\&quot;:\&quot;owner\&quot;},\&quot;&lt;user&gt;\&quot;]}]}  Details about the syntax used can be found at the link: https://jsonlogic.com/   Available filter_fields: [\&#39;owner\&#39;, \&#39;assignee\&#39;, \&#39;id\&#39;, \&#39;job_id\&#39;, \&#39;task_id\&#39;, \&#39;resolved\&#39;, \&#39;frame_id\&#39;].
     * @type {string}
     * @memberof IssuesApiIssuesList
     */
    readonly filter?: string

    /**
     * A simple equality filter for the frame_id field
     * @type {number}
     * @memberof IssuesApiIssuesList
     */
    readonly frameId?: number

    /**
     * A simple equality filter for the job_id field
     * @type {number}
     * @memberof IssuesApiIssuesList
     */
    readonly jobId?: number

    /**
     * Organization unique slug
     * @type {string}
     * @memberof IssuesApiIssuesList
     */
    readonly org?: string

    /**
     * Organization identifier
     * @type {number}
     * @memberof IssuesApiIssuesList
     */
    readonly orgId?: number

    /**
     * A simple equality filter for the owner field
     * @type {string}
     * @memberof IssuesApiIssuesList
     */
    readonly owner?: string

    /**
     * A page number within the paginated result set.
     * @type {number}
     * @memberof IssuesApiIssuesList
     */
    readonly page?: number

    /**
     * Number of results to return per page.
     * @type {number}
     * @memberof IssuesApiIssuesList
     */
    readonly pageSize?: number

    /**
     * A simple equality filter for the resolved field
     * @type {boolean}
     * @memberof IssuesApiIssuesList
     */
    readonly resolved?: boolean

    /**
     * A search term. Available search_fields: (\&#39;owner\&#39;, \&#39;assignee\&#39;)
     * @type {string}
     * @memberof IssuesApiIssuesList
     */
    readonly search?: string

    /**
     * Which field to use when ordering the results. Available ordering_fields: [\&#39;owner\&#39;, \&#39;assignee\&#39;, \&#39;id\&#39;, \&#39;job_id\&#39;, \&#39;task_id\&#39;, \&#39;resolved\&#39;, \&#39;frame_id\&#39;]
     * @type {string}
     * @memberof IssuesApiIssuesList
     */
    readonly sort?: string

    /**
     * A simple equality filter for the task_id field
     * @type {number}
     * @memberof IssuesApiIssuesList
     */
    readonly taskId?: number
}

/**
 * Request parameters for issuesPartialUpdate operation in IssuesApi.
 * @export
 * @interface IssuesApiIssuesPartialUpdateRequest
 */
export interface IssuesApiIssuesPartialUpdateRequest {
    /**
     * A unique integer value identifying this issue.
     * @type {number}
     * @memberof IssuesApiIssuesPartialUpdate
     */
    readonly id: number

    /**
     * 
     * @type {PatchedIssueWriteRequest}
     * @memberof IssuesApiIssuesPartialUpdate
     */
    readonly patchedIssueWriteRequest?: PatchedIssueWriteRequest
}

/**
 * Request parameters for issuesRetrieve operation in IssuesApi.
 * @export
 * @interface IssuesApiIssuesRetrieveRequest
 */
export interface IssuesApiIssuesRetrieveRequest {
    /**
     * A unique integer value identifying this issue.
     * @type {number}
     * @memberof IssuesApiIssuesRetrieve
     */
    readonly id: number
}

/**
 * IssuesApi - object-oriented interface
 * @export
 * @class IssuesApi
 * @extends {BaseAPI}
 */
export class IssuesApi extends BaseAPI {
    /**
     * 
     * @summary Create an issue
     * @param {IssuesApiIssuesCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuesApi
     */
    public issuesCreate(requestParameters: IssuesApiIssuesCreateRequest, options?: RawAxiosRequestConfig) {
        return IssuesApiFp(this.configuration).issuesCreate(requestParameters.issueWriteRequest, requestParameters.xOrganization, requestParameters.org, requestParameters.orgId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete an issue
     * @param {IssuesApiIssuesDestroyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuesApi
     */
    public issuesDestroy(requestParameters: IssuesApiIssuesDestroyRequest, options?: RawAxiosRequestConfig) {
        return IssuesApiFp(this.configuration).issuesDestroy(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List issues
     * @param {IssuesApiIssuesListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuesApi
     */
    public issuesList(requestParameters: IssuesApiIssuesListRequest = {}, options?: RawAxiosRequestConfig) {
        return IssuesApiFp(this.configuration).issuesList(requestParameters.xOrganization, requestParameters.assignee, requestParameters.filter, requestParameters.frameId, requestParameters.jobId, requestParameters.org, requestParameters.orgId, requestParameters.owner, requestParameters.page, requestParameters.pageSize, requestParameters.resolved, requestParameters.search, requestParameters.sort, requestParameters.taskId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update an issue
     * @param {IssuesApiIssuesPartialUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuesApi
     */
    public issuesPartialUpdate(requestParameters: IssuesApiIssuesPartialUpdateRequest, options?: RawAxiosRequestConfig) {
        return IssuesApiFp(this.configuration).issuesPartialUpdate(requestParameters.id, requestParameters.patchedIssueWriteRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get issue details
     * @param {IssuesApiIssuesRetrieveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuesApi
     */
    public issuesRetrieve(requestParameters: IssuesApiIssuesRetrieveRequest, options?: RawAxiosRequestConfig) {
        return IssuesApiFp(this.configuration).issuesRetrieve(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }
}

