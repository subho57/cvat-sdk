/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.30.0
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * * `rectangle` - RECTANGLE * `polygon` - POLYGON * `polyline` - POLYLINE * `points` - POINTS * `ellipse` - ELLIPSE * `cuboid` - CUBOID * `mask` - MASK * `skeleton` - SKELETON
 * @export
 * @enum {string}
 */

export const ShapeType = {
    Rectangle: 'rectangle',
    Polygon: 'polygon',
    Polyline: 'polyline',
    Points: 'points',
    Ellipse: 'ellipse',
    Cuboid: 'cuboid',
    Mask: 'mask',
    Skeleton: 'skeleton'
} as const;

export type ShapeType = typeof ShapeType[keyof typeof ShapeType];



