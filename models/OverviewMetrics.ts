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
import type { OverviewMetric } from "./OverviewMetric.ts";
import {
    OverviewMetricFromJSON,
    OverviewMetricFromJSONTyped,
    OverviewMetricToJSON,
} from "./OverviewMetric.ts";

/**
 * 
 * @export
 * @interface OverviewMetrics
 */
export interface OverviewMetrics {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     * @type {string}
     * @memberof OverviewMetrics
     */
    object: OverviewMetricsObjectEnum;
    /**
     * Details about each overview metric.
     * @type {Array<OverviewMetric>}
     * @memberof OverviewMetrics
     */
    metrics: Array<OverviewMetric>;
}


/**
 * @export
 */
export const OverviewMetricsObjectEnum = {
    OverviewMetrics: 'overview_metrics'
} as const;
export type OverviewMetricsObjectEnum = typeof OverviewMetricsObjectEnum[keyof typeof OverviewMetricsObjectEnum];


/**
 * Check if a given object implements the OverviewMetrics interface.
 */
export function instanceOfOverviewMetrics(value: object): boolean {
    if (!('object' in value)) return false;
    if (!('metrics' in value)) return false;
    return true;
}

export function OverviewMetricsFromJSON(json: any): OverviewMetrics {
    return OverviewMetricsFromJSONTyped(json, false);
}

export function OverviewMetricsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OverviewMetrics {
    if (json == null) {
        return json;
    }
    return {
        
        'object': json['object'],
        'metrics': ((json['metrics'] as Array<any>).map(OverviewMetricFromJSON)),
    };
}

export function OverviewMetricsToJSON(value?: OverviewMetrics | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'object': value['object'],
        'metrics': ((value['metrics'] as Array<any>).map(OverviewMetricToJSON)),
    };
}

