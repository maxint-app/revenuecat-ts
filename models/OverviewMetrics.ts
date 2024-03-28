/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OverviewMetric } from "./OverviewMetric.ts";
export type OverviewMetrics = {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: OverviewMetrics.object;
    /**
     * Details about each overview metric.
     */
    metrics: Array<OverviewMetric>;
};
export namespace OverviewMetrics {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        OVERVIEW_METRICS = 'overview_metrics',
    }
}

