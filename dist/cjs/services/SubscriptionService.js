"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionService = void 0;
class SubscriptionService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Cancels an active RevenueCat Billing subscription
     * This endpoint requires the following permission(s): `customer_information:subscriptions:read_write`.
     * @param projectId ID of the project
     * @param subscriptionId ID of the subscription
     * @returns Subscription Success. The subscription has been successfully canceled
     * @throws ApiError
     */
    cancelSubscription(projectId, subscriptionId) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/subscriptions/{subscription_id}/actions/cancel',
            path: {
                'project_id': projectId,
                'subscription_id': subscriptionId,
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
     * Refunds the last payment of an active RevenueCat Billing subscription and revokes access to associated granted entitlements.
     * This endpoint requires the following permission(s): `customer_information:subscriptions:read_write`.
     * @param projectId ID of the project
     * @param subscriptionId ID of the subscription
     * @returns Subscription Success. The subscription has been successfully refunded
     * @throws ApiError
     */
    refundSubscription(projectId, subscriptionId) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/subscriptions/{subscription_id}/actions/refund',
            path: {
                'project_id': projectId,
                'subscription_id': subscriptionId,
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
exports.SubscriptionService = SubscriptionService;
//# sourceMappingURL=SubscriptionService.js.map