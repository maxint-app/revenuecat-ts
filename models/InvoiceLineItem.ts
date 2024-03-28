/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MonetaryAmount } from "./MonetaryAmount.ts";
export type InvoiceLineItem = {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: InvoiceLineItem.object;
    /**
     * The product identifier
     */
    product_identifier: string;
    /**
     * The display name of the product
     */
    product_display_name: string | null;
    /**
     * The duration of the subscription in ISO-8601 standard
     */
    product_duration: string | null;
    /**
     * Total purchased items
     */
    quantity: number;
    unit_amount: MonetaryAmount;
};
export namespace InvoiceLineItem {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        INVOICE_LINE_ITEM = 'invoice.line_item',
    }
}

