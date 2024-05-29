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
export declare namespace OverviewMetrics {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    enum typeObj {
        OVERVIEW_METRICS = "overview_metrics"
    }
}
