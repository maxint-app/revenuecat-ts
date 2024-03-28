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

import type { MonetaryAmount } from "./MonetaryAmount.ts";
import {
    instanceOfMonetaryAmount,
    MonetaryAmountFromJSON,
    MonetaryAmountFromJSONTyped,
    MonetaryAmountToJSON,
} from "./MonetaryAmount.ts";

/**
 * @type SubscriptionTotalRevenueInUsd
 * Total revenue generated by a subscription in USD
 * @export
 */
export type SubscriptionTotalRevenueInUsd = MonetaryAmount;

export function SubscriptionTotalRevenueInUsdFromJSON(json: any): SubscriptionTotalRevenueInUsd {
    return SubscriptionTotalRevenueInUsdFromJSONTyped(json, false);
}

export function SubscriptionTotalRevenueInUsdFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionTotalRevenueInUsd {
    if (json == null) {
        return json;
    }
    return { ...MonetaryAmountFromJSONTyped(json, true) };
}

export function SubscriptionTotalRevenueInUsdToJSON(value?: SubscriptionTotalRevenueInUsd | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfMonetaryAmount(value)) {
        return MonetaryAmountToJSON(value as MonetaryAmount);
    }

    return {};
}

