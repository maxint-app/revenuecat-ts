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
import type { PackageProductIDAssociation } from './PackageProductIDAssociation';
import {
    PackageProductIDAssociationFromJSON,
    PackageProductIDAssociationFromJSONTyped,
    PackageProductIDAssociationToJSON,
} from './PackageProductIDAssociation';

/**
 * 
 * @export
 * @interface AttachProductsToPackageRequest
 */
export interface AttachProductsToPackageRequest {
    /**
     * Product association list
     * @type {Array<PackageProductIDAssociation>}
     * @memberof AttachProductsToPackageRequest
     */
    products: Array<PackageProductIDAssociation>;
}

/**
 * Check if a given object implements the AttachProductsToPackageRequest interface.
 */
export function instanceOfAttachProductsToPackageRequest(value: object): boolean {
    if (!('products' in value)) return false;
    return true;
}

export function AttachProductsToPackageRequestFromJSON(json: any): AttachProductsToPackageRequest {
    return AttachProductsToPackageRequestFromJSONTyped(json, false);
}

export function AttachProductsToPackageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttachProductsToPackageRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'products': ((json['products'] as Array<any>).map(PackageProductIDAssociationFromJSON)),
    };
}

export function AttachProductsToPackageRequestToJSON(value?: AttachProductsToPackageRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'products': ((value['products'] as Array<any>).map(PackageProductIDAssociationToJSON)),
    };
}

