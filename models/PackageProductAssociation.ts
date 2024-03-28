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
import type { EligibilityCriteria } from './EligibilityCriteria';
import {
    EligibilityCriteriaFromJSON,
    EligibilityCriteriaFromJSONTyped,
    EligibilityCriteriaToJSON,
} from './EligibilityCriteria';
import type { Product } from './Product';
import {
    ProductFromJSON,
    ProductFromJSONTyped,
    ProductToJSON,
} from './Product';

/**
 * 
 * @export
 * @interface PackageProductAssociation
 */
export interface PackageProductAssociation {
    /**
     * 
     * @type {Product}
     * @memberof PackageProductAssociation
     */
    product: Product;
    /**
     * 
     * @type {EligibilityCriteria}
     * @memberof PackageProductAssociation
     */
    eligibilityCriteria: EligibilityCriteria;
}

/**
 * Check if a given object implements the PackageProductAssociation interface.
 */
export function instanceOfPackageProductAssociation(value: object): boolean {
    if (!('product' in value)) return false;
    if (!('eligibilityCriteria' in value)) return false;
    return true;
}

export function PackageProductAssociationFromJSON(json: any): PackageProductAssociation {
    return PackageProductAssociationFromJSONTyped(json, false);
}

export function PackageProductAssociationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageProductAssociation {
    if (json == null) {
        return json;
    }
    return {
        
        'product': ProductFromJSON(json['product']),
        'eligibilityCriteria': EligibilityCriteriaFromJSON(json['eligibility_criteria']),
    };
}

export function PackageProductAssociationToJSON(value?: PackageProductAssociation | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'product': ProductToJSON(value['product']),
        'eligibility_criteria': EligibilityCriteriaToJSON(value['eligibilityCriteria']),
    };
}

