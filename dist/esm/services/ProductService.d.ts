import type { DeletedObject } from "../models/DeletedObject.js";
import type { ListProducts } from "../models/ListProducts.js";
import type { Product } from "../models/Product.js";
import type { ProductType } from "../models/ProductType.js";
import type { CancelablePromise } from "../core/CancelablePromise.js";
import type { BaseHttpRequest } from "../core/BaseHttpRequest.js";
export declare class ProductService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get a product
     * This endpoint requires the following permission(s): `project_configuration:products:read`.
     * @param projectId ID of the project
     * @param productId ID of the product
     * @param expand Specifies which fields in the response should be expanded. Accepted values are: `app`.
     * @returns Product Success
     * @throws ApiError
     */
    getProduct(projectId: string, productId: string, expand?: Array<'app'>): CancelablePromise<Product>;
    /**
     * Delete a product
     * This endpoint requires the following permission(s): `project_configuration:products:read_write`.
     * @param projectId ID of the project
     * @param productId ID of the product
     * @returns DeletedObject Success
     * @throws ApiError
     */
    deleteProduct(projectId: string, productId: string): CancelablePromise<DeletedObject>;
    /**
     * Get a list of products
     * This endpoint requires the following permission(s): `project_configuration:products:read`.
     * @param projectId ID of the project
     * @param appId This is an optional query parameter to get a list of products of a given entitlement associated with a particular app
     * @param startingAfter
     * @param limit
     * @param expand Specifies which fields in the response should be expanded. Accepted values are: `items.app`.
     * @returns ListProducts Success
     * @throws ApiError
     */
    listProducts(projectId: string, appId?: string, startingAfter?: string, limit?: number, expand?: Array<'items.app'>): CancelablePromise<ListProducts>;
    /**
     * Create a product
     * This endpoint requires the following permission(s): `project_configuration:products:read_write`.
     * @param projectId ID of the project
     * @param requestBody
     * @returns Product Success. The product was created
     * @throws ApiError
     */
    createProduct(projectId: string, requestBody: {
        /**
         * The store identifier of the product.
         * - For Apple App Store products this is the product ID of the subscription or in-app product.
         * - For Google's Play Store, it should follow the format 'productId:basePlanId' for subscription products and SKU for one-time purchase products.
         * - For Stripe, the product identifier that always starts with "prod_"
         * - For Amazon, if it's a subscription, the term SKU of the subscription. If it's a one-time purchase, the SKU of the product.
         *
         */
        store_identifier: string;
        /**
         * The ID of the app
         */
        app_id: string;
        /**
         * The product type
         */
        type: ProductType;
        /**
         * The display name of the product
         */
        display_name?: string | null;
    }): CancelablePromise<Product>;
}
