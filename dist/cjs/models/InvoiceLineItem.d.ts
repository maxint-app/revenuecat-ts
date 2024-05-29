import type { MonetaryAmount } from "./MonetaryAmount.js";
export type InvoiceLineItem = {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: InvoiceLineItem.typeObj;
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
export declare namespace InvoiceLineItem {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    enum typeObj {
        INVOICE_LINE_ITEM = "invoice.line_item"
    }
}
