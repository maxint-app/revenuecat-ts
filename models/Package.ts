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
import type { ProductList } from "./ProductList.ts";
import {
    ProductListFromJSON,
    ProductListFromJSONTyped,
    ProductListToJSON,
} from "./ProductList.ts";

/**
 * 
 * @export
 * @interface Package
 */
export interface Package {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     * @type {string}
     * @memberof Package
     */
    object: PackageObjectEnum;
    /**
     * The id of the package
     * @type {string}
     * @memberof Package
     */
    id: string;
    /**
     * The lookup_key of the package
     * @type {string}
     * @memberof Package
     */
    lookupKey: string;
    /**
     * The display name of the package
     * @type {string}
     * @memberof Package
     */
    displayName: string;
    /**
     * The position of the package within the offering
     * @type {number}
     * @memberof Package
     */
    position: number | null;
    /**
     * The date the package was created at in ms since epoch
     * @type {number}
     * @memberof Package
     */
    createdAt: number;
    /**
     * 
     * @type {ProductList}
     * @memberof Package
     */
    products?: ProductList;
}


/**
 * @export
 */
export const PackageObjectEnum = {
    Package: 'package'
} as const;
export type PackageObjectEnum = typeof PackageObjectEnum[keyof typeof PackageObjectEnum];


/**
 * Check if a given object implements the Package interface.
 */
export function instanceOfPackage(value: object): boolean {
    if (!('object' in value)) return false;
    if (!('id' in value)) return false;
    if (!('lookupKey' in value)) return false;
    if (!('displayName' in value)) return false;
    if (!('position' in value)) return false;
    if (!('createdAt' in value)) return false;
    return true;
}

export function PackageFromJSON(json: any): Package {
    return PackageFromJSONTyped(json, false);
}

export function PackageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Package {
    if (json == null) {
        return json;
    }
    return {
        
        'object': json['object'],
        'id': json['id'],
        'lookupKey': json['lookup_key'],
        'displayName': json['display_name'],
        'position': json['position'],
        'createdAt': json['created_at'],
        'products': json['products'] == null ? undefined : ProductListFromJSON(json['products']),
    };
}

export function PackageToJSON(value?: Package | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'object': value['object'],
        'id': value['id'],
        'lookup_key': value['lookupKey'],
        'display_name': value['displayName'],
        'position': value['position'],
        'created_at': value['createdAt'],
        'products': ProductListToJSON(value['products']),
    };
}

