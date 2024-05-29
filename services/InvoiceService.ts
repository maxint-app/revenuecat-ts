/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListCustomerInvoices } from "../models/ListCustomerInvoices.js";
import type { CancelablePromise } from "../core/CancelablePromise.js";
import type { BaseHttpRequest } from "../core/BaseHttpRequest.js";
export class InvoiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of the customer's invoices
     * This endpoint requires the following permission(s): `customer_information:invoices:read`.
     * @param projectId ID of the project
     * @param customerId ID of the customer
     * @param startingAfter
     * @param limit
     * @returns ListCustomerInvoices Success
     * @throws ApiError
     */
    public listCustomerInvoices(
        projectId: string,
        customerId: string,
        startingAfter?: string,
        limit: number = 20,
    ): CancelablePromise<ListCustomerInvoices> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/customers/{customer_id}/invoices',
            path: {
                'project_id': projectId,
                'customer_id': customerId,
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
     * Get an invoice
     * This endpoint requires the following permission(s): `customer_information:invoices:read`.
     * @param projectId ID of the project
     * @param customerId ID of the customer
     * @param invoiceId ID of the invoice
     * @returns void
     * @throws ApiError
     */
    public getInvoice(
        projectId: string,
        customerId: string,
        invoiceId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/customers/{customer_id}/invoices/{invoice_id}/file',
            path: {
                'project_id': projectId,
                'customer_id': customerId,
                'invoice_id': invoiceId,
            },
            errors: {
                302: `File found. Needs to be downloaded from the location header`,
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
