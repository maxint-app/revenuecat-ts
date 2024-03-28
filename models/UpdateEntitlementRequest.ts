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
 * @interface UpdateEntitlementRequest
 */
export interface UpdateEntitlementRequest {
    /**
     * The display name of the entitlement
     * @type {string}
     * @memberof UpdateEntitlementRequest
     */
    displayName: string;
}

/**
 * Check if a given object implements the UpdateEntitlementRequest interface.
 */
export function instanceOfUpdateEntitlementRequest(value: object): boolean {
    if (!('displayName' in value)) return false;
    return true;
}

export function UpdateEntitlementRequestFromJSON(json: any): UpdateEntitlementRequest {
    return UpdateEntitlementRequestFromJSONTyped(json, false);
}

export function UpdateEntitlementRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateEntitlementRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'displayName': json['display_name'],
    };
}

export function UpdateEntitlementRequestToJSON(value?: UpdateEntitlementRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'display_name': value['displayName'],
    };
}
