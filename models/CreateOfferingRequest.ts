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
 * @interface CreateOfferingRequest
 */
export interface CreateOfferingRequest {
    /**
     * The custom identifier of the offering
     * @type {string}
     * @memberof CreateOfferingRequest
     */
    lookupKey: string;
    /**
     * The display_name of the offering
     * @type {string}
     * @memberof CreateOfferingRequest
     */
    displayName: string;
    /**
     * Custom metadata of the offering
     * @type {{ [key: string]: string; }}
     * @memberof CreateOfferingRequest
     */
    metadata?: { [key: string]: string; };
}

/**
 * Check if a given object implements the CreateOfferingRequest interface.
 */
export function instanceOfCreateOfferingRequest(value: object): boolean {
    if (!('lookupKey' in value)) return false;
    if (!('displayName' in value)) return false;
    return true;
}

export function CreateOfferingRequestFromJSON(json: any): CreateOfferingRequest {
    return CreateOfferingRequestFromJSONTyped(json, false);
}

export function CreateOfferingRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOfferingRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'lookupKey': json['lookup_key'],
        'displayName': json['display_name'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
    };
}

export function CreateOfferingRequestToJSON(value?: CreateOfferingRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'lookup_key': value['lookupKey'],
        'display_name': value['displayName'],
        'metadata': value['metadata'],
    };
}
