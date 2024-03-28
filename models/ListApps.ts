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
import type { App } from "./App.ts";
import {
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
} from "./App.ts";

/**
 * 
 * @export
 * @interface ListApps
 */
export interface ListApps {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     * @type {string}
     * @memberof ListApps
     */
    object: ListAppsObjectEnum;
    /**
     * Details about each object.
     * @type {Array<App>}
     * @memberof ListApps
     */
    items: Array<App>;
    /**
     * URL to access the next page of the project's apps. If not present / null, there is no next page
     * @type {string}
     * @memberof ListApps
     */
    nextPage: string | null;
    /**
     * The URL where this list can be accessed.
     * @type {string}
     * @memberof ListApps
     */
    url: string;
}


/**
 * @export
 */
export const ListAppsObjectEnum = {
    List: 'list'
} as const;
export type ListAppsObjectEnum = typeof ListAppsObjectEnum[keyof typeof ListAppsObjectEnum];


/**
 * Check if a given object implements the ListApps interface.
 */
export function instanceOfListApps(value: object): boolean {
    if (!('object' in value)) return false;
    if (!('items' in value)) return false;
    if (!('nextPage' in value)) return false;
    if (!('url' in value)) return false;
    return true;
}

export function ListAppsFromJSON(json: any): ListApps {
    return ListAppsFromJSONTyped(json, false);
}

export function ListAppsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListApps {
    if (json == null) {
        return json;
    }
    return {
        
        'object': json['object'],
        'items': ((json['items'] as Array<any>).map(AppFromJSON)),
        'nextPage': json['next_page'],
        'url': json['url'],
    };
}

export function ListAppsToJSON(value?: ListApps | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'object': value['object'],
        'items': ((value['items'] as Array<any>).map(AppToJSON)),
        'next_page': value['nextPage'],
        'url': value['url'],
    };
}

