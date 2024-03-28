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
/**
 * 
 * @export
 * @interface DeletedObject
 */
export interface DeletedObject {
    /**
     * The type of the deleted object
     * @type {string}
     * @memberof DeletedObject
     */
    object: DeletedObjectObjectEnum;
    /**
     * The ID of the deleted object
     * @type {string}
     * @memberof DeletedObject
     */
    id: string;
    /**
     * The date when the object was deleted in ms since epoch
     * @type {number}
     * @memberof DeletedObject
     */
    deletedAt: number;
}


/**
 * @export
 */
export const DeletedObjectObjectEnum = {
    App: 'app',
    Customer: 'customer',
    Entitlement: 'entitlement',
    Offering: 'offering',
    Package: 'package',
    Product: 'product'
} as const;
export type DeletedObjectObjectEnum = typeof DeletedObjectObjectEnum[keyof typeof DeletedObjectObjectEnum];


/**
 * Check if a given object implements the DeletedObject interface.
 */
export function instanceOfDeletedObject(value: object): boolean {
    if (!('object' in value)) return false;
    if (!('id' in value)) return false;
    if (!('deletedAt' in value)) return false;
    return true;
}

export function DeletedObjectFromJSON(json: any): DeletedObject {
    return DeletedObjectFromJSONTyped(json, false);
}

export function DeletedObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeletedObject {
    if (json == null) {
        return json;
    }
    return {
        
        'object': json['object'],
        'id': json['id'],
        'deletedAt': json['deleted_at'],
    };
}

export function DeletedObjectToJSON(value?: DeletedObject | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'object': value['object'],
        'id': value['id'],
        'deleted_at': value['deletedAt'],
    };
}
