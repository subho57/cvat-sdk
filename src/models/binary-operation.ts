/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.9.2
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { OperatorEnum } from './operator-enum';

/**
 * 
 * @export
 * @interface BinaryOperation
 */
export interface BinaryOperation {
    /**
     * The name of the data series used as the left (first) operand of the binary operation.
     * @type {string}
     * @memberof BinaryOperation
     */
    'left'?: string | null;
    /**
     * 
     * @type {OperatorEnum}
     * @memberof BinaryOperation
     */
    'operator': OperatorEnum;
    /**
     * The name of the data series used as the right (second) operand of the binary operation.
     * @type {string}
     * @memberof BinaryOperation
     */
    'right'?: string | null;
}



