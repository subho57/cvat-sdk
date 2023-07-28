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
import { MetaUser } from '../models';
// @ts-ignore
import { PaginatedMetaUserList } from '../models';
// @ts-ignore
import { PatchedUserRequest } from '../models';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Method deletes a specific user from the server
         * @param {number} id A unique integer value identifying this user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersDestroy: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('usersDestroy', 'id', id)
            const localVarPath = `/api/users/{id}`
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
         * @summary Method returns a paginated list of users
         * @param {string} [xOrganization] Organization unique slug
         * @param {string} [filter] A filter term. Available filter_fields: [\&#39;username\&#39;, \&#39;first_name\&#39;, \&#39;last_name\&#39;, \&#39;id\&#39;, \&#39;is_active\&#39;]
         * @param {string} [firstName] A simple equality filter for the first_name field
         * @param {boolean} [isActive] A simple equality filter for the is_active field
         * @param {string} [lastName] A simple equality filter for the last_name field
         * @param {string} [org] Organization unique slug
         * @param {number} [orgId] Organization identifier
         * @param {number} [page] A page number within the paginated result set.
         * @param {number} [pageSize] Number of results to return per page.
         * @param {string} [search] A search term. Available search_fields: (\&#39;username\&#39;, \&#39;first_name\&#39;, \&#39;last_name\&#39;)
         * @param {string} [sort] Which field to use when ordering the results. Available ordering_fields: [\&#39;username\&#39;, \&#39;first_name\&#39;, \&#39;last_name\&#39;, \&#39;id\&#39;, \&#39;is_active\&#39;]
         * @param {string} [username] A simple equality filter for the username field
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersList: async (xOrganization?: string, filter?: string, firstName?: string, isActive?: boolean, lastName?: string, org?: string, orgId?: number, page?: number, pageSize?: number, search?: string, sort?: string, username?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/users`;
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

            if (firstName !== undefined) {
                localVarQueryParameter['first_name'] = firstName;
            }

            if (isActive !== undefined) {
                localVarQueryParameter['is_active'] = isActive;
            }

            if (lastName !== undefined) {
                localVarQueryParameter['last_name'] = lastName;
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

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (username !== undefined) {
                localVarQueryParameter['username'] = username;
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
         * @summary Method updates chosen fields of a user
         * @param {number} id A unique integer value identifying this user.
         * @param {PatchedUserRequest} [patchedUserRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPartialUpdate: async (id: number, patchedUserRequest?: PatchedUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('usersPartialUpdate', 'id', id)
            const localVarPath = `/api/users/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Method provides information of a specific user
         * @param {number} id A unique integer value identifying this user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersRetrieve: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('usersRetrieve', 'id', id)
            const localVarPath = `/api/users/{id}`
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
        /**
         * Method returns an instance of a user who is currently authorized
         * @summary Method returns an instance of a user who is currently authorized
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersRetrieveSelf: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/users/self`;
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
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Method deletes a specific user from the server
         * @param {number} id A unique integer value identifying this user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersDestroy(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersDestroy(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Method returns a paginated list of users
         * @param {string} [xOrganization] Organization unique slug
         * @param {string} [filter] A filter term. Available filter_fields: [\&#39;username\&#39;, \&#39;first_name\&#39;, \&#39;last_name\&#39;, \&#39;id\&#39;, \&#39;is_active\&#39;]
         * @param {string} [firstName] A simple equality filter for the first_name field
         * @param {boolean} [isActive] A simple equality filter for the is_active field
         * @param {string} [lastName] A simple equality filter for the last_name field
         * @param {string} [org] Organization unique slug
         * @param {number} [orgId] Organization identifier
         * @param {number} [page] A page number within the paginated result set.
         * @param {number} [pageSize] Number of results to return per page.
         * @param {string} [search] A search term. Available search_fields: (\&#39;username\&#39;, \&#39;first_name\&#39;, \&#39;last_name\&#39;)
         * @param {string} [sort] Which field to use when ordering the results. Available ordering_fields: [\&#39;username\&#39;, \&#39;first_name\&#39;, \&#39;last_name\&#39;, \&#39;id\&#39;, \&#39;is_active\&#39;]
         * @param {string} [username] A simple equality filter for the username field
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersList(xOrganization?: string, filter?: string, firstName?: string, isActive?: boolean, lastName?: string, org?: string, orgId?: number, page?: number, pageSize?: number, search?: string, sort?: string, username?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedMetaUserList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersList(xOrganization, filter, firstName, isActive, lastName, org, orgId, page, pageSize, search, sort, username, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Method updates chosen fields of a user
         * @param {number} id A unique integer value identifying this user.
         * @param {PatchedUserRequest} [patchedUserRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersPartialUpdate(id: number, patchedUserRequest?: PatchedUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetaUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersPartialUpdate(id, patchedUserRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Method provides information of a specific user
         * @param {number} id A unique integer value identifying this user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersRetrieve(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetaUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersRetrieve(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Method returns an instance of a user who is currently authorized
         * @summary Method returns an instance of a user who is currently authorized
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersRetrieveSelf(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetaUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersRetrieveSelf(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * 
         * @summary Method deletes a specific user from the server
         * @param {UsersApiUsersDestroyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersDestroy(requestParameters: UsersApiUsersDestroyRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.usersDestroy(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Method returns a paginated list of users
         * @param {UsersApiUsersListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersList(requestParameters: UsersApiUsersListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<PaginatedMetaUserList> {
            return localVarFp.usersList(requestParameters.xOrganization, requestParameters.filter, requestParameters.firstName, requestParameters.isActive, requestParameters.lastName, requestParameters.org, requestParameters.orgId, requestParameters.page, requestParameters.pageSize, requestParameters.search, requestParameters.sort, requestParameters.username, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Method updates chosen fields of a user
         * @param {UsersApiUsersPartialUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPartialUpdate(requestParameters: UsersApiUsersPartialUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<MetaUser> {
            return localVarFp.usersPartialUpdate(requestParameters.id, requestParameters.patchedUserRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Method provides information of a specific user
         * @param {UsersApiUsersRetrieveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersRetrieve(requestParameters: UsersApiUsersRetrieveRequest, options?: AxiosRequestConfig): AxiosPromise<MetaUser> {
            return localVarFp.usersRetrieve(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Method returns an instance of a user who is currently authorized
         * @summary Method returns an instance of a user who is currently authorized
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersRetrieveSelf(options?: AxiosRequestConfig): AxiosPromise<MetaUser> {
            return localVarFp.usersRetrieveSelf(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for usersDestroy operation in UsersApi.
 * @export
 * @interface UsersApiUsersDestroyRequest
 */
export interface UsersApiUsersDestroyRequest {
    /**
     * A unique integer value identifying this user.
     * @type {number}
     * @memberof UsersApiUsersDestroy
     */
    readonly id: number
}

/**
 * Request parameters for usersList operation in UsersApi.
 * @export
 * @interface UsersApiUsersListRequest
 */
export interface UsersApiUsersListRequest {
    /**
     * Organization unique slug
     * @type {string}
     * @memberof UsersApiUsersList
     */
    readonly xOrganization?: string

    /**
     * A filter term. Available filter_fields: [\&#39;username\&#39;, \&#39;first_name\&#39;, \&#39;last_name\&#39;, \&#39;id\&#39;, \&#39;is_active\&#39;]
     * @type {string}
     * @memberof UsersApiUsersList
     */
    readonly filter?: string

    /**
     * A simple equality filter for the first_name field
     * @type {string}
     * @memberof UsersApiUsersList
     */
    readonly firstName?: string

    /**
     * A simple equality filter for the is_active field
     * @type {boolean}
     * @memberof UsersApiUsersList
     */
    readonly isActive?: boolean

    /**
     * A simple equality filter for the last_name field
     * @type {string}
     * @memberof UsersApiUsersList
     */
    readonly lastName?: string

    /**
     * Organization unique slug
     * @type {string}
     * @memberof UsersApiUsersList
     */
    readonly org?: string

    /**
     * Organization identifier
     * @type {number}
     * @memberof UsersApiUsersList
     */
    readonly orgId?: number

    /**
     * A page number within the paginated result set.
     * @type {number}
     * @memberof UsersApiUsersList
     */
    readonly page?: number

    /**
     * Number of results to return per page.
     * @type {number}
     * @memberof UsersApiUsersList
     */
    readonly pageSize?: number

    /**
     * A search term. Available search_fields: (\&#39;username\&#39;, \&#39;first_name\&#39;, \&#39;last_name\&#39;)
     * @type {string}
     * @memberof UsersApiUsersList
     */
    readonly search?: string

    /**
     * Which field to use when ordering the results. Available ordering_fields: [\&#39;username\&#39;, \&#39;first_name\&#39;, \&#39;last_name\&#39;, \&#39;id\&#39;, \&#39;is_active\&#39;]
     * @type {string}
     * @memberof UsersApiUsersList
     */
    readonly sort?: string

    /**
     * A simple equality filter for the username field
     * @type {string}
     * @memberof UsersApiUsersList
     */
    readonly username?: string
}

/**
 * Request parameters for usersPartialUpdate operation in UsersApi.
 * @export
 * @interface UsersApiUsersPartialUpdateRequest
 */
export interface UsersApiUsersPartialUpdateRequest {
    /**
     * A unique integer value identifying this user.
     * @type {number}
     * @memberof UsersApiUsersPartialUpdate
     */
    readonly id: number

    /**
     * 
     * @type {PatchedUserRequest}
     * @memberof UsersApiUsersPartialUpdate
     */
    readonly patchedUserRequest?: PatchedUserRequest
}

/**
 * Request parameters for usersRetrieve operation in UsersApi.
 * @export
 * @interface UsersApiUsersRetrieveRequest
 */
export interface UsersApiUsersRetrieveRequest {
    /**
     * A unique integer value identifying this user.
     * @type {number}
     * @memberof UsersApiUsersRetrieve
     */
    readonly id: number
}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * 
     * @summary Method deletes a specific user from the server
     * @param {UsersApiUsersDestroyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersDestroy(requestParameters: UsersApiUsersDestroyRequest, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).usersDestroy(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Method returns a paginated list of users
     * @param {UsersApiUsersListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersList(requestParameters: UsersApiUsersListRequest = {}, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).usersList(requestParameters.xOrganization, requestParameters.filter, requestParameters.firstName, requestParameters.isActive, requestParameters.lastName, requestParameters.org, requestParameters.orgId, requestParameters.page, requestParameters.pageSize, requestParameters.search, requestParameters.sort, requestParameters.username, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Method updates chosen fields of a user
     * @param {UsersApiUsersPartialUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersPartialUpdate(requestParameters: UsersApiUsersPartialUpdateRequest, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).usersPartialUpdate(requestParameters.id, requestParameters.patchedUserRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Method provides information of a specific user
     * @param {UsersApiUsersRetrieveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersRetrieve(requestParameters: UsersApiUsersRetrieveRequest, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).usersRetrieve(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Method returns an instance of a user who is currently authorized
     * @summary Method returns an instance of a user who is currently authorized
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersRetrieveSelf(options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).usersRetrieveSelf(options).then((request) => request(this.axios, this.basePath));
    }
}

