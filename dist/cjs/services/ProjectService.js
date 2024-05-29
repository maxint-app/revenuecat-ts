"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
class ProjectService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get a list of projects
     * This endpoint requires the following permission(s): `project_configuration:projects:read`.
     * @param startingAfter
     * @param limit
     * @returns ListProjects Success
     * @throws ApiError
     */
    listProjects(startingAfter, limit = 20) {
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
exports.ProjectService = ProjectService;
//# sourceMappingURL=ProjectService.js.map