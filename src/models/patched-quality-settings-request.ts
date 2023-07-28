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



/**
 * 
 * @export
 * @interface PatchedQualitySettingsRequest
 */
export interface PatchedQualitySettingsRequest {
    /**
     * Used for distinction between matched / unmatched shapes
     * @type {number}
     * @memberof PatchedQualitySettingsRequest
     */
    'iou_threshold'?: number;
    /**
     * Like IoU threshold, but for points. The percent of the bbox area, used as the radius of the circle around the GT point, where the checked point is expected to be. Read more: https://cocodataset.org/#keypoints-eval 
     * @type {number}
     * @memberof PatchedQualitySettingsRequest
     */
    'oks_sigma'?: number;
    /**
     * Thickness of polylines, relatively to the (image area) ^ 0.5. The distance to the boundary around the GT line, inside of which the checked line points should be 
     * @type {number}
     * @memberof PatchedQualitySettingsRequest
     */
    'line_thickness'?: number;
    /**
     * Used for distinction between strong / weak (low_overlap) matches 
     * @type {number}
     * @memberof PatchedQualitySettingsRequest
     */
    'low_overlap_threshold'?: number;
    /**
     * Enables or disables polyline orientation comparison
     * @type {boolean}
     * @memberof PatchedQualitySettingsRequest
     */
    'compare_line_orientation'?: boolean;
    /**
     * The minimal gain in the GT IoU between the given and reversed line directions to consider the line inverted. Only used when the \'compare_line_orientation\' parameter is true 
     * @type {number}
     * @memberof PatchedQualitySettingsRequest
     */
    'line_orientation_threshold'?: number;
    /**
     * Enables or disables annotation group checks
     * @type {boolean}
     * @memberof PatchedQualitySettingsRequest
     */
    'compare_groups'?: boolean;
    /**
     * Minimal IoU for groups to be considered matching. Only used when the \'compare_groups\' parameter is true 
     * @type {number}
     * @memberof PatchedQualitySettingsRequest
     */
    'group_match_threshold'?: number;
    /**
     * Check for partially-covered annotations, useful in segmentation tasks 
     * @type {boolean}
     * @memberof PatchedQualitySettingsRequest
     */
    'check_covered_annotations'?: boolean;
    /**
     * Minimal visible area percent of the spatial annotations (polygons, masks) for reporting covered annotations. Only used when the \'object_visibility_threshold\' parameter is true 
     * @type {number}
     * @memberof PatchedQualitySettingsRequest
     */
    'object_visibility_threshold'?: number;
    /**
     * Use only the visible part of the masks and polygons in comparisons 
     * @type {boolean}
     * @memberof PatchedQualitySettingsRequest
     */
    'panoptic_comparison'?: boolean;
    /**
     * Enables or disables annotation attribute comparison
     * @type {boolean}
     * @memberof PatchedQualitySettingsRequest
     */
    'compare_attributes'?: boolean;
}

