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
 * Amazon type details. Should only be used when type is amazon.
 * @export
 * @interface UpdateAppRequestAmazon
 */
export interface UpdateAppRequestAmazon {
    /**
     * The package name of the app
     * @type {string}
     * @memberof UpdateAppRequestAmazon
     */
    packageName?: string;
    /**
     * Your Amazon Developer Identity Shared Key
     * @type {string}
     * @memberof UpdateAppRequestAmazon
     */
    sharedSecret?: string;
}

/**
 * Check if a given object implements the UpdateAppRequestAmazon interface.
 */
export function instanceOfUpdateAppRequestAmazon(value: object): boolean {
    return true;
}

export function UpdateAppRequestAmazonFromJSON(json: any): UpdateAppRequestAmazon {
    return UpdateAppRequestAmazonFromJSONTyped(json, false);
}

export function UpdateAppRequestAmazonFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateAppRequestAmazon {
    if (json == null) {
        return json;
    }
    return {
        
        'packageName': json['package_name'] == null ? undefined : json['package_name'],
        'sharedSecret': json['shared_secret'] == null ? undefined : json['shared_secret'],
    };
}

export function UpdateAppRequestAmazonToJSON(value?: UpdateAppRequestAmazon | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'package_name': value['packageName'],
        'shared_secret': value['sharedSecret'],
    };
}

