/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { App } from "../models/App.js";
import type { AppCreate } from "../models/AppCreate.js";
import type { DeletedObject } from "../models/DeletedObject.js";
import type { ListApps } from "../models/ListApps.js";
import type { CancelablePromise } from "../core/CancelablePromise.js";
import type { BaseHttpRequest } from "../core/BaseHttpRequest.js";
export class AppService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of apps
     * This endpoint requires the following permission(s): `project_configuration:apps:read`.
     * @param projectId ID of the project
     * @param startingAfter
     * @param limit
     * @returns ListApps Success
     * @throws ApiError
     */
    public listApps(
        projectId: string,
        startingAfter?: string,
        limit: number = 20,
    ): CancelablePromise<ListApps> {
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
    public createApp(
        projectId: string,
        requestBody: AppCreate,
    ): CancelablePromise<App> {
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
    public getApp(
        projectId: string,
        appId: string,
    ): CancelablePromise<App> {
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
    public updateApp(
        projectId: string,
        appId: string,
        requestBody: {
            /**
             * The name of the app
             */
            name?: string;
            /**
             * Amazon type details. Should only be used when type is amazon.
             */
            amazon?: {
                /**
                 * The package name of the app
                 */
                package_name?: string;
                /**
                 * Your Amazon Developer Identity Shared Key
                 */
                shared_secret?: string | null;
            };
            /**
             * App Store type details. Should only be used when type is app_store.
             */
            app_store?: {
                /**
                 * The bundle ID of the app
                 */
                bundle_id?: string;
                /**
                 * The shared secret of the app
                 */
                shared_secret?: string | null;
            };
            /**
             * Legacy Mac App Store type details. Should only be used when type is mac_app_store.
             */
            mac_app_store?: {
                /**
                 * The bundle ID of the app
                 */
                bundle_id?: string;
                /**
                 * The shared secret of the app
                 */
                shared_secret?: string | null;
            };
            /**
             * Play Store type details. Should only be used when type is play_store.
             */
            play_store?: {
                /**
                 * The package name of the app
                 */
                package_name: string;
            };
        },
    ): CancelablePromise<App> {
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
    public deleteApp(
        projectId: string,
        appId: string,
    ): CancelablePromise<DeletedObject> {
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
