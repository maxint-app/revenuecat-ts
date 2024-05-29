import type { ListSubscriptions } from "../models/ListSubscriptions.js";
import type { CancelablePromise } from "../core/CancelablePromise.js";
import type { BaseHttpRequest } from "../core/BaseHttpRequest.js";
export declare class CustomerService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get a list of subscriptions associated with a customer
     * Lists all Subscriptions associated with the Customer. This currently includes only RevenueCat Billing subscriptions. We are planning to add information about subscriptions on other supported stores soon.
     * This endpoint requires the following permission(s): `customer_information:subscriptions:read`.
     * @param projectId ID of the project
     * @param customerId ID of the customer
     * @param environment
     * @param startingAfter
     * @param limit
     * @returns ListSubscriptions Success
     * @throws ApiError
     */
    listSubscriptions(projectId: string, customerId: string, environment?: 'sandbox' | 'production', startingAfter?: string, limit?: number): CancelablePromise<ListSubscriptions>;
}
