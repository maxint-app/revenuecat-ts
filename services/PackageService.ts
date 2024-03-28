/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeletedObject } from "../models/DeletedObject.ts";
import type { ListPackages } from "../models/ListPackages.ts";
import type { Package } from "../models/Package.ts";
import type { PackageProductIDAssociation } from "../models/PackageProductIDAssociation.ts";
import type { ProductsFromPackage } from "../models/ProductsFromPackage.ts";
import type { CancelablePromise } from "../core/CancelablePromise.ts";
import type { BaseHttpRequest } from "../core/BaseHttpRequest.ts";
export class PackageService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of packages in an offering
     * This endpoint requires the following permission(s): `project_configuration:packages:read`.
     * @param projectId ID of the project
     * @param offeringId ID of the offering
     * @param startingAfter
     * @param limit
     * @param expand Specifies which fields in the response should be expanded. Accepted values are: `items.product`.
     * @returns ListPackages Success
     * @throws ApiError
     */
    public listPackages(
        projectId: string,
        offeringId: string,
        startingAfter?: string,
        limit: number = 20,
        expand?: Array<'items.product'>,
    ): CancelablePromise<ListPackages> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/offerings/{offering_id}/packages',
            path: {
                'project_id': projectId,
                'offering_id': offeringId,
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
     * Create a package
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * @param projectId ID of the project
     * @param offeringId ID of the offering
     * @param requestBody
     * @returns Package Success. The package was created
     * @throws ApiError
     */
    public createPackages(
        projectId: string,
        offeringId: string,
        requestBody: {
            /**
             * The lookup_key of the package
             */
            lookup_key: string;
            /**
             * The display name of the package
             */
            display_name: string;
            /**
             * The position of the package in the offering
             */
            position?: number;
        },
    ): CancelablePromise<Package> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/offerings/{offering_id}/packages',
            path: {
                'project_id': projectId,
                'offering_id': offeringId,
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
     * Get a package
     * This endpoint requires the following permission(s): `project_configuration:packages:read`.
     * @param projectId ID of the project
     * @param packageId ID of the package
     * @param expand Specifies which fields in the response should be expanded. Accepted values are: `product`.
     * @returns Package Success
     * @throws ApiError
     */
    public getPackage(
        projectId: string,
        packageId: string,
        expand?: Array<'product'>,
    ): CancelablePromise<Package> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/packages/{package_id}',
            path: {
                'project_id': projectId,
                'package_id': packageId,
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
     * Update a package
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * @param projectId ID of the project
     * @param packageId ID of the package
     * @param requestBody
     * @returns Package Success. The package was updated
     * @throws ApiError
     */
    public updatePackage(
        projectId: string,
        packageId: string,
        requestBody: {
            /**
             * The display name of the package
             */
            display_name?: string;
            /**
             * The position of the package within the offering
             */
            position?: number;
        },
    ): CancelablePromise<Package> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/packages/{package_id}',
            path: {
                'project_id': projectId,
                'package_id': packageId,
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
     * Delete a package
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * @param projectId ID of the project
     * @param packageId ID of the package
     * @returns DeletedObject Success
     * @throws ApiError
     */
    public deletePackageFromOffering(
        projectId: string,
        packageId: string,
    ): CancelablePromise<DeletedObject> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/packages/{package_id}',
            path: {
                'project_id': projectId,
                'package_id': packageId,
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
     * Get a list of products attached to a given package of an offering
     * This endpoint requires the following permission(s): `project_configuration:packages:read`.
     * @param projectId ID of the project
     * @param packageId ID of the package
     * @param startingAfter
     * @param limit
     * @returns ProductsFromPackage Success
     * @throws ApiError
     */
    public getProductsFromPackage(
        projectId: string,
        packageId: string,
        startingAfter?: string,
        limit: number = 20,
    ): CancelablePromise<ProductsFromPackage> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/packages/{package_id}/products',
            path: {
                'project_id': projectId,
                'package_id': packageId,
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
     * Attach a set of products to a package
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * @param projectId ID of the project
     * @param packageId ID of the package
     * @param requestBody
     * @returns Package Success. The products were attached to the package.
     * @throws ApiError
     */
    public attachProductsToPackage(
        projectId: string,
        packageId: string,
        requestBody: {
            /**
             * Product association list
             */
            products: Array<PackageProductIDAssociation>;
        },
    ): CancelablePromise<Package> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/packages/{package_id}/actions/attach_products',
            path: {
                'project_id': projectId,
                'package_id': packageId,
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
     * Detach a set of products from a package
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * @param projectId ID of the project
     * @param packageId ID of the package
     * @param requestBody
     * @returns Package Success
     * @throws ApiError
     */
    public detachProductsFromPackage(
        projectId: string,
        packageId: string,
        requestBody: {
            /**
             * IDs of the products to detach from the package
             */
            product_ids: Array<string>;
        },
    ): CancelablePromise<Package> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/packages/{package_id}/actions/detach_products',
            path: {
                'project_id': projectId,
                'package_id': packageId,
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
