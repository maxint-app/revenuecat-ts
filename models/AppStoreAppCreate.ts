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
import type { AppStoreAppCreateAppStore } from "./AppStoreAppCreateAppStore.ts";
import {
    AppStoreAppCreateAppStoreFromJSON,
    AppStoreAppCreateAppStoreFromJSONTyped,
    AppStoreAppCreateAppStoreToJSON,
} from "./AppStoreAppCreateAppStore.ts";

/**
 * 
 * @export
 * @interface AppStoreAppCreate
 */
export interface AppStoreAppCreate {
    /**
     * 
     * @type {AppStoreAppCreateAppStore}
     * @memberof AppStoreAppCreate
     */
    appStore?: AppStoreAppCreateAppStore;
}

/**
 * Check if a given object implements the AppStoreAppCreate interface.
 */
export function instanceOfAppStoreAppCreate(value: object): boolean {
    return true;
}

export function AppStoreAppCreateFromJSON(json: any): AppStoreAppCreate {
    return AppStoreAppCreateFromJSONTyped(json, false);
}

export function AppStoreAppCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreAppCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'appStore': json['app_store'] == null ? undefined : AppStoreAppCreateAppStoreFromJSON(json['app_store']),
    };
}

export function AppStoreAppCreateToJSON(value?: AppStoreAppCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'app_store': AppStoreAppCreateAppStoreToJSON(value['appStore']),
    };
}

