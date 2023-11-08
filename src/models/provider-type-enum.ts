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



/**
 * * `AWS_S3_BUCKET` - AWS_S3 * `AZURE_CONTAINER` - AZURE_CONTAINER * `GOOGLE_DRIVE` - GOOGLE_DRIVE * `GOOGLE_CLOUD_STORAGE` - GOOGLE_CLOUD_STORAGE
 * @export
 * @enum {string}
 */

export const ProviderTypeEnum = {
    AwsS3Bucket: 'AWS_S3_BUCKET',
    AzureContainer: 'AZURE_CONTAINER',
    GoogleDrive: 'GOOGLE_DRIVE',
    GoogleCloudStorage: 'GOOGLE_CLOUD_STORAGE'
} as const;

export type ProviderTypeEnum = typeof ProviderTypeEnum[keyof typeof ProviderTypeEnum];



