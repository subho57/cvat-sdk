/* tslint:disable */
/* eslint-disable */
/**
 * CVAT REST API
 * REST API for Computer Vision Annotation Tool (CVAT)
 *
 * The version of the OpenAPI document: 2.6.1
 * Contact: support@cvat.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { ChunkType } from './chunk-type';
// May contain unused imports in some cases
// @ts-ignore
import { SortingMethod } from './sorting-method';
// May contain unused imports in some cases
// @ts-ignore
import { StorageMethod } from './storage-method';
// May contain unused imports in some cases
// @ts-ignore
import { StorageType } from './storage-type';

/**
 * Read more about parameters here: https://opencv.github.io/cvat/docs/manual/basics/create_an_annotation_task/#advanced-configuration
 * @export
 * @interface DataRequest
 */
export interface DataRequest {
    /**
     * Maximum number of frames per chunk
     * @type {number}
     * @memberof DataRequest
     */
    'chunk_size'?: number | null;
    /**
     * The number of frames
     * @type {number}
     * @memberof DataRequest
     */
    'size'?: number;
    /**
     * Image quality to use during annotation
     * @type {number}
     * @memberof DataRequest
     */
    'image_quality': number;
    /**
     * First frame index
     * @type {number}
     * @memberof DataRequest
     */
    'start_frame'?: number;
    /**
     * Last frame index
     * @type {number}
     * @memberof DataRequest
     */
    'stop_frame'?: number;
    /**
     * Frame filter. The only supported syntax is: \'step=N\'
     * @type {string}
     * @memberof DataRequest
     */
    'frame_filter'?: string;
    /**
     * 
     * @type {ChunkType}
     * @memberof DataRequest
     */
    'compressed_chunk_type'?: ChunkType;
    /**
     * 
     * @type {ChunkType}
     * @memberof DataRequest
     */
    'original_chunk_type'?: ChunkType;
    /**
     * Uploaded files
     * @type {Array<File>}
     * @memberof DataRequest
     */
    'client_files'?: Array<File>;
    /**
     * Paths to files from a file share mounted on the server, or from a cloud storage
     * @type {Array<string>}
     * @memberof DataRequest
     */
    'server_files'?: Array<string>;
    /**
     * Direct download URLs for files
     * @type {Array<string>}
     * @memberof DataRequest
     */
    'remote_files'?: Array<string>;
    /**
     * When true, video chunks will be represented as zip archives with decoded video frames. When false, video chunks are represented as video segments 
     * @type {boolean}
     * @memberof DataRequest
     */
    'use_zip_chunks'?: boolean;
    /**
     * Paths to files and directories from a file share mounted on the server, or from a cloud storage that should be excluded from the directories specified in server_files. This option cannot be used together with filename_pattern. The server_files_exclude parameter cannot be used to exclude a part of dataset from an archive.  Examples:  Exclude all files from subfolder \'sub/sub_1/sub_2\'and single file \'sub/image.jpg\' from specified folder: server_files = [\'sub/\'], server_files_exclude = [\'sub/sub_1/sub_2/\', \'sub/image.jpg\']  Exclude all cloud storage files with prefix \'sub\' from the content of manifest file: server_files = [\'manifest.jsonl\'], server_files_exclude = [\'sub/\'] 
     * @type {Array<string>}
     * @memberof DataRequest
     */
    'server_files_exclude'?: Array<string>;
    /**
     * If not null, the files referenced by server_files will be retrieved from the cloud storage with the specified ID. The cloud storages applicable depend on the context. In the user sandbox, only the user sandbox cloud storages can be used. In an organization, only the organization cloud storages can be used. 
     * @type {number}
     * @memberof DataRequest
     */
    'cloud_storage_id'?: number | null;
    /**
     * Enable or disable task data chunk caching for the task. Read more: https://opencv.github.io/cvat/docs/manual/advanced/data_on_fly/ 
     * @type {boolean}
     * @memberof DataRequest
     */
    'use_cache'?: boolean;
    /**
     * Copy data from the server file share to CVAT during the task creation. This will create a copy of the data, making the server independent from the file share availability 
     * @type {boolean}
     * @memberof DataRequest
     */
    'copy_data'?: boolean;
    /**
     * 
     * @type {StorageMethod}
     * @memberof DataRequest
     */
    'storage_method'?: StorageMethod;
    /**
     * 
     * @type {StorageType}
     * @memberof DataRequest
     */
    'storage'?: StorageType;
    /**
     * 
     * @type {SortingMethod}
     * @memberof DataRequest
     */
    'sorting_method'?: SortingMethod;
    /**
     * A filename filter for cloud storage files listed in the manifest. Supports fnmatch wildcards. Read more: https://docs.python.org/3/library/fnmatch.html 
     * @type {string}
     * @memberof DataRequest
     */
    'filename_pattern'?: string | null;
    /**
     *  Represents a file-to-job mapping. Useful to specify a custom job configuration during task creation. This option is not compatible with most other job split-related options. Files in the jobs must not overlap or repeat.  Example: [     [\"file1.jpg\", \"file2.jpg\"], # job #1 files     [\"file3.png\"], # job #2 files     [\"file4.jpg\", \"file5.png\", \"file6.bmp\"], # job #3 files ] 
     * @type {Array<Array<string>>}
     * @memberof DataRequest
     */
    'job_file_mapping'?: Array<Array<string>>;
    /**
     * Allows to specify file order for client_file uploads. Only valid with the \"predefined\" sorting method selected.  To state that the input files are sent in the correct order, pass an empty list.  If you want to send files in an arbitrary order and reorder them afterwards on the server, pass the list of file names in the required order. 
     * @type {Array<string>}
     * @memberof DataRequest
     */
    'upload_file_order'?: Array<string>;
}



