import type { DeletedObject } from "../models/DeletedObject.js";
import type { Entitlement } from "../models/Entitlement.js";
import type { ListEntitlements } from "../models/ListEntitlements.js";
import type { ProductsFromEntitlement } from "../models/ProductsFromEntitlement.js";
import type { CancelablePromise } from "../core/CancelablePromise.js";
import type { BaseHttpRequest } from "../core/BaseHttpRequest.js";
export declare class EntitlementService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get an entitlement
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read`.
     * @param projectId ID of the project
     * @param entitlementId ID of the entitlement
     * @param expand Specifies which fields in the response should be expanded. Accepted values are: `product`.
     * @returns Entitlement Success
     * @throws ApiError
     */
    getEntitlement(projectId: string, entitlementId: string, expand?: Array<'product'>): CancelablePromise<Entitlement>;
    /**
     * Update an entitlement
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * @param projectId ID of the project
     * @param entitlementId ID of the entitlement
     * @param requestBody
     * @returns Entitlement Success. The entitlement was updated
     * @throws ApiError
     */
    updateEntitlement(projectId: string, entitlementId: string, requestBody: {
        /**
         * The display name of the entitlement
         */
        display_name: string;
    }): CancelablePromise<Entitlement>;
    /**
     * Delete an entitlement
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * @param projectId ID of the project
     * @param entitlementId ID of the entitlement
     * @returns DeletedObject Success
     * @throws ApiError
     */
    deleteEntitlement(projectId: string, entitlementId: string): CancelablePromise<DeletedObject>;
    /**
     * Get a list of entitlements
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read`.
     * @param projectId ID of the project
     * @param startingAfter
     * @param limit
     * @param expand Specifies which fields in the response should be expanded. Accepted values are: `items.product`.
     * @returns ListEntitlements Success
     * @throws ApiError
     */
    listEntitlements(projectId: string, startingAfter?: string, limit?: number, expand?: Array<'items.product'>): CancelablePromise<ListEntitlements>;
    /**
     * Create an entitlement
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * @param projectId ID of the project
     * @param requestBody
     * @returns Entitlement Success. The entitlement was created
     * @throws ApiError
     */
    createEntitlement(projectId: string, requestBody: {
        /**
         * The identifier of the entitlement
         */
        lookup_key: string;
        /**
         * The display name of the entitlement
         */
        display_name: string;
    }): CancelablePromise<Entitlement>;
    /**
     * Get a list of products attached to a given entitlement
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read`.
     * @param projectId ID of the project
     * @param entitlementId ID of the entitlement
     * @param startingAfter
     * @param limit
     * @returns ProductsFromEntitlement Success
     * @throws ApiError
     */
    getProductsFromEntitlement(projectId: string, entitlementId: string, startingAfter?: string, limit?: number): CancelablePromise<ProductsFromEntitlement>;
    /**
     * Attach a set of products to an entitlement
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * @param projectId ID of the project
     * @param entitlementId ID of the entitlement
     * @param requestBody
     * @returns Entitlement Success. The products were attached to the entitlement
     * @throws ApiError
     */
    attachProductsToEntitlement(projectId: string, entitlementId: string, requestBody: {
        /**
         * IDs of the products to be attached to the entitlement.
         */
        product_ids: Array<string>;
    }): CancelablePromise<Entitlement>;
    /**
     * Detach a set of product from an entitlement
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * @param projectId ID of the project
     * @param entitlementId ID of the entitlement
     * @param requestBody
     * @returns Entitlement Success. The products were detached from the entitlement
     * @throws ApiError
     */
    detachProductsFromEntitlement(projectId: string, entitlementId: string, requestBody: {
        /**
         * IDs of the products to be detached from the entitlement.
         */
        product_ids: Array<string>;
    }): CancelablePromise<Entitlement>;
}
