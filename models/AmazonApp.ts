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
import type { AmazonAppAmazon } from './AmazonAppAmazon';
import {
    AmazonAppAmazonFromJSON,
    AmazonAppAmazonFromJSONTyped,
    AmazonAppAmazonToJSON,
} from './AmazonAppAmazon';

/**
 * 
 * @export
 * @interface AmazonApp
 */
export interface AmazonApp {
    /**
     * 
     * @type {AmazonAppAmazon}
     * @memberof AmazonApp
     */
    amazon?: AmazonAppAmazon;
}

/**
 * Check if a given object implements the AmazonApp interface.
 */
export function instanceOfAmazonApp(value: object): boolean {
    return true;
}

export function AmazonAppFromJSON(json: any): AmazonApp {
    return AmazonAppFromJSONTyped(json, false);
}

export function AmazonAppFromJSONTyped(json: any, ignoreDiscriminator: boolean): AmazonApp {
    if (json == null) {
        return json;
    }
    return {
        
        'amazon': json['amazon'] == null ? undefined : AmazonAppAmazonFromJSON(json['amazon']),
    };
}

export function AmazonAppToJSON(value?: AmazonApp | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amazon': AmazonAppAmazonToJSON(value['amazon']),
    };
}
