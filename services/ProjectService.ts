/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListProjects } from "../models/ListProjects.js";
import type { CancelablePromise } from "../core/CancelablePromise.js";
import type { BaseHttpRequest } from "../core/BaseHttpRequest.js";
export class ProjectService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of projects
     * This endpoint requires the following permission(s): `project_configuration:projects:read`.
     * @param startingAfter
     * @param limit
     * @returns ListProjects Success
     * @throws ApiError
     */
    public listProjects(
        startingAfter?: string,
        limit: number = 20,
    ): CancelablePromise<ListProjects> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects',
            query: {
                'starting_after': startingAfter,
                'limit': limit,
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
