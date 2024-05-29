/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Product } from "./Product.js";
export type ProductsFromEntitlement = {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    object: ProductsFromEntitlement.typeObj;
    /**
     * Details about each object.
     */
    items: Array<Product>;
    /**
     * URL to access the next page of the entitlement's products. If not present / null, there is no next page
     */
    next_page: string | null;
    /**
     * The URL where this list can be accessed.
     */
    url: string;
};
export namespace ProductsFromEntitlement {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    export enum typeObj {
        LIST = 'list',
    }
}

