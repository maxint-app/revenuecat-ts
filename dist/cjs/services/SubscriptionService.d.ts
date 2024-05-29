import type { Subscription } from "../models/Subscription.js";
import type { CancelablePromise } from "../core/CancelablePromise.js";
import type { BaseHttpRequest } from "../core/BaseHttpRequest.js";
export declare class SubscriptionService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Cancels an active RevenueCat Billing subscription
     * This endpoint requires the following permission(s): `customer_information:subscriptions:read_write`.
     * @param projectId ID of the project
     * @param subscriptionId ID of the subscription
     * @returns Subscription Success. The subscription has been successfully canceled
     * @throws ApiError
     */
    cancelSubscription(projectId: string, subscriptionId: string): CancelablePromise<Subscription>;
    /**
     * Refunds the last payment of an active RevenueCat Billing subscription and revokes access to associated granted entitlements.
     * This endpoint requires the following permission(s): `customer_information:subscriptions:read_write`.
     * @param projectId ID of the project
     * @param subscriptionId ID of the subscription
     * @returns Subscription Success. The subscription has been successfully refunded
     * @throws ApiError
     */
    refundSubscription(projectId: string, subscriptionId: string): CancelablePromise<Subscription>;
}
