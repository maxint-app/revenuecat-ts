import type { DeletedObject } from "../models/DeletedObject.js";
import type { ListPackages } from "../models/ListPackages.js";
import type { Package } from "../models/Package.js";
import type { PackageProductIDAssociation } from "../models/PackageProductIDAssociation.js";
import type { ProductsFromPackage } from "../models/ProductsFromPackage.js";
import type { CancelablePromise } from "../core/CancelablePromise.js";
import type { BaseHttpRequest } from "../core/BaseHttpRequest.js";
export declare class PackageService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
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
    listPackages(projectId: string, offeringId: string, startingAfter?: string, limit?: number, expand?: Array<'items.product'>): CancelablePromise<ListPackages>;
    /**
     * Create a package
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * @param projectId ID of the project
     * @param offeringId ID of the offering
     * @param requestBody
     * @returns Package Success. The package was created
     * @throws ApiError
     */
    createPackages(projectId: string, offeringId: string, requestBody: {
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
    }): CancelablePromise<Package>;
    /**
     * Get a package
     * This endpoint requires the following permission(s): `project_configuration:packages:read`.
     * @param projectId ID of the project
     * @param packageId ID of the package
     * @param expand Specifies which fields in the response should be expanded. Accepted values are: `product`.
     * @returns Package Success
     * @throws ApiError
     */
    getPackage(projectId: string, packageId: string, expand?: Array<'product'>): CancelablePromise<Package>;
    /**
     * Update a package
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * @param projectId ID of the project
     * @param packageId ID of the package
     * @param requestBody
     * @returns Package Success. The package was updated
     * @throws ApiError
     */
    updatePackage(projectId: string, packageId: string, requestBody: {
        /**
         * The display name of the package
         */
        display_name?: string;
        /**
         * The position of the package within the offering
         */
        position?: number;
    }): CancelablePromise<Package>;
    /**
     * Delete a package
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * @param projectId ID of the project
     * @param packageId ID of the package
     * @returns DeletedObject Success
     * @throws ApiError
     */
    deletePackageFromOffering(projectId: string, packageId: string): CancelablePromise<DeletedObject>;
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
    getProductsFromPackage(projectId: string, packageId: string, startingAfter?: string, limit?: number): CancelablePromise<ProductsFromPackage>;
    /**
     * Attach a set of products to a package
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * @param projectId ID of the project
     * @param packageId ID of the package
     * @param requestBody
     * @returns Package Success. The products were attached to the package.
     * @throws ApiError
     */
    attachProductsToPackage(projectId: string, packageId: string, requestBody: {
        /**
         * Product association list
         */
        products: Array<PackageProductIDAssociation>;
    }): CancelablePromise<Package>;
    /**
     * Detach a set of products from a package
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * @param projectId ID of the project
     * @param packageId ID of the package
     * @param requestBody
     * @returns Package Success
     * @throws ApiError
     */
    detachProductsFromPackage(projectId: string, packageId: string, requestBody: {
        /**
         * IDs of the products to detach from the package
         */
        product_ids: Array<string>;
    }): CancelablePromise<Package>;
}
