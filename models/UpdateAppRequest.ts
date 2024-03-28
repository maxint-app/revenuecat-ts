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
import type { UpdateAppRequestAmazon } from './UpdateAppRequestAmazon';
import {
    UpdateAppRequestAmazonFromJSON,
    UpdateAppRequestAmazonFromJSONTyped,
    UpdateAppRequestAmazonToJSON,
} from './UpdateAppRequestAmazon';
import type { UpdateAppRequestAppStore } from './UpdateAppRequestAppStore';
import {
    UpdateAppRequestAppStoreFromJSON,
    UpdateAppRequestAppStoreFromJSONTyped,
    UpdateAppRequestAppStoreToJSON,
} from './UpdateAppRequestAppStore';
import type { UpdateAppRequestMacAppStore } from './UpdateAppRequestMacAppStore';
import {
    UpdateAppRequestMacAppStoreFromJSON,
    UpdateAppRequestMacAppStoreFromJSONTyped,
    UpdateAppRequestMacAppStoreToJSON,
} from './UpdateAppRequestMacAppStore';
import type { UpdateAppRequestPlayStore } from './UpdateAppRequestPlayStore';
import {
    UpdateAppRequestPlayStoreFromJSON,
    UpdateAppRequestPlayStoreFromJSONTyped,
    UpdateAppRequestPlayStoreToJSON,
} from './UpdateAppRequestPlayStore';

/**
 * 
 * @export
 * @interface UpdateAppRequest
 */
export interface UpdateAppRequest {
    /**
     * The name of the app
     * @type {string}
     * @memberof UpdateAppRequest
     */
    name?: string;
    /**
     * 
     * @type {UpdateAppRequestAmazon}
     * @memberof UpdateAppRequest
     */
    amazon?: UpdateAppRequestAmazon;
    /**
     * 
     * @type {UpdateAppRequestAppStore}
     * @memberof UpdateAppRequest
     */
    appStore?: UpdateAppRequestAppStore;
    /**
     * 
     * @type {UpdateAppRequestMacAppStore}
     * @memberof UpdateAppRequest
     */
    macAppStore?: UpdateAppRequestMacAppStore;
    /**
     * 
     * @type {UpdateAppRequestPlayStore}
     * @memberof UpdateAppRequest
     */
    playStore?: UpdateAppRequestPlayStore;
}

/**
 * Check if a given object implements the UpdateAppRequest interface.
 */
export function instanceOfUpdateAppRequest(value: object): boolean {
    return true;
}

export function UpdateAppRequestFromJSON(json: any): UpdateAppRequest {
    return UpdateAppRequestFromJSONTyped(json, false);
}

export function UpdateAppRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateAppRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'amazon': json['amazon'] == null ? undefined : UpdateAppRequestAmazonFromJSON(json['amazon']),
        'appStore': json['app_store'] == null ? undefined : UpdateAppRequestAppStoreFromJSON(json['app_store']),
        'macAppStore': json['mac_app_store'] == null ? undefined : UpdateAppRequestMacAppStoreFromJSON(json['mac_app_store']),
        'playStore': json['play_store'] == null ? undefined : UpdateAppRequestPlayStoreFromJSON(json['play_store']),
    };
}

export function UpdateAppRequestToJSON(value?: UpdateAppRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'amazon': UpdateAppRequestAmazonToJSON(value['amazon']),
        'app_store': UpdateAppRequestAppStoreToJSON(value['appStore']),
        'mac_app_store': UpdateAppRequestMacAppStoreToJSON(value['macAppStore']),
        'play_store': UpdateAppRequestPlayStoreToJSON(value['playStore']),
    };
}
