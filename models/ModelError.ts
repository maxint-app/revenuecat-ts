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
 * @interface ModelError
 */
export interface ModelError {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     * @type {string}
     * @memberof ModelError
     */
    object: ModelErrorObjectEnum;
    /**
     * The error type
     * @type {string}
     * @memberof ModelError
     */
    type: ModelErrorTypeEnum;
    /**
     * If the error is parameter-specific, the parameter related to the error
     * @type {string}
     * @memberof ModelError
     */
    param?: string;
    /**
     * A URL to more information about the error reported
     * @type {string}
     * @memberof ModelError
     */
    docUrl?: string;
    /**
     * A message describing the reason of the error
     * @type {string}
     * @memberof ModelError
     */
    message: string;
    /**
     * Indicates if the error is retryable or not
     * @type {boolean}
     * @memberof ModelError
     */
    retryable: boolean;
    /**
     * The ms the client should wait before retrying the request. Only present for retryable errors.
     * @type {number}
     * @memberof ModelError
     */
    backoffMs?: number;
}


/**
 * @export
 */
export const ModelErrorObjectEnum = {
    Error: 'error'
} as const;
export type ModelErrorObjectEnum = typeof ModelErrorObjectEnum[keyof typeof ModelErrorObjectEnum];

/**
 * @export
 */
export const ModelErrorTypeEnum = {
    ParameterError: 'parameter_error',
    ResourceAlreadyExists: 'resource_already_exists',
    ResourceMissing: 'resource_missing',
    IdempotencyError: 'idempotency_error',
    RateLimitError: 'rate_limit_error',
    AuthenticationError: 'authentication_error',
    AuthorizationError: 'authorization_error',
    StoreError: 'store_error',
    ServerError: 'server_error',
    ResourceLockedError: 'resource_locked_error',
    UnprocessableEntityError: 'unprocessable_entity_error',
    InvalidRequest: 'invalid_request'
} as const;
export type ModelErrorTypeEnum = typeof ModelErrorTypeEnum[keyof typeof ModelErrorTypeEnum];


/**
 * Check if a given object implements the ModelError interface.
 */
export function instanceOfModelError(value: object): boolean {
    if (!('object' in value)) return false;
    if (!('type' in value)) return false;
    if (!('message' in value)) return false;
    if (!('retryable' in value)) return false;
    return true;
}

export function ModelErrorFromJSON(json: any): ModelError {
    return ModelErrorFromJSONTyped(json, false);
}

export function ModelErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelError {
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

export function ModelErrorToJSON(value?: ModelError | null): any {
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

