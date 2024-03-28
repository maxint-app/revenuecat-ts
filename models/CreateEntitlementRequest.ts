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
 * @interface CreateEntitlementRequest
 */
export interface CreateEntitlementRequest {
    /**
     * The identifier of the entitlement
     * @type {string}
     * @memberof CreateEntitlementRequest
     */
    lookupKey: string;
    /**
     * The display name of the entitlement
     * @type {string}
     * @memberof CreateEntitlementRequest
     */
    displayName: string;
}

/**
 * Check if a given object implements the CreateEntitlementRequest interface.
 */
export function instanceOfCreateEntitlementRequest(value: object): boolean {
    if (!('lookupKey' in value)) return false;
    if (!('displayName' in value)) return false;
    return true;
}

export function CreateEntitlementRequestFromJSON(json: any): CreateEntitlementRequest {
    return CreateEntitlementRequestFromJSONTyped(json, false);
}

export function CreateEntitlementRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEntitlementRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'lookupKey': json['lookup_key'],
        'displayName': json['display_name'],
    };
}

export function CreateEntitlementRequestToJSON(value?: CreateEntitlementRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'lookup_key': value['lookupKey'],
        'display_name': value['displayName'],
    };
}

