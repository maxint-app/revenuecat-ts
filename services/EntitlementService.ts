/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeletedObject } from "../models/DeletedObject.ts";
import type { Entitlement } from "../models/Entitlement.ts";
import type { ListEntitlements } from "../models/ListEntitlements.ts";
import type { ProductsFromEntitlement } from "../models/ProductsFromEntitlement.ts";
import type { CancelablePromise } from "../core/CancelablePromise.ts";
import type { BaseHttpRequest } from "../core/BaseHttpRequest.ts";
export class EntitlementService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get an entitlement
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read`.
     * @param projectId ID of the project
     * @param entitlementId ID of the entitlement
     * @param expand Specifies which fields in the response should be expanded. Accepted values are: `product`.
     * @returns Entitlement Success
     * @throws ApiError
     */
    public getEntitlement(
        projectId: string,
        entitlementId: string,
        expand?: Array<'product'>,
    ): CancelablePromise<Entitlement> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/entitlements/{entitlement_id}',
            path: {
                'project_id': projectId,
                'entitlement_id': entitlementId,
            },
            query: {
                'expand': expand,
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
     * Update an entitlement
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * @param projectId ID of the project
     * @param entitlementId ID of the entitlement
     * @param requestBody
     * @returns Entitlement Success. The entitlement was updated
     * @throws ApiError
     */
    public updateEntitlement(
        projectId: string,
        entitlementId: string,
        requestBody: {
            /**
             * The display name of the entitlement
             */
            display_name: string;
        },
    ): CancelablePromise<Entitlement> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/entitlements/{entitlement_id}',
            path: {
                'project_id': projectId,
                'entitlement_id': entitlementId,
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
     * Delete an entitlement
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * @param projectId ID of the project
     * @param entitlementId ID of the entitlement
     * @returns DeletedObject Success
     * @throws ApiError
     */
    public deleteEntitlement(
        projectId: string,
        entitlementId: string,
    ): CancelablePromise<DeletedObject> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/entitlements/{entitlement_id}',
            path: {
                'project_id': projectId,
                'entitlement_id': entitlementId,
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
    public listEntitlements(
        projectId: string,
        startingAfter?: string,
        limit: number = 20,
        expand?: Array<'items.product'>,
    ): CancelablePromise<ListEntitlements> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/entitlements',
            path: {
                'project_id': projectId,
            },
            query: {
                'starting_after': startingAfter,
                'limit': limit,
                'expand': expand,
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
     * Create an entitlement
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * @param projectId ID of the project
     * @param requestBody
     * @returns Entitlement Success. The entitlement was created
     * @throws ApiError
     */
    public createEntitlement(
        projectId: string,
        requestBody: {
            /**
             * The identifier of the entitlement
             */
            lookup_key: string;
            /**
             * The display name of the entitlement
             */
            display_name: string;
        },
    ): CancelablePromise<Entitlement> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/entitlements',
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
     * Get a list of products attached to a given entitlement
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read`.
     * @param projectId ID of the project
     * @param entitlementId ID of the entitlement
     * @param startingAfter
     * @param limit
     * @returns ProductsFromEntitlement Success
     * @throws ApiError
     */
    public getProductsFromEntitlement(
        projectId: string,
        entitlementId: string,
        startingAfter?: string,
        limit: number = 20,
    ): CancelablePromise<ProductsFromEntitlement> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/entitlements/{entitlement_id}/products',
            path: {
                'project_id': projectId,
                'entitlement_id': entitlementId,
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
     * Attach a set of products to an entitlement
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * @param projectId ID of the project
     * @param entitlementId ID of the entitlement
     * @param requestBody
     * @returns Entitlement Success. The products were attached to the entitlement
     * @throws ApiError
     */
    public attachProductsToEntitlement(
        projectId: string,
        entitlementId: string,
        requestBody: {
            /**
             * IDs of the products to be attached to the entitlement.
             */
            product_ids: Array<string>;
        },
    ): CancelablePromise<Entitlement> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/entitlements/{entitlement_id}/actions/attach_products',
            path: {
                'project_id': projectId,
                'entitlement_id': entitlementId,
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
     * Detach a set of product from an entitlement
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * @param projectId ID of the project
     * @param entitlementId ID of the entitlement
     * @param requestBody
     * @returns Entitlement Success. The products were detached from the entitlement
     * @throws ApiError
     */
    public detachProductsFromEntitlement(
        projectId: string,
        entitlementId: string,
        requestBody: {
            /**
             * IDs of the products to be detached from the entitlement.
             */
            product_ids: Array<string>;
        },
    ): CancelablePromise<Entitlement> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/entitlements/{entitlement_id}/actions/detach_products',
            path: {
                'project_id': projectId,
                'entitlement_id': entitlementId,
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
}
