/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OverviewMetric } from "./OverviewMetric.js";
export type OverviewMetrics = {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: OverviewMetrics.typeObj;
    /**
     * Details about each overview metric.
     */
    metrics: Array<OverviewMetric>;
};
export namespace OverviewMetrics {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum typeObj {
        OVERVIEW_METRICS = 'overview_metrics',
    }
}

