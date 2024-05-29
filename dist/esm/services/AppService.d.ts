import type { App } from "../models/App.js";
import type { AppCreate } from "../models/AppCreate.js";
import type { DeletedObject } from "../models/DeletedObject.js";
import type { ListApps } from "../models/ListApps.js";
import type { CancelablePromise } from "../core/CancelablePromise.js";
import type { BaseHttpRequest } from "../core/BaseHttpRequest.js";
export declare class AppService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get a list of apps
     * This endpoint requires the following permission(s): `project_configuration:apps:read`.
     * @param projectId ID of the project
     * @param startingAfter
     * @param limit
     * @returns ListApps Success
     * @throws ApiError
     */
    listApps(projectId: string, startingAfter?: string, limit?: number): CancelablePromise<ListApps>;
    /**
     * Create an App
     * This endpoint requires the following permission(s): `project_configuration:apps:read_write`.
     * @param projectId ID of the project
     * @param requestBody
     * @returns App Success. The app was created
     * @throws ApiError
     */
    createApp(projectId: string, requestBody: AppCreate): CancelablePromise<App>;
    /**
     * Get an app
     * This endpoint requires the following permission(s): `project_configuration:apps:read`.
     * @param projectId ID of the project
     * @param appId ID of the app
     * @returns App Success
     * @throws ApiError
     */
    getApp(projectId: string, appId: string): CancelablePromise<App>;
    /**
     * Update an app
     * This endpoint requires the following permission(s): `project_configuration:apps:read_write`.
     * @param projectId ID of the project
     * @param appId ID of the app
     * @param requestBody
     * @returns App Success. The app was updated
     * @throws ApiError
     */
    updateApp(projectId: string, appId: string, requestBody: {
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
    }): CancelablePromise<App>;
    /**
     * Delete an app
     * This endpoint requires the following permission(s): `project_configuration:apps:read_write`.
     * @param projectId ID of the project
     * @param appId ID of the app
     * @returns DeletedObject Success
     * @throws ApiError
     */
    deleteApp(projectId: string, appId: string): CancelablePromise<DeletedObject>;
}
