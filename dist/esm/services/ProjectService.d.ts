import type { ListProjects } from "../models/ListProjects.js";
import type { CancelablePromise } from "../core/CancelablePromise.js";
import type { BaseHttpRequest } from "../core/BaseHttpRequest.js";
export declare class ProjectService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get a list of projects
     * This endpoint requires the following permission(s): `project_configuration:projects:read`.
     * @param startingAfter
     * @param limit
     * @returns ListProjects Success
     * @throws ApiError
     */
    listProjects(startingAfter?: string, limit?: number): CancelablePromise<ListProjects>;
}
