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
/**
 * 
 * @export
 * @interface OverviewMetric
 */
export interface OverviewMetric {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     * @type {string}
     * @memberof OverviewMetric
     */
    object: OverviewMetricObjectEnum;
    /**
     * Id of the overview metric
     * @type {string}
     * @memberof OverviewMetric
     */
    id: string;
    /**
     * Display name of the overview metric
     * @type {string}
     * @memberof OverviewMetric
     */
    name: string;
    /**
     * Description of the overview metric
     * @type {string}
     * @memberof OverviewMetric
     */
    description: string;
    /**
     * Unit of the overview metric
     * @type {string}
     * @memberof OverviewMetric
     */
    unit: string;
    /**
     * Length of time during which metric data is collected in ISO 8601 format. Zero period means metric data was collected now
     * @type {string}
     * @memberof OverviewMetric
     */
    period: OverviewMetricPeriodEnum;
    /**
     * Value of the overview metric
     * @type {number}
     * @memberof OverviewMetric
     */
    value: number;
    /**
     * Last time the overview metric was updated in ms since epoch
     * @type {number}
     * @memberof OverviewMetric
     */
    lastUpdatedAt: number | null;
    /**
     * Last time the overview metric was updated datetime in ISO 8601 format
     * @type {Date}
     * @memberof OverviewMetric
     */
    lastUpdatedAtIso8601: Date | null;
}


/**
 * @export
 */
export const OverviewMetricObjectEnum = {
    OverviewMetric: 'overview_metric'
} as const;
export type OverviewMetricObjectEnum = typeof OverviewMetricObjectEnum[keyof typeof OverviewMetricObjectEnum];

/**
 * @export
 */
export const OverviewMetricPeriodEnum = {
    P0D: 'P0D',
    P28D: 'P28D'
} as const;
export type OverviewMetricPeriodEnum = typeof OverviewMetricPeriodEnum[keyof typeof OverviewMetricPeriodEnum];


/**
 * Check if a given object implements the OverviewMetric interface.
 */
export function instanceOfOverviewMetric(value: object): boolean {
    if (!('object' in value)) return false;
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('description' in value)) return false;
    if (!('unit' in value)) return false;
    if (!('period' in value)) return false;
    if (!('value' in value)) return false;
    if (!('lastUpdatedAt' in value)) return false;
    if (!('lastUpdatedAtIso8601' in value)) return false;
    return true;
}

export function OverviewMetricFromJSON(json: any): OverviewMetric {
    return OverviewMetricFromJSONTyped(json, false);
}

export function OverviewMetricFromJSONTyped(json: any, ignoreDiscriminator: boolean): OverviewMetric {
    if (json == null) {
        return json;
    }
    return {
        
        'object': json['object'],
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'unit': json['unit'],
        'period': json['period'],
        'value': json['value'],
        'lastUpdatedAt': json['last_updated_at'],
        'lastUpdatedAtIso8601': (json['last_updated_at_iso8601'] == null ? null : new Date(json['last_updated_at_iso8601'])),
    };
}

export function OverviewMetricToJSON(value?: OverviewMetric | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'object': value['object'],
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'unit': value['unit'],
        'period': value['period'],
        'value': value['value'],
        'last_updated_at': value['lastUpdatedAt'],
        'last_updated_at_iso8601': (value['lastUpdatedAtIso8601'] == null ? null : (value['lastUpdatedAtIso8601'] as any).toISOString()),
    };
}

