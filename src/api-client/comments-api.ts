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
import { CommentRead } from '../models';
// @ts-ignore
import { CommentWriteRequest } from '../models';
// @ts-ignore
import { PaginatedCommentReadList } from '../models';
// @ts-ignore
import { PatchedCommentWriteRequest } from '../models';
/**
 * CommentsApi - axios parameter creator
 * @export
 */
export const CommentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Method creates a comment
         * @param {CommentWriteRequest} commentWriteRequest 
         * @param {string} [xOrganization] Organization unique slug
         * @param {string} [org] Organization unique slug
         * @param {number} [orgId] Organization identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsCreate: async (commentWriteRequest: CommentWriteRequest, xOrganization?: string, org?: string, orgId?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'commentWriteRequest' is not null or undefined
            assertParamExists('commentsCreate', 'commentWriteRequest', commentWriteRequest)
            const localVarPath = `/api/comments`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(commentWriteRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Method deletes a comment
         * @param {number} id A unique integer value identifying this comment.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsDestroy: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('commentsDestroy', 'id', id)
            const localVarPath = `/api/comments/{id}`
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
         * @summary Method returns a paginated list of comments
         * @param {string} [xOrganization] Organization unique slug
         * @param {string} [filter] A filter term. Available filter_fields: [\&#39;owner\&#39;, \&#39;id\&#39;, \&#39;issue_id\&#39;, \&#39;frame_id\&#39;, \&#39;job_id\&#39;]
         * @param {number} [frameId] A simple equality filter for the frame_id field
         * @param {number} [issueId] A simple equality filter for the issue_id field
         * @param {number} [jobId] A simple equality filter for the job_id field
         * @param {string} [org] Organization unique slug
         * @param {number} [orgId] Organization identifier
         * @param {string} [owner] A simple equality filter for the owner field
         * @param {number} [page] A page number within the paginated result set.
         * @param {number} [pageSize] Number of results to return per page.
         * @param {string} [search] A search term. Available search_fields: (\&#39;owner\&#39;,)
         * @param {string} [sort] Which field to use when ordering the results. Available ordering_fields: [\&#39;owner\&#39;, \&#39;id\&#39;, \&#39;issue_id\&#39;, \&#39;frame_id\&#39;, \&#39;job_id\&#39;]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsList: async (xOrganization?: string, filter?: string, frameId?: number, issueId?: number, jobId?: number, org?: string, orgId?: number, owner?: string, page?: number, pageSize?: number, search?: string, sort?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/comments`;
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

            if (frameId !== undefined) {
                localVarQueryParameter['frame_id'] = frameId;
            }

            if (issueId !== undefined) {
                localVarQueryParameter['issue_id'] = issueId;
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
         * @summary Methods does a partial update of chosen fields in a comment
         * @param {number} id A unique integer value identifying this comment.
         * @param {PatchedCommentWriteRequest} [patchedCommentWriteRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsPartialUpdate: async (id: number, patchedCommentWriteRequest?: PatchedCommentWriteRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('commentsPartialUpdate', 'id', id)
            const localVarPath = `/api/comments/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedCommentWriteRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Method returns details of a comment
         * @param {number} id A unique integer value identifying this comment.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsRetrieve: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('commentsRetrieve', 'id', id)
            const localVarPath = `/api/comments/{id}`
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
 * CommentsApi - functional programming interface
 * @export
 */
export const CommentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CommentsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Method creates a comment
         * @param {CommentWriteRequest} commentWriteRequest 
         * @param {string} [xOrganization] Organization unique slug
         * @param {string} [org] Organization unique slug
         * @param {number} [orgId] Organization identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commentsCreate(commentWriteRequest: CommentWriteRequest, xOrganization?: string, org?: string, orgId?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CommentRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commentsCreate(commentWriteRequest, xOrganization, org, orgId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Method deletes a comment
         * @param {number} id A unique integer value identifying this comment.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commentsDestroy(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commentsDestroy(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Method returns a paginated list of comments
         * @param {string} [xOrganization] Organization unique slug
         * @param {string} [filter] A filter term. Available filter_fields: [\&#39;owner\&#39;, \&#39;id\&#39;, \&#39;issue_id\&#39;, \&#39;frame_id\&#39;, \&#39;job_id\&#39;]
         * @param {number} [frameId] A simple equality filter for the frame_id field
         * @param {number} [issueId] A simple equality filter for the issue_id field
         * @param {number} [jobId] A simple equality filter for the job_id field
         * @param {string} [org] Organization unique slug
         * @param {number} [orgId] Organization identifier
         * @param {string} [owner] A simple equality filter for the owner field
         * @param {number} [page] A page number within the paginated result set.
         * @param {number} [pageSize] Number of results to return per page.
         * @param {string} [search] A search term. Available search_fields: (\&#39;owner\&#39;,)
         * @param {string} [sort] Which field to use when ordering the results. Available ordering_fields: [\&#39;owner\&#39;, \&#39;id\&#39;, \&#39;issue_id\&#39;, \&#39;frame_id\&#39;, \&#39;job_id\&#39;]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commentsList(xOrganization?: string, filter?: string, frameId?: number, issueId?: number, jobId?: number, org?: string, orgId?: number, owner?: string, page?: number, pageSize?: number, search?: string, sort?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedCommentReadList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commentsList(xOrganization, filter, frameId, issueId, jobId, org, orgId, owner, page, pageSize, search, sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Methods does a partial update of chosen fields in a comment
         * @param {number} id A unique integer value identifying this comment.
         * @param {PatchedCommentWriteRequest} [patchedCommentWriteRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commentsPartialUpdate(id: number, patchedCommentWriteRequest?: PatchedCommentWriteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CommentRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commentsPartialUpdate(id, patchedCommentWriteRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Method returns details of a comment
         * @param {number} id A unique integer value identifying this comment.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commentsRetrieve(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CommentRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commentsRetrieve(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CommentsApi - factory interface
 * @export
 */
export const CommentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CommentsApiFp(configuration)
    return {
        /**
         * 
         * @summary Method creates a comment
         * @param {CommentsApiCommentsCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsCreate(requestParameters: CommentsApiCommentsCreateRequest, options?: AxiosRequestConfig): AxiosPromise<CommentRead> {
            return localVarFp.commentsCreate(requestParameters.commentWriteRequest, requestParameters.xOrganization, requestParameters.org, requestParameters.orgId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Method deletes a comment
         * @param {CommentsApiCommentsDestroyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsDestroy(requestParameters: CommentsApiCommentsDestroyRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.commentsDestroy(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Method returns a paginated list of comments
         * @param {CommentsApiCommentsListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsList(requestParameters: CommentsApiCommentsListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<PaginatedCommentReadList> {
            return localVarFp.commentsList(requestParameters.xOrganization, requestParameters.filter, requestParameters.frameId, requestParameters.issueId, requestParameters.jobId, requestParameters.org, requestParameters.orgId, requestParameters.owner, requestParameters.page, requestParameters.pageSize, requestParameters.search, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Methods does a partial update of chosen fields in a comment
         * @param {CommentsApiCommentsPartialUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsPartialUpdate(requestParameters: CommentsApiCommentsPartialUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<CommentRead> {
            return localVarFp.commentsPartialUpdate(requestParameters.id, requestParameters.patchedCommentWriteRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Method returns details of a comment
         * @param {CommentsApiCommentsRetrieveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsRetrieve(requestParameters: CommentsApiCommentsRetrieveRequest, options?: AxiosRequestConfig): AxiosPromise<CommentRead> {
            return localVarFp.commentsRetrieve(requestParameters.id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for commentsCreate operation in CommentsApi.
 * @export
 * @interface CommentsApiCommentsCreateRequest
 */
export interface CommentsApiCommentsCreateRequest {
    /**
     * 
     * @type {CommentWriteRequest}
     * @memberof CommentsApiCommentsCreate
     */
    readonly commentWriteRequest: CommentWriteRequest

    /**
     * Organization unique slug
     * @type {string}
     * @memberof CommentsApiCommentsCreate
     */
    readonly xOrganization?: string

    /**
     * Organization unique slug
     * @type {string}
     * @memberof CommentsApiCommentsCreate
     */
    readonly org?: string

    /**
     * Organization identifier
     * @type {number}
     * @memberof CommentsApiCommentsCreate
     */
    readonly orgId?: number
}

/**
 * Request parameters for commentsDestroy operation in CommentsApi.
 * @export
 * @interface CommentsApiCommentsDestroyRequest
 */
export interface CommentsApiCommentsDestroyRequest {
    /**
     * A unique integer value identifying this comment.
     * @type {number}
     * @memberof CommentsApiCommentsDestroy
     */
    readonly id: number
}

/**
 * Request parameters for commentsList operation in CommentsApi.
 * @export
 * @interface CommentsApiCommentsListRequest
 */
export interface CommentsApiCommentsListRequest {
    /**
     * Organization unique slug
     * @type {string}
     * @memberof CommentsApiCommentsList
     */
    readonly xOrganization?: string

    /**
     * A filter term. Available filter_fields: [\&#39;owner\&#39;, \&#39;id\&#39;, \&#39;issue_id\&#39;, \&#39;frame_id\&#39;, \&#39;job_id\&#39;]
     * @type {string}
     * @memberof CommentsApiCommentsList
     */
    readonly filter?: string

    /**
     * A simple equality filter for the frame_id field
     * @type {number}
     * @memberof CommentsApiCommentsList
     */
    readonly frameId?: number

    /**
     * A simple equality filter for the issue_id field
     * @type {number}
     * @memberof CommentsApiCommentsList
     */
    readonly issueId?: number

    /**
     * A simple equality filter for the job_id field
     * @type {number}
     * @memberof CommentsApiCommentsList
     */
    readonly jobId?: number

    /**
     * Organization unique slug
     * @type {string}
     * @memberof CommentsApiCommentsList
     */
    readonly org?: string

    /**
     * Organization identifier
     * @type {number}
     * @memberof CommentsApiCommentsList
     */
    readonly orgId?: number

    /**
     * A simple equality filter for the owner field
     * @type {string}
     * @memberof CommentsApiCommentsList
     */
    readonly owner?: string

    /**
     * A page number within the paginated result set.
     * @type {number}
     * @memberof CommentsApiCommentsList
     */
    readonly page?: number

    /**
     * Number of results to return per page.
     * @type {number}
     * @memberof CommentsApiCommentsList
     */
    readonly pageSize?: number

    /**
     * A search term. Available search_fields: (\&#39;owner\&#39;,)
     * @type {string}
     * @memberof CommentsApiCommentsList
     */
    readonly search?: string

    /**
     * Which field to use when ordering the results. Available ordering_fields: [\&#39;owner\&#39;, \&#39;id\&#39;, \&#39;issue_id\&#39;, \&#39;frame_id\&#39;, \&#39;job_id\&#39;]
     * @type {string}
     * @memberof CommentsApiCommentsList
     */
    readonly sort?: string
}

/**
 * Request parameters for commentsPartialUpdate operation in CommentsApi.
 * @export
 * @interface CommentsApiCommentsPartialUpdateRequest
 */
export interface CommentsApiCommentsPartialUpdateRequest {
    /**
     * A unique integer value identifying this comment.
     * @type {number}
     * @memberof CommentsApiCommentsPartialUpdate
     */
    readonly id: number

    /**
     * 
     * @type {PatchedCommentWriteRequest}
     * @memberof CommentsApiCommentsPartialUpdate
     */
    readonly patchedCommentWriteRequest?: PatchedCommentWriteRequest
}

/**
 * Request parameters for commentsRetrieve operation in CommentsApi.
 * @export
 * @interface CommentsApiCommentsRetrieveRequest
 */
export interface CommentsApiCommentsRetrieveRequest {
    /**
     * A unique integer value identifying this comment.
     * @type {number}
     * @memberof CommentsApiCommentsRetrieve
     */
    readonly id: number
}

/**
 * CommentsApi - object-oriented interface
 * @export
 * @class CommentsApi
 * @extends {BaseAPI}
 */
export class CommentsApi extends BaseAPI {
    /**
     * 
     * @summary Method creates a comment
     * @param {CommentsApiCommentsCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public commentsCreate(requestParameters: CommentsApiCommentsCreateRequest, options?: AxiosRequestConfig) {
        return CommentsApiFp(this.configuration).commentsCreate(requestParameters.commentWriteRequest, requestParameters.xOrganization, requestParameters.org, requestParameters.orgId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Method deletes a comment
     * @param {CommentsApiCommentsDestroyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public commentsDestroy(requestParameters: CommentsApiCommentsDestroyRequest, options?: AxiosRequestConfig) {
        return CommentsApiFp(this.configuration).commentsDestroy(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Method returns a paginated list of comments
     * @param {CommentsApiCommentsListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public commentsList(requestParameters: CommentsApiCommentsListRequest = {}, options?: AxiosRequestConfig) {
        return CommentsApiFp(this.configuration).commentsList(requestParameters.xOrganization, requestParameters.filter, requestParameters.frameId, requestParameters.issueId, requestParameters.jobId, requestParameters.org, requestParameters.orgId, requestParameters.owner, requestParameters.page, requestParameters.pageSize, requestParameters.search, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Methods does a partial update of chosen fields in a comment
     * @param {CommentsApiCommentsPartialUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public commentsPartialUpdate(requestParameters: CommentsApiCommentsPartialUpdateRequest, options?: AxiosRequestConfig) {
        return CommentsApiFp(this.configuration).commentsPartialUpdate(requestParameters.id, requestParameters.patchedCommentWriteRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Method returns details of a comment
     * @param {CommentsApiCommentsRetrieveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public commentsRetrieve(requestParameters: CommentsApiCommentsRetrieveRequest, options?: AxiosRequestConfig) {
        return CommentsApiFp(this.configuration).commentsRetrieve(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }
}

