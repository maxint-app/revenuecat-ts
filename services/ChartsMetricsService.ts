/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OverviewMetrics } from "../models/OverviewMetrics.ts";
import type { CancelablePromise } from "../core/CancelablePromise.ts";
import type { BaseHttpRequest } from "../core/BaseHttpRequest.ts";
export class ChartsMetricsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get overview metrics for a project
     * This endpoint requires the following permission(s): `charts_metrics:overview:read`.
     * @param projectId ID of the project
     * @returns OverviewMetrics Success
     * @throws ApiError
     */
    public getOverviewMetrics(
        projectId: string,
    ): CancelablePromise<OverviewMetrics> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/metrics/overview',
            path: {
                'project_id': projectId,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Access denied`,
                404: `Not found`,
                429: `The request could not be completed because the rate limiting domain for this endpoint is currently at its limit for this project.`,
                500: `Internal server error`,
                503: `Internal server error`,
            },
        });
    }
}
