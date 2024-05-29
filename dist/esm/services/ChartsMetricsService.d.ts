import type { OverviewMetrics } from "../models/OverviewMetrics.js";
import type { CancelablePromise } from "../core/CancelablePromise.js";
import type { BaseHttpRequest } from "../core/BaseHttpRequest.js";
export declare class ChartsMetricsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get overview metrics for a project
     * This endpoint requires the following permission(s): `charts_metrics:overview:read`.
     * @param projectId ID of the project
     * @returns OverviewMetrics Success
     * @throws ApiError
     */
    getOverviewMetrics(projectId: string): CancelablePromise<OverviewMetrics>;
}
