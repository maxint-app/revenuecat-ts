export class AppService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get a list of apps
     * This endpoint requires the following permission(s): `project_configuration:apps:read`.
     * @param projectId ID of the project
     * @param startingAfter
     * @param limit
     * @returns ListApps Success
     * @throws ApiError
     */
    listApps(projectId, startingAfter, limit = 20) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/apps',
            path: {
                'project_id': projectId,
            },
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
    /**
     * Create an App
     * This endpoint requires the following permission(s): `project_configuration:apps:read_write`.
     * @param projectId ID of the project
     * @param requestBody
     * @returns App Success. The app was created
     * @throws ApiError
     */
    createApp(projectId, requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/apps',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Access denied`,
                404: `Not found`,
                409: `Conflict`,
                422: `Unprocessable entity`,
                423: `Locked`,
                429: `The request could not be completed because the rate limiting domain for this endpoint is currently at its limit for this project.`,
                500: `Internal server error`,
                503: `Internal server error`,
            },
        });
    }
    /**
     * Get an app
     * This endpoint requires the following permission(s): `project_configuration:apps:read`.
     * @param projectId ID of the project
     * @param appId ID of the app
     * @returns App Success
     * @throws ApiError
     */
    getApp(projectId, appId) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/apps/{app_id}',
            path: {
                'project_id': projectId,
                'app_id': appId,
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
    /**
     * Update an app
     * This endpoint requires the following permission(s): `project_configuration:apps:read_write`.
     * @param projectId ID of the project
     * @param appId ID of the app
     * @param requestBody
     * @returns App Success. The app was updated
     * @throws ApiError
     */
    updateApp(projectId, appId, requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/apps/{app_id}',
            path: {
                'project_id': projectId,
                'app_id': appId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Access denied`,
                404: `Not found`,
                409: `Conflict`,
                422: `Unprocessable entity`,
                423: `Locked`,
                429: `The request could not be completed because the rate limiting domain for this endpoint is currently at its limit for this project.`,
                500: `Internal server error`,
                503: `Internal server error`,
            },
        });
    }
    /**
     * Delete an app
     * This endpoint requires the following permission(s): `project_configuration:apps:read_write`.
     * @param projectId ID of the project
     * @param appId ID of the app
     * @returns DeletedObject Success
     * @throws ApiError
     */
    deleteApp(projectId, appId) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/apps/{app_id}',
            path: {
                'project_id': projectId,
                'app_id': appId,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Access denied`,
                404: `Not found`,
                409: `Conflict`,
                422: `Unprocessable entity`,
                423: `Locked`,
                429: `The request could not be completed because the rate limiting domain for this endpoint is currently at its limit for this project.`,
                500: `Internal server error`,
                503: `Internal server error`,
            },
        });
    }
}
//# sourceMappingURL=AppService.js.map