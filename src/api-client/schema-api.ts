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
/**
 * SchemaApi - axios parameter creator
 * @export
 */
export const SchemaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
         * @param {SchemaRetrieveLangEnum} [lang] 
         * @param {SchemaRetrieveSchemeEnum} [scheme] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schemaRetrieve: async (lang?: SchemaRetrieveLangEnum, scheme?: SchemaRetrieveSchemeEnum, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/schema/`;
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

            if (lang !== undefined) {
                localVarQueryParameter['lang'] = lang;
            }

            if (scheme !== undefined) {
                localVarQueryParameter['scheme'] = scheme;
            }


    
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
 * SchemaApi - functional programming interface
 * @export
 */
export const SchemaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SchemaApiAxiosParamCreator(configuration)
    return {
        /**
         * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
         * @param {SchemaRetrieveLangEnum} [lang] 
         * @param {SchemaRetrieveSchemeEnum} [scheme] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async schemaRetrieve(lang?: SchemaRetrieveLangEnum, scheme?: SchemaRetrieveSchemeEnum, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: any; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.schemaRetrieve(lang, scheme, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SchemaApi - factory interface
 * @export
 */
export const SchemaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SchemaApiFp(configuration)
    return {
        /**
         * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
         * @param {SchemaApiSchemaRetrieveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schemaRetrieve(requestParameters: SchemaApiSchemaRetrieveRequest = {}, options?: AxiosRequestConfig): AxiosPromise<{ [key: string]: any; }> {
            return localVarFp.schemaRetrieve(requestParameters.lang, requestParameters.scheme, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for schemaRetrieve operation in SchemaApi.
 * @export
 * @interface SchemaApiSchemaRetrieveRequest
 */
export interface SchemaApiSchemaRetrieveRequest {
    /**
     * 
     * @type {'af' | 'ar' | 'ar-dz' | 'ast' | 'az' | 'be' | 'bg' | 'bn' | 'br' | 'bs' | 'ca' | 'ckb' | 'cs' | 'cy' | 'da' | 'de' | 'dsb' | 'el' | 'en' | 'en-au' | 'en-gb' | 'eo' | 'es' | 'es-ar' | 'es-co' | 'es-mx' | 'es-ni' | 'es-ve' | 'et' | 'eu' | 'fa' | 'fi' | 'fr' | 'fy' | 'ga' | 'gd' | 'gl' | 'he' | 'hi' | 'hr' | 'hsb' | 'hu' | 'hy' | 'ia' | 'id' | 'ig' | 'io' | 'is' | 'it' | 'ja' | 'ka' | 'kab' | 'kk' | 'km' | 'kn' | 'ko' | 'ky' | 'lb' | 'lt' | 'lv' | 'mk' | 'ml' | 'mn' | 'mr' | 'ms' | 'my' | 'nb' | 'ne' | 'nl' | 'nn' | 'os' | 'pa' | 'pl' | 'pt' | 'pt-br' | 'ro' | 'ru' | 'sk' | 'sl' | 'sq' | 'sr' | 'sr-latn' | 'sv' | 'sw' | 'ta' | 'te' | 'tg' | 'th' | 'tk' | 'tr' | 'tt' | 'udm' | 'uk' | 'ur' | 'uz' | 'vi' | 'zh-hans' | 'zh-hant'}
     * @memberof SchemaApiSchemaRetrieve
     */
    readonly lang?: SchemaRetrieveLangEnum

    /**
     * 
     * @type {'json' | 'yaml'}
     * @memberof SchemaApiSchemaRetrieve
     */
    readonly scheme?: SchemaRetrieveSchemeEnum
}

/**
 * SchemaApi - object-oriented interface
 * @export
 * @class SchemaApi
 * @extends {BaseAPI}
 */
export class SchemaApi extends BaseAPI {
    /**
     * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
     * @param {SchemaApiSchemaRetrieveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchemaApi
     */
    public schemaRetrieve(requestParameters: SchemaApiSchemaRetrieveRequest = {}, options?: AxiosRequestConfig) {
        return SchemaApiFp(this.configuration).schemaRetrieve(requestParameters.lang, requestParameters.scheme, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const SchemaRetrieveLangEnum = {
    Af: 'af',
    Ar: 'ar',
    ArDz: 'ar-dz',
    Ast: 'ast',
    Az: 'az',
    Be: 'be',
    Bg: 'bg',
    Bn: 'bn',
    Br: 'br',
    Bs: 'bs',
    Ca: 'ca',
    Ckb: 'ckb',
    Cs: 'cs',
    Cy: 'cy',
    Da: 'da',
    De: 'de',
    Dsb: 'dsb',
    El: 'el',
    En: 'en',
    EnAu: 'en-au',
    EnGb: 'en-gb',
    Eo: 'eo',
    Es: 'es',
    EsAr: 'es-ar',
    EsCo: 'es-co',
    EsMx: 'es-mx',
    EsNi: 'es-ni',
    EsVe: 'es-ve',
    Et: 'et',
    Eu: 'eu',
    Fa: 'fa',
    Fi: 'fi',
    Fr: 'fr',
    Fy: 'fy',
    Ga: 'ga',
    Gd: 'gd',
    Gl: 'gl',
    He: 'he',
    Hi: 'hi',
    Hr: 'hr',
    Hsb: 'hsb',
    Hu: 'hu',
    Hy: 'hy',
    Ia: 'ia',
    Id: 'id',
    Ig: 'ig',
    Io: 'io',
    Is: 'is',
    It: 'it',
    Ja: 'ja',
    Ka: 'ka',
    Kab: 'kab',
    Kk: 'kk',
    Km: 'km',
    Kn: 'kn',
    Ko: 'ko',
    Ky: 'ky',
    Lb: 'lb',
    Lt: 'lt',
    Lv: 'lv',
    Mk: 'mk',
    Ml: 'ml',
    Mn: 'mn',
    Mr: 'mr',
    Ms: 'ms',
    My: 'my',
    Nb: 'nb',
    Ne: 'ne',
    Nl: 'nl',
    Nn: 'nn',
    Os: 'os',
    Pa: 'pa',
    Pl: 'pl',
    Pt: 'pt',
    PtBr: 'pt-br',
    Ro: 'ro',
    Ru: 'ru',
    Sk: 'sk',
    Sl: 'sl',
    Sq: 'sq',
    Sr: 'sr',
    SrLatn: 'sr-latn',
    Sv: 'sv',
    Sw: 'sw',
    Ta: 'ta',
    Te: 'te',
    Tg: 'tg',
    Th: 'th',
    Tk: 'tk',
    Tr: 'tr',
    Tt: 'tt',
    Udm: 'udm',
    Uk: 'uk',
    Ur: 'ur',
    Uz: 'uz',
    Vi: 'vi',
    ZhHans: 'zh-hans',
    ZhHant: 'zh-hant'
} as const;
export type SchemaRetrieveLangEnum = typeof SchemaRetrieveLangEnum[keyof typeof SchemaRetrieveLangEnum];
/**
 * @export
 */
export const SchemaRetrieveSchemeEnum = {
    Json: 'json',
    Yaml: 'yaml'
} as const;
export type SchemaRetrieveSchemeEnum = typeof SchemaRetrieveSchemeEnum[keyof typeof SchemaRetrieveSchemeEnum];