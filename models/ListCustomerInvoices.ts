/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Invoice } from "./Invoice.js";
export type ListCustomerInvoices = {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    object: ListCustomerInvoices.typeObj;
    /**
     * Details about each object.
     */
    items: Array<Invoice>;
    /**
     * URL to access the next page of the customer's invoice. If not present / null, there is no next page
     */
    next_page: string | null;
    /**
     * The URL where this list can be accessed.
     */
    url: string;
};
export namespace ListCustomerInvoices {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    export enum typeObj {
        LIST = 'list',
    }
}

