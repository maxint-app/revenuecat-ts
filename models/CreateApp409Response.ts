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

import { mapValues } from "../runtime.ts";
/**
 * 
 * @export
 * @interface CreateApp409Response
 */
export interface CreateApp409Response {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     * @type {string}
     * @memberof CreateApp409Response
     */
    object: CreateApp409ResponseObjectEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateApp409Response
     */
    type: CreateApp409ResponseTypeEnum;
    /**
     * If the error is parameter-specific, the parameter related to the error
     * @type {string}
     * @memberof CreateApp409Response
     */
    param?: string;
    /**
     * A URL to more information about the error reported
     * @type {string}
     * @memberof CreateApp409Response
     */
    docUrl?: string;
    /**
     * A message describing the reason of the error
     * @type {string}
     * @memberof CreateApp409Response
     */
    message: string;
    /**
     * Indicates if the error is retryable or not
     * @type {boolean}
     * @memberof CreateApp409Response
     */
    retryable: boolean;
    /**
     * The ms the client should wait before retrying the request. Only present for retryable errors.
     * @type {number}
     * @memberof CreateApp409Response
     */
    backoffMs?: number;
}


/**
 * @export
 */
export const CreateApp409ResponseObjectEnum = {
    Error: 'error'
} as const;
export type CreateApp409ResponseObjectEnum = typeof CreateApp409ResponseObjectEnum[keyof typeof CreateApp409ResponseObjectEnum];

/**
 * @export
 */
export const CreateApp409ResponseTypeEnum = {
    ResourceAlreadyExists: 'resource_already_exists',
    IdempotencyError: 'idempotency_error'
} as const;
export type CreateApp409ResponseTypeEnum = typeof CreateApp409ResponseTypeEnum[keyof typeof CreateApp409ResponseTypeEnum];


/**
 * Check if a given object implements the CreateApp409Response interface.
 */
export function instanceOfCreateApp409Response(value: object): boolean {
    if (!('object' in value)) return false;
    if (!('type' in value)) return false;
    if (!('message' in value)) return false;
    if (!('retryable' in value)) return false;
    return true;
}

export function CreateApp409ResponseFromJSON(json: any): CreateApp409Response {
    return CreateApp409ResponseFromJSONTyped(json, false);
}

export function CreateApp409ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateApp409Response {
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

export function CreateApp409ResponseToJSON(value?: CreateApp409Response | null): any {
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

