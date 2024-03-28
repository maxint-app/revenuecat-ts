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
import type { Subscription } from './Subscription';
import {
    SubscriptionFromJSON,
    SubscriptionFromJSONTyped,
    SubscriptionToJSON,
} from './Subscription';

/**
 * 
 * @export
 * @interface ListSubscriptions
 */
export interface ListSubscriptions {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     * @type {string}
     * @memberof ListSubscriptions
     */
    object: ListSubscriptionsObjectEnum;
    /**
     * Details about each object.
     * @type {Array<Subscription>}
     * @memberof ListSubscriptions
     */
    items: Array<Subscription>;
    /**
     * URL to access the next page of the customer's subscriptions. If not present / null, there is no next page
     * @type {string}
     * @memberof ListSubscriptions
     */
    nextPage: string | null;
    /**
     * The URL where this list can be accessed.
     * @type {string}
     * @memberof ListSubscriptions
     */
    url: string;
}


/**
 * @export
 */
export const ListSubscriptionsObjectEnum = {
    List: 'list'
} as const;
export type ListSubscriptionsObjectEnum = typeof ListSubscriptionsObjectEnum[keyof typeof ListSubscriptionsObjectEnum];


/**
 * Check if a given object implements the ListSubscriptions interface.
 */
export function instanceOfListSubscriptions(value: object): boolean {
    if (!('object' in value)) return false;
    if (!('items' in value)) return false;
    if (!('nextPage' in value)) return false;
    if (!('url' in value)) return false;
    return true;
}

export function ListSubscriptionsFromJSON(json: any): ListSubscriptions {
    return ListSubscriptionsFromJSONTyped(json, false);
}

export function ListSubscriptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListSubscriptions {
    if (json == null) {
        return json;
    }
    return {
        
        'object': json['object'],
        'items': ((json['items'] as Array<any>).map(SubscriptionFromJSON)),
        'nextPage': json['next_page'],
        'url': json['url'],
    };
}

export function ListSubscriptionsToJSON(value?: ListSubscriptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'object': value['object'],
        'items': ((value['items'] as Array<any>).map(SubscriptionToJSON)),
        'next_page': value['nextPage'],
        'url': value['url'],
    };
}

