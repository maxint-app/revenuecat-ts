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
import type { Entitlement } from "./Entitlement.ts";
import {
    EntitlementFromJSON,
    EntitlementFromJSONTyped,
    EntitlementToJSON,
} from "./Entitlement.ts";

/**
 * 
 * @export
 * @interface ListEntitlements
 */
export interface ListEntitlements {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     * @type {string}
     * @memberof ListEntitlements
     */
    object: ListEntitlementsObjectEnum;
    /**
     * Details about each object.
     * @type {Array<Entitlement>}
     * @memberof ListEntitlements
     */
    items: Array<Entitlement>;
    /**
     * URL to access the next page of the project's entitlements. If not present / null, there is no next page
     * @type {string}
     * @memberof ListEntitlements
     */
    nextPage: string | null;
    /**
     * The URL where this list can be accessed.
     * @type {string}
     * @memberof ListEntitlements
     */
    url: string;
}


/**
 * @export
 */
export const ListEntitlementsObjectEnum = {
    List: 'list'
} as const;
export type ListEntitlementsObjectEnum = typeof ListEntitlementsObjectEnum[keyof typeof ListEntitlementsObjectEnum];


/**
 * Check if a given object implements the ListEntitlements interface.
 */
export function instanceOfListEntitlements(value: object): boolean {
    if (!('object' in value)) return false;
    if (!('items' in value)) return false;
    if (!('nextPage' in value)) return false;
    if (!('url' in value)) return false;
    return true;
}

export function ListEntitlementsFromJSON(json: any): ListEntitlements {
    return ListEntitlementsFromJSONTyped(json, false);
}

export function ListEntitlementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListEntitlements {
    if (json == null) {
        return json;
    }
    return {
        
        'object': json['object'],
        'items': ((json['items'] as Array<any>).map(EntitlementFromJSON)),
        'nextPage': json['next_page'],
        'url': json['url'],
    };
}

export function ListEntitlementsToJSON(value?: ListEntitlements | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'object': value['object'],
        'items': ((value['items'] as Array<any>).map(EntitlementToJSON)),
        'next_page': value['nextPage'],
        'url': value['url'],
    };
}

