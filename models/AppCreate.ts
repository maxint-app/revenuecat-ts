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
import type { AmazonAppCreateAmazon } from './AmazonAppCreateAmazon';
import {
    AmazonAppCreateAmazonFromJSON,
    AmazonAppCreateAmazonFromJSONTyped,
    AmazonAppCreateAmazonToJSON,
} from './AmazonAppCreateAmazon';
import type { AppStoreAppCreateAppStore } from './AppStoreAppCreateAppStore';
import {
    AppStoreAppCreateAppStoreFromJSON,
    AppStoreAppCreateAppStoreFromJSONTyped,
    AppStoreAppCreateAppStoreToJSON,
} from './AppStoreAppCreateAppStore';
import type { MacAppStoreAppCreateMacAppStore } from './MacAppStoreAppCreateMacAppStore';
import {
    MacAppStoreAppCreateMacAppStoreFromJSON,
    MacAppStoreAppCreateMacAppStoreFromJSONTyped,
    MacAppStoreAppCreateMacAppStoreToJSON,
} from './MacAppStoreAppCreateMacAppStore';
import type { UpdateAppRequestPlayStore } from './UpdateAppRequestPlayStore';
import {
    UpdateAppRequestPlayStoreFromJSON,
    UpdateAppRequestPlayStoreFromJSONTyped,
    UpdateAppRequestPlayStoreToJSON,
} from './UpdateAppRequestPlayStore';

/**
 * 
 * @export
 * @interface AppCreate
 */
export interface AppCreate {
    /**
     * 
     * @type {AmazonAppCreateAmazon}
     * @memberof AppCreate
     */
    amazon?: AmazonAppCreateAmazon;
    /**
     * 
     * @type {AppStoreAppCreateAppStore}
     * @memberof AppCreate
     */
    appStore?: AppStoreAppCreateAppStore;
    /**
     * 
     * @type {MacAppStoreAppCreateMacAppStore}
     * @memberof AppCreate
     */
    macAppStore?: MacAppStoreAppCreateMacAppStore;
    /**
     * 
     * @type {UpdateAppRequestPlayStore}
     * @memberof AppCreate
     */
    playStore?: UpdateAppRequestPlayStore;
    /**
     * The name of the app
     * @type {string}
     * @memberof AppCreate
     */
    name: string;
    /**
     * The platform of the app.
     * Mac App Store is disabled by default. See [Legacy Mac Apps](https://www.revenuecat.com/docs/legacy-mac-apps) for more details.
     * 
     * @type {string}
     * @memberof AppCreate
     */
    type: AppCreateTypeEnum;
}


/**
 * @export
 */
export const AppCreateTypeEnum = {
    Amazon: 'amazon',
    AppStore: 'app_store',
    MacAppStore: 'mac_app_store',
    PlayStore: 'play_store',
    Stripe: 'stripe'
} as const;
export type AppCreateTypeEnum = typeof AppCreateTypeEnum[keyof typeof AppCreateTypeEnum];


/**
 * Check if a given object implements the AppCreate interface.
 */
export function instanceOfAppCreate(value: object): boolean {
    if (!('name' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function AppCreateFromJSON(json: any): AppCreate {
    return AppCreateFromJSONTyped(json, false);
}

export function AppCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'amazon': json['amazon'] == null ? undefined : AmazonAppCreateAmazonFromJSON(json['amazon']),
        'appStore': json['app_store'] == null ? undefined : AppStoreAppCreateAppStoreFromJSON(json['app_store']),
        'macAppStore': json['mac_app_store'] == null ? undefined : MacAppStoreAppCreateMacAppStoreFromJSON(json['mac_app_store']),
        'playStore': json['play_store'] == null ? undefined : UpdateAppRequestPlayStoreFromJSON(json['play_store']),
        'name': json['name'],
        'type': json['type'],
    };
}

export function AppCreateToJSON(value?: AppCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amazon': AmazonAppCreateAmazonToJSON(value['amazon']),
        'app_store': AppStoreAppCreateAppStoreToJSON(value['appStore']),
        'mac_app_store': MacAppStoreAppCreateMacAppStoreToJSON(value['macAppStore']),
        'play_store': UpdateAppRequestPlayStoreToJSON(value['playStore']),
        'name': value['name'],
        'type': value['type'],
    };
}

