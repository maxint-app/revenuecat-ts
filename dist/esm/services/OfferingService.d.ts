import type { DeletedObject } from "../models/DeletedObject.js";
import type { ListOfferings } from "../models/ListOfferings.js";
import type { Offering } from "../models/Offering.js";
import type { OfferingMetadata } from "../models/OfferingMetadata.js";
import type { CancelablePromise } from "../core/CancelablePromise.js";
import type { BaseHttpRequest } from "../core/BaseHttpRequest.js";
export declare class OfferingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get an offering
     * This endpoint requires the following permission(s): `project_configuration:offerings:read`.
     * @param projectId ID of the project
     * @param offeringId ID of the offering
     * @param expand Specifies which fields in the response should be expanded. Accepted values are: `package`, `package.product`.
     * @returns Offering Success
     * @throws ApiError
     */
    getOffering(projectId: string, offeringId: string, expand?: Array<'package' | 'package.product'>): CancelablePromise<Offering>;
    /**
     * Update an offering
     * This endpoint requires the following permission(s): `project_configuration:offerings:read_write`.
     * @param projectId ID of the project
     * @param offeringId ID of the offering
     * @param requestBody
     * @returns Offering Success. The offering was updated
     * @throws ApiError
     */
    updateOffering(projectId: string, offeringId: string, requestBody: {
        /**
         * The display name of the offering
         */
        display_name?: string;
        /**
         * Indicates if the offering is the current offering
         */
        is_current?: boolean;
        /**
         * Custom metadata of the offering
         */
        metadata?: OfferingMetadata | null;
    }): CancelablePromise<Offering>;
    /**
     * Delete an offering and its attached packages
     * This endpoint requires the following permission(s): `project_configuration:offerings:read_write`.
     * @param projectId ID of the project
     * @param offeringId ID of the offering
     * @returns DeletedObject Success
     * @throws ApiError
     */
    deleteOffering(projectId: string, offeringId: string): CancelablePromise<DeletedObject>;
    /**
     * Get a list of offerings
     * This endpoint requires the following permission(s): `project_configuration:offerings:read`.
     * @param projectId ID of the project
     * @param startingAfter
     * @param limit
     * @param expand Specifies which fields in the response should be expanded. Accepted values are: `items.package`, `items.package.product`.
     * @returns ListOfferings Success
     * @throws ApiError
     */
    listOfferings(projectId: string, startingAfter?: string, limit?: number, expand?: Array<'items.package' | 'items.package.product'>): CancelablePromise<ListOfferings>;
    /**
     * Create an offering
     * This endpoint requires the following permission(s): `project_configuration:offerings:read_write`.
     * @param projectId ID of the project
     * @param requestBody
     * @returns Offering Success. The offering was created
     * @throws ApiError
     */
    createOffering(projectId: string, requestBody: {
        /**
         * The custom identifier of the offering
         */
        lookup_key: string;
        /**
         * The display_name of the offering
         */
        display_name: string;
        /**
         * Custom metadata of the offering
         */
        metadata?: OfferingMetadata | null;
    }): CancelablePromise<Offering>;
}
