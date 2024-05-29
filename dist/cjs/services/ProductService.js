"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get a product
     * This endpoint requires the following permission(s): `project_configuration:products:read`.
     * @param projectId ID of the project
     * @param productId ID of the product
     * @param expand Specifies which fields in the response should be expanded. Accepted values are: `app`.
     * @returns Product Success
     * @throws ApiError
     */
    getProduct(projectId, productId, expand) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/products/{product_id}',
            path: {
                'project_id': projectId,
                'product_id': productId,
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
     * Delete a product
     * This endpoint requires the following permission(s): `project_configuration:products:read_write`.
     * @param projectId ID of the project
     * @param productId ID of the product
     * @returns DeletedObject Success
     * @throws ApiError
     */
    deleteProduct(projectId, productId) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/products/{product_id}',
            path: {
                'project_id': projectId,
                'product_id': productId,
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
    listProducts(projectId, appId, startingAfter, limit = 20, expand) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/products',
            path: {
                'project_id': projectId,
            },
            query: {
                'app_id': appId,
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
     * Create a product
     * This endpoint requires the following permission(s): `project_configuration:products:read_write`.
     * @param projectId ID of the project
     * @param requestBody
     * @returns Product Success. The product was created
     * @throws ApiError
     */
    createProduct(projectId, requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/products',
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
}
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map