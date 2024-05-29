export type OverviewMetric = {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: OverviewMetric.typeObj;
    /**
     * Id of the overview metric
     */
    id: string;
    /**
     * Display name of the overview metric
     */
    name: string;
    /**
     * Description of the overview metric
     */
    description: string;
    /**
     * Unit of the overview metric
     */
    unit: string;
    /**
     * Length of time during which metric data is collected in ISO 8601 format. Zero period means metric data was collected now
     */
    period: OverviewMetric.period;
    /**
     * Value of the overview metric
     */
    value: number;
    /**
     * Last time the overview metric was updated in ms since epoch
     */
    last_updated_at: number | null;
    /**
     * Last time the overview metric was updated datetime in ISO 8601 format
     */
    last_updated_at_iso8601: string | null;
};
export declare namespace OverviewMetric {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    enum typeObj {
        OVERVIEW_METRIC = "overview_metric"
    }
    /**
     * Length of time during which metric data is collected in ISO 8601 format. Zero period means metric data was collected now
     */
    enum period {
        P0D = "P0D",
        P28D = "P28D"
    }
}
