/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { App } from "./App.ts";
import type { ProductType } from "./ProductType.ts";
import type { SubscriptionProduct } from "./SubscriptionProduct.ts";
export type Product = {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    object: Product.object;
    /**
     * The id of the product
     */
    id: string;
    /**
     * The store product identifier
     */
    store_identifier: string;
    /**
     * The product type
     */
    type: ProductType;
    /**
     * The subscription product object
     */
    subscription?: SubscriptionProduct | null;
    /**
     * The date when the product was created in ms since epoch
     */
    created_at: number;
    /**
     * The id of the app
     */
    app_id: string;
    /**
     * The app associated with the product
     */
    app?: App | null;
    /**
     * The display name of the product
     */
    display_name: string | null;
};
export namespace Product {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    export enum object {
        PRODUCT = 'product',
    }
}

