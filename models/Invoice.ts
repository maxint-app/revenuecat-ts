/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InvoiceLineItem } from "./InvoiceLineItem.js";
import type { MonetaryAmount } from "./MonetaryAmount.js";
export type Invoice = {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: Invoice.typeObj;
    /**
     * The id of the invoice
     */
    id: string;
    total_amount: MonetaryAmount;
    /**
     * List of line items that are part of the invoice. Each line item represents a product that was purchased.
     */
    line_items: Array<InvoiceLineItem>;
    /**
     * The date when the invoiced was issued in ms since epoch
     */
    issued_at: number;
    /**
     * The date when the invoiced was paid in ms since epoch
     */
    paid_at: number | null;
    /**
     * URL to download the invoice pdf
     */
    invoice_url: string | null;
};
export namespace Invoice {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum typeObj {
        INVOICE = 'invoice',
    }
}

