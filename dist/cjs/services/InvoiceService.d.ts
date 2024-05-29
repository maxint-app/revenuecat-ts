import type { ListCustomerInvoices } from "../models/ListCustomerInvoices.js";
import type { CancelablePromise } from "../core/CancelablePromise.js";
import type { BaseHttpRequest } from "../core/BaseHttpRequest.js";
export declare class InvoiceService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
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
    listCustomerInvoices(projectId: string, customerId: string, startingAfter?: string, limit?: number): CancelablePromise<ListCustomerInvoices>;
    /**
     * Get an invoice
     * This endpoint requires the following permission(s): `customer_information:invoices:read`.
     * @param projectId ID of the project
     * @param customerId ID of the customer
     * @param invoiceId ID of the invoice
     * @returns void
     * @throws ApiError
     */
    getInvoice(projectId: string, customerId: string, invoiceId: string): CancelablePromise<void>;
}
