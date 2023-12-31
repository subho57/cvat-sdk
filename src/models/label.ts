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
import { Attribute } from './attribute';
// May contain unused imports in some cases
// @ts-ignore
import { Sublabel } from './sublabel';

/**
 * 
 * @export
 * @interface Label
 */
export interface Label {
    /**
     * 
     * @type {number}
     * @memberof Label
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    'name': string;
    /**
     * The hex value for the RGB color. Will be generated automatically, unless specified explicitly.
     * @type {string}
     * @memberof Label
     */
    'color'?: string;
    /**
     * The list of attributes. If you want to remove an attribute, you need to recreate the label and specify the remaining attributes.
     * @type {Array<Attribute>}
     * @memberof Label
     */
    'attributes'?: Array<Attribute>;
    /**
     * Associated annotation type for this label
     * @type {string}
     * @memberof Label
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    'svg'?: string;
    /**
     * 
     * @type {Array<Sublabel>}
     * @memberof Label
     */
    'sublabels'?: Array<Sublabel>;
    /**
     * 
     * @type {number}
     * @memberof Label
     */
    'project_id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Label
     */
    'task_id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Label
     */
    'parent_id'?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof Label
     */
    'has_parent'?: boolean;
}

