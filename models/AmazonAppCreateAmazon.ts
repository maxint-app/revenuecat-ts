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
 * Amazon type details. Should only be used when type is amazon.
 * @export
 * @interface AmazonAppCreateAmazon
 */
export interface AmazonAppCreateAmazon {
    /**
     * The package name of the app
     * @type {string}
     * @memberof AmazonAppCreateAmazon
     */
    packageName: string;
    /**
     * Your Amazon Developer Identity Shared Key
     * @type {string}
     * @memberof AmazonAppCreateAmazon
     */
    sharedSecret?: string;
}

/**
 * Check if a given object implements the AmazonAppCreateAmazon interface.
 */
export function instanceOfAmazonAppCreateAmazon(value: object): boolean {
    if (!('packageName' in value)) return false;
    return true;
}

export function AmazonAppCreateAmazonFromJSON(json: any): AmazonAppCreateAmazon {
    return AmazonAppCreateAmazonFromJSONTyped(json, false);
}

export function AmazonAppCreateAmazonFromJSONTyped(json: any, ignoreDiscriminator: boolean): AmazonAppCreateAmazon {
    if (json == null) {
        return json;
    }
    return {
        
        'packageName': json['package_name'],
        'sharedSecret': json['shared_secret'] == null ? undefined : json['shared_secret'],
    };
}

export function AmazonAppCreateAmazonToJSON(value?: AmazonAppCreateAmazon | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'package_name': value['packageName'],
        'shared_secret': value['sharedSecret'],
    };
}
