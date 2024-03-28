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
import type { PackageList } from "./PackageList.ts";
import {
    PackageListFromJSON,
    PackageListFromJSONTyped,
    PackageListToJSON,
} from "./PackageList.ts";

/**
 * 
 * @export
 * @interface Offering
 */
export interface Offering {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     * @type {string}
     * @memberof Offering
     */
    object: OfferingObjectEnum;
    /**
     * The id of the offering
     * @type {string}
     * @memberof Offering
     */
    id: string;
    /**
     * A custom identifier of the entitlement
     * @type {string}
     * @memberof Offering
     */
    lookupKey: string;
    /**
     * The display name of the offering
     * @type {string}
     * @memberof Offering
     */
    displayName: string;
    /**
     * Indicates if the offering is the current offering
     * @type {boolean}
     * @memberof Offering
     */
    isCurrent: boolean;
    /**
     * The date the offering was created at in ms since epoch
     * @type {number}
     * @memberof Offering
     */
    createdAt: number;
    /**
     * ID of the project to which the offering belongs
     * @type {string}
     * @memberof Offering
     */
    projectId: string;
    /**
     * Custom metadata of the offering
     * @type {{ [key: string]: string; }}
     * @memberof Offering
     */
    metadata?: { [key: string]: string; };
    /**
     * 
     * @type {PackageList}
     * @memberof Offering
     */
    packages?: PackageList;
}


/**
 * @export
 */
export const OfferingObjectEnum = {
    Offering: 'offering'
} as const;
export type OfferingObjectEnum = typeof OfferingObjectEnum[keyof typeof OfferingObjectEnum];


/**
 * Check if a given object implements the Offering interface.
 */
export function instanceOfOffering(value: object): boolean {
    if (!('object' in value)) return false;
    if (!('id' in value)) return false;
    if (!('lookupKey' in value)) return false;
    if (!('displayName' in value)) return false;
    if (!('isCurrent' in value)) return false;
    if (!('createdAt' in value)) return false;
    if (!('projectId' in value)) return false;
    return true;
}

export function OfferingFromJSON(json: any): Offering {
    return OfferingFromJSONTyped(json, false);
}

export function OfferingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Offering {
    if (json == null) {
        return json;
    }
    return {
        
        'object': json['object'],
        'id': json['id'],
        'lookupKey': json['lookup_key'],
        'displayName': json['display_name'],
        'isCurrent': json['is_current'],
        'createdAt': json['created_at'],
        'projectId': json['project_id'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'packages': json['packages'] == null ? undefined : PackageListFromJSON(json['packages']),
    };
}

export function OfferingToJSON(value?: Offering | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'object': value['object'],
        'id': value['id'],
        'lookup_key': value['lookupKey'],
        'display_name': value['displayName'],
        'is_current': value['isCurrent'],
        'created_at': value['createdAt'],
        'project_id': value['projectId'],
        'metadata': value['metadata'],
        'packages': PackageListToJSON(value['packages']),
    };
}

