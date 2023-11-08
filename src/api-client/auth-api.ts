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
import { LoginSerializerExRequest } from '../models';
// @ts-ignore
import { PasswordChangeRequest } from '../models';
// @ts-ignore
import { PasswordResetConfirmRequest } from '../models';
// @ts-ignore
import { PasswordResetSerializerExRequest } from '../models';
// @ts-ignore
import { RegisterSerializerEx } from '../models';
// @ts-ignore
import { RegisterSerializerExRequest } from '../models';
// @ts-ignore
import { RestAuthDetail } from '../models';
// @ts-ignore
import { SigningRequest } from '../models';
// @ts-ignore
import { Token } from '../models';
/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Check the credentials and return the REST Token if the credentials are valid and authenticated. If email verification is enabled and the user has the unverified email, an email with a confirmation link will be sent. Calls Django Auth login method to register User ID in Django session framework.  Accept the following POST parameters: username, email, password Return the REST Framework Token Object\'s key.
         * @param {LoginSerializerExRequest} loginSerializerExRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authCreateLogin: async (loginSerializerExRequest: LoginSerializerExRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginSerializerExRequest' is not null or undefined
            assertParamExists('authCreateLogin', 'loginSerializerExRequest', loginSerializerExRequest)
            const localVarPath = `/api/auth/login`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(loginSerializerExRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Calls Django logout method and delete the Token object assigned to the current User object.  Accepts/Returns nothing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authCreateLogout: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/auth/logout`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Calls Django Auth SetPasswordForm save method.  Accepts the following POST parameters: new_password1, new_password2 Returns the success/fail message.
         * @param {PasswordChangeRequest} passwordChangeRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authCreatePasswordChange: async (passwordChangeRequest: PasswordChangeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'passwordChangeRequest' is not null or undefined
            assertParamExists('authCreatePasswordChange', 'passwordChangeRequest', passwordChangeRequest)
            const localVarPath = `/api/auth/password/change`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(passwordChangeRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Calls Django Auth PasswordResetForm save method.  Accepts the following POST parameters: email Returns the success/fail message.
         * @param {PasswordResetSerializerExRequest} passwordResetSerializerExRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authCreatePasswordReset: async (passwordResetSerializerExRequest: PasswordResetSerializerExRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'passwordResetSerializerExRequest' is not null or undefined
            assertParamExists('authCreatePasswordReset', 'passwordResetSerializerExRequest', passwordResetSerializerExRequest)
            const localVarPath = `/api/auth/password/reset`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(passwordResetSerializerExRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Password reset e-mail link is confirmed, therefore this resets the user\'s password.  Accepts the following POST parameters: token, uid,     new_password1, new_password2 Returns the success/fail message.
         * @param {PasswordResetConfirmRequest} passwordResetConfirmRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authCreatePasswordResetConfirm: async (passwordResetConfirmRequest: PasswordResetConfirmRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'passwordResetConfirmRequest' is not null or undefined
            assertParamExists('authCreatePasswordResetConfirm', 'passwordResetConfirmRequest', passwordResetConfirmRequest)
            const localVarPath = `/api/auth/password/reset/confirm`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(passwordResetConfirmRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {RegisterSerializerExRequest} registerSerializerExRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authCreateRegister: async (registerSerializerExRequest: RegisterSerializerExRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'registerSerializerExRequest' is not null or undefined
            assertParamExists('authCreateRegister', 'registerSerializerExRequest', registerSerializerExRequest)
            const localVarPath = `/api/auth/register`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(registerSerializerExRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Signed URL contains a token which authenticates a user on the server.Signed URL is valid during 30 seconds since signing.
         * @summary This method signs URL for access to the server
         * @param {SigningRequest} signingRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authCreateSigning: async (signingRequest: SigningRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'signingRequest' is not null or undefined
            assertParamExists('authCreateSigning', 'signingRequest', signingRequest)
            const localVarPath = `/api/auth/signing`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(signingRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authRetrieveRules: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/auth/rules`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * Check the credentials and return the REST Token if the credentials are valid and authenticated. If email verification is enabled and the user has the unverified email, an email with a confirmation link will be sent. Calls Django Auth login method to register User ID in Django session framework.  Accept the following POST parameters: username, email, password Return the REST Framework Token Object\'s key.
         * @param {LoginSerializerExRequest} loginSerializerExRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authCreateLogin(loginSerializerExRequest: LoginSerializerExRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Token>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authCreateLogin(loginSerializerExRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Calls Django logout method and delete the Token object assigned to the current User object.  Accepts/Returns nothing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authCreateLogout(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RestAuthDetail>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authCreateLogout(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Calls Django Auth SetPasswordForm save method.  Accepts the following POST parameters: new_password1, new_password2 Returns the success/fail message.
         * @param {PasswordChangeRequest} passwordChangeRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authCreatePasswordChange(passwordChangeRequest: PasswordChangeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RestAuthDetail>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authCreatePasswordChange(passwordChangeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Calls Django Auth PasswordResetForm save method.  Accepts the following POST parameters: email Returns the success/fail message.
         * @param {PasswordResetSerializerExRequest} passwordResetSerializerExRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authCreatePasswordReset(passwordResetSerializerExRequest: PasswordResetSerializerExRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RestAuthDetail>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authCreatePasswordReset(passwordResetSerializerExRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Password reset e-mail link is confirmed, therefore this resets the user\'s password.  Accepts the following POST parameters: token, uid,     new_password1, new_password2 Returns the success/fail message.
         * @param {PasswordResetConfirmRequest} passwordResetConfirmRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authCreatePasswordResetConfirm(passwordResetConfirmRequest: PasswordResetConfirmRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RestAuthDetail>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authCreatePasswordResetConfirm(passwordResetConfirmRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {RegisterSerializerExRequest} registerSerializerExRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authCreateRegister(registerSerializerExRequest: RegisterSerializerExRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RegisterSerializerEx>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authCreateRegister(registerSerializerExRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Signed URL contains a token which authenticates a user on the server.Signed URL is valid during 30 seconds since signing.
         * @summary This method signs URL for access to the server
         * @param {SigningRequest} signingRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authCreateSigning(signingRequest: SigningRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authCreateSigning(signingRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authRetrieveRules(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authRetrieveRules(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * Check the credentials and return the REST Token if the credentials are valid and authenticated. If email verification is enabled and the user has the unverified email, an email with a confirmation link will be sent. Calls Django Auth login method to register User ID in Django session framework.  Accept the following POST parameters: username, email, password Return the REST Framework Token Object\'s key.
         * @param {AuthApiAuthCreateLoginRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authCreateLogin(requestParameters: AuthApiAuthCreateLoginRequest, options?: AxiosRequestConfig): AxiosPromise<Token> {
            return localVarFp.authCreateLogin(requestParameters.loginSerializerExRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Calls Django logout method and delete the Token object assigned to the current User object.  Accepts/Returns nothing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authCreateLogout(options?: AxiosRequestConfig): AxiosPromise<RestAuthDetail> {
            return localVarFp.authCreateLogout(options).then((request) => request(axios, basePath));
        },
        /**
         * Calls Django Auth SetPasswordForm save method.  Accepts the following POST parameters: new_password1, new_password2 Returns the success/fail message.
         * @param {AuthApiAuthCreatePasswordChangeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authCreatePasswordChange(requestParameters: AuthApiAuthCreatePasswordChangeRequest, options?: AxiosRequestConfig): AxiosPromise<RestAuthDetail> {
            return localVarFp.authCreatePasswordChange(requestParameters.passwordChangeRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Calls Django Auth PasswordResetForm save method.  Accepts the following POST parameters: email Returns the success/fail message.
         * @param {AuthApiAuthCreatePasswordResetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authCreatePasswordReset(requestParameters: AuthApiAuthCreatePasswordResetRequest, options?: AxiosRequestConfig): AxiosPromise<RestAuthDetail> {
            return localVarFp.authCreatePasswordReset(requestParameters.passwordResetSerializerExRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Password reset e-mail link is confirmed, therefore this resets the user\'s password.  Accepts the following POST parameters: token, uid,     new_password1, new_password2 Returns the success/fail message.
         * @param {AuthApiAuthCreatePasswordResetConfirmRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authCreatePasswordResetConfirm(requestParameters: AuthApiAuthCreatePasswordResetConfirmRequest, options?: AxiosRequestConfig): AxiosPromise<RestAuthDetail> {
            return localVarFp.authCreatePasswordResetConfirm(requestParameters.passwordResetConfirmRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AuthApiAuthCreateRegisterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authCreateRegister(requestParameters: AuthApiAuthCreateRegisterRequest, options?: AxiosRequestConfig): AxiosPromise<RegisterSerializerEx> {
            return localVarFp.authCreateRegister(requestParameters.registerSerializerExRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Signed URL contains a token which authenticates a user on the server.Signed URL is valid during 30 seconds since signing.
         * @summary This method signs URL for access to the server
         * @param {AuthApiAuthCreateSigningRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authCreateSigning(requestParameters: AuthApiAuthCreateSigningRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.authCreateSigning(requestParameters.signingRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authRetrieveRules(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.authRetrieveRules(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for authCreateLogin operation in AuthApi.
 * @export
 * @interface AuthApiAuthCreateLoginRequest
 */
export interface AuthApiAuthCreateLoginRequest {
    /**
     * 
     * @type {LoginSerializerExRequest}
     * @memberof AuthApiAuthCreateLogin
     */
    readonly loginSerializerExRequest: LoginSerializerExRequest
}

/**
 * Request parameters for authCreatePasswordChange operation in AuthApi.
 * @export
 * @interface AuthApiAuthCreatePasswordChangeRequest
 */
export interface AuthApiAuthCreatePasswordChangeRequest {
    /**
     * 
     * @type {PasswordChangeRequest}
     * @memberof AuthApiAuthCreatePasswordChange
     */
    readonly passwordChangeRequest: PasswordChangeRequest
}

/**
 * Request parameters for authCreatePasswordReset operation in AuthApi.
 * @export
 * @interface AuthApiAuthCreatePasswordResetRequest
 */
export interface AuthApiAuthCreatePasswordResetRequest {
    /**
     * 
     * @type {PasswordResetSerializerExRequest}
     * @memberof AuthApiAuthCreatePasswordReset
     */
    readonly passwordResetSerializerExRequest: PasswordResetSerializerExRequest
}

/**
 * Request parameters for authCreatePasswordResetConfirm operation in AuthApi.
 * @export
 * @interface AuthApiAuthCreatePasswordResetConfirmRequest
 */
export interface AuthApiAuthCreatePasswordResetConfirmRequest {
    /**
     * 
     * @type {PasswordResetConfirmRequest}
     * @memberof AuthApiAuthCreatePasswordResetConfirm
     */
    readonly passwordResetConfirmRequest: PasswordResetConfirmRequest
}

/**
 * Request parameters for authCreateRegister operation in AuthApi.
 * @export
 * @interface AuthApiAuthCreateRegisterRequest
 */
export interface AuthApiAuthCreateRegisterRequest {
    /**
     * 
     * @type {RegisterSerializerExRequest}
     * @memberof AuthApiAuthCreateRegister
     */
    readonly registerSerializerExRequest: RegisterSerializerExRequest
}

/**
 * Request parameters for authCreateSigning operation in AuthApi.
 * @export
 * @interface AuthApiAuthCreateSigningRequest
 */
export interface AuthApiAuthCreateSigningRequest {
    /**
     * 
     * @type {SigningRequest}
     * @memberof AuthApiAuthCreateSigning
     */
    readonly signingRequest: SigningRequest
}

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * Check the credentials and return the REST Token if the credentials are valid and authenticated. If email verification is enabled and the user has the unverified email, an email with a confirmation link will be sent. Calls Django Auth login method to register User ID in Django session framework.  Accept the following POST parameters: username, email, password Return the REST Framework Token Object\'s key.
     * @param {AuthApiAuthCreateLoginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authCreateLogin(requestParameters: AuthApiAuthCreateLoginRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authCreateLogin(requestParameters.loginSerializerExRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Calls Django logout method and delete the Token object assigned to the current User object.  Accepts/Returns nothing.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authCreateLogout(options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authCreateLogout(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Calls Django Auth SetPasswordForm save method.  Accepts the following POST parameters: new_password1, new_password2 Returns the success/fail message.
     * @param {AuthApiAuthCreatePasswordChangeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authCreatePasswordChange(requestParameters: AuthApiAuthCreatePasswordChangeRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authCreatePasswordChange(requestParameters.passwordChangeRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Calls Django Auth PasswordResetForm save method.  Accepts the following POST parameters: email Returns the success/fail message.
     * @param {AuthApiAuthCreatePasswordResetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authCreatePasswordReset(requestParameters: AuthApiAuthCreatePasswordResetRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authCreatePasswordReset(requestParameters.passwordResetSerializerExRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Password reset e-mail link is confirmed, therefore this resets the user\'s password.  Accepts the following POST parameters: token, uid,     new_password1, new_password2 Returns the success/fail message.
     * @param {AuthApiAuthCreatePasswordResetConfirmRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authCreatePasswordResetConfirm(requestParameters: AuthApiAuthCreatePasswordResetConfirmRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authCreatePasswordResetConfirm(requestParameters.passwordResetConfirmRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AuthApiAuthCreateRegisterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authCreateRegister(requestParameters: AuthApiAuthCreateRegisterRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authCreateRegister(requestParameters.registerSerializerExRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Signed URL contains a token which authenticates a user on the server.Signed URL is valid during 30 seconds since signing.
     * @summary This method signs URL for access to the server
     * @param {AuthApiAuthCreateSigningRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authCreateSigning(requestParameters: AuthApiAuthCreateSigningRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authCreateSigning(requestParameters.signingRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authRetrieveRules(options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authRetrieveRules(options).then((request) => request(this.axios, this.basePath));
    }
}

