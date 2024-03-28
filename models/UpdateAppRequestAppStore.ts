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
 * App Store type details. Should only be used when type is app_store.
 * @export
 * @interface UpdateAppRequestAppStore
 */
export interface UpdateAppRequestAppStore {
    /**
     * The bundle ID of the app
     * @type {string}
     * @memberof UpdateAppRequestAppStore
     */
    bundleId?: string;
    /**
     * The shared secret of the app
     * @type {string}
     * @memberof UpdateAppRequestAppStore
     */
    sharedSecret?: string;
}

/**
 * Check if a given object implements the UpdateAppRequestAppStore interface.
 */
export function instanceOfUpdateAppRequestAppStore(value: object): boolean {
    return true;
}

export function UpdateAppRequestAppStoreFromJSON(json: any): UpdateAppRequestAppStore {
    return UpdateAppRequestAppStoreFromJSONTyped(json, false);
}

export function UpdateAppRequestAppStoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateAppRequestAppStore {
    if (json == null) {
        return json;
    }
    return {
        
        'bundleId': json['bundle_id'] == null ? undefined : json['bundle_id'],
        'sharedSecret': json['shared_secret'] == null ? undefined : json['shared_secret'],
    };
}

export function UpdateAppRequestAppStoreToJSON(value?: UpdateAppRequestAppStore | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'bundle_id': value['bundleId'],
        'shared_secret': value['sharedSecret'],
    };
}

