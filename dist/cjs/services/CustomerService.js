"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
class CustomerService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
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
    listSubscriptions(projectId, customerId, environment, startingAfter, limit = 20) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/customers/{customer_id}/subscriptions',
            path: {
                'project_id': projectId,
                'customer_id': customerId,
            },
            query: {
                'environment': environment,
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
}
exports.CustomerService = CustomerService;
//# sourceMappingURL=CustomerService.js.map