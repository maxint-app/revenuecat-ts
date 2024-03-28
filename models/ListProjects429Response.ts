/* tslint:disable */
/* eslint-disable */
/**
 * Developer API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ListProjects429Response
 */
export interface ListProjects429Response {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     * @type {string}
     * @memberof ListProjects429Response
     */
    object: ListProjects429ResponseObjectEnum;
    /**
     * 
     * @type {string}
     * @memberof ListProjects429Response
     */
    type: ListProjects429ResponseTypeEnum;
    /**
     * If the error is parameter-specific, the parameter related to the error
     * @type {string}
     * @memberof ListProjects429Response
     */
    param?: string;
    /**
     * A URL to more information about the error reported
     * @type {string}
     * @memberof ListProjects429Response
     */
    docUrl?: string;
    /**
     * A message describing the reason of the error
     * @type {string}
     * @memberof ListProjects429Response
     */
    message: string;
    /**
     * Indicates if the error is retryable or not
     * @type {boolean}
     * @memberof ListProjects429Response
     */
    retryable: boolean;
    /**
     * The ms the client should wait before retrying the request. Only present for retryable errors.
     * @type {number}
     * @memberof ListProjects429Response
     */
    backoffMs?: number;
}


/**
 * @export
 */
export const ListProjects429ResponseObjectEnum = {
    Error: 'error'
} as const;
export type ListProjects429ResponseObjectEnum = typeof ListProjects429ResponseObjectEnum[keyof typeof ListProjects429ResponseObjectEnum];

/**
 * @export
 */
export const ListProjects429ResponseTypeEnum = {
    RateLimitError: 'rate_limit_error'
} as const;
export type ListProjects429ResponseTypeEnum = typeof ListProjects429ResponseTypeEnum[keyof typeof ListProjects429ResponseTypeEnum];


/**
 * Check if a given object implements the ListProjects429Response interface.
 */
export function instanceOfListProjects429Response(value: object): boolean {
    if (!('object' in value)) return false;
    if (!('type' in value)) return false;
    if (!('message' in value)) return false;
    if (!('retryable' in value)) return false;
    return true;
}

export function ListProjects429ResponseFromJSON(json: any): ListProjects429Response {
    return ListProjects429ResponseFromJSONTyped(json, false);
}

export function ListProjects429ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListProjects429Response {
    if (json == null) {
        return json;
    }
    return {
        
        'object': json['object'],
        'type': json['type'],
        'param': json['param'] == null ? undefined : json['param'],
        'docUrl': json['doc_url'] == null ? undefined : json['doc_url'],
        'message': json['message'],
        'retryable': json['retryable'],
        'backoffMs': json['backoff_ms'] == null ? undefined : json['backoff_ms'],
    };
}

export function ListProjects429ResponseToJSON(value?: ListProjects429Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'object': value['object'],
        'type': value['type'],
        'param': value['param'],
        'doc_url': value['docUrl'],
        'message': value['message'],
        'retryable': value['retryable'],
        'backoff_ms': value['backoffMs'],
    };
}

