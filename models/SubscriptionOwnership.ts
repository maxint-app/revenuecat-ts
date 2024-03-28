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

import type { Ownership } from './Ownership';
import {
    instanceOfOwnership,
    OwnershipFromJSON,
    OwnershipFromJSONTyped,
    OwnershipToJSON,
} from './Ownership';

/**
 * @type SubscriptionOwnership
 * Ownership of the subscription
 * @export
 */
export type SubscriptionOwnership = Ownership;

export function SubscriptionOwnershipFromJSON(json: any): SubscriptionOwnership {
    return SubscriptionOwnershipFromJSONTyped(json, false);
}

export function SubscriptionOwnershipFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOwnership {
    if (json == null) {
        return json;
    }
    return { ...OwnershipFromJSONTyped(json, true) };
}

export function SubscriptionOwnershipToJSON(value?: SubscriptionOwnership | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfOwnership(value)) {
        return OwnershipToJSON(value as Ownership);
    }

    return {};
}

