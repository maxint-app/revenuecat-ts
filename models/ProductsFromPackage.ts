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
import type { PackageProductAssociation } from './PackageProductAssociation';
import {
    PackageProductAssociationFromJSON,
    PackageProductAssociationFromJSONTyped,
    PackageProductAssociationToJSON,
} from './PackageProductAssociation';

/**
 * 
 * @export
 * @interface ProductsFromPackage
 */
export interface ProductsFromPackage {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     * @type {string}
     * @memberof ProductsFromPackage
     */
    object: ProductsFromPackageObjectEnum;
    /**
     * Details about each object
     * @type {Array<PackageProductAssociation>}
     * @memberof ProductsFromPackage
     */
    items: Array<PackageProductAssociation>;
    /**
     * URL to access the next page of the entitlement's products. If not present / null, there is no next page
     * @type {string}
     * @memberof ProductsFromPackage
     */
    nextPage: string | null;
    /**
     * The URL where this list can be accessed.
     * @type {string}
     * @memberof ProductsFromPackage
     */
    url: string;
}


/**
 * @export
 */
export const ProductsFromPackageObjectEnum = {
    List: 'list'
} as const;
export type ProductsFromPackageObjectEnum = typeof ProductsFromPackageObjectEnum[keyof typeof ProductsFromPackageObjectEnum];


/**
 * Check if a given object implements the ProductsFromPackage interface.
 */
export function instanceOfProductsFromPackage(value: object): boolean {
    if (!('object' in value)) return false;
    if (!('items' in value)) return false;
    if (!('nextPage' in value)) return false;
    if (!('url' in value)) return false;
    return true;
}

export function ProductsFromPackageFromJSON(json: any): ProductsFromPackage {
    return ProductsFromPackageFromJSONTyped(json, false);
}

export function ProductsFromPackageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductsFromPackage {
    if (json == null) {
        return json;
    }
    return {
        
        'object': json['object'],
        'items': ((json['items'] as Array<any>).map(PackageProductAssociationFromJSON)),
        'nextPage': json['next_page'],
        'url': json['url'],
    };
}

export function ProductsFromPackageToJSON(value?: ProductsFromPackage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'object': value['object'],
        'items': ((value['items'] as Array<any>).map(PackageProductAssociationToJSON)),
        'next_page': value['nextPage'],
        'url': value['url'],
    };
}

