/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Product } from "./Product.ts";
export type Entitlement = {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: Entitlement.object;
    /**
     * ID of the project to which the entitlement belongs
     */
    project_id: string;
    /**
     * The id of the entitlement
     */
    id: string;
    /**
     * A custom identifier of the entitlement
     */
    lookup_key: string;
    /**
     * The display name of the entitlement
     */
    display_name: string;
    /**
     * The date when the entitlement was created in ms since epoch
     */
    created_at: number;
    /**
     * List of products attached to the entitlement
     */
    products?: {
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: Entitlement.object;
        /**
         * Details about each object.
         */
        items: Array<Product>;
        /**
         * URL to access the next page of the Entitlement's products. If not present / null, there is no next page
         */
        next_page: string | null;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    } | null;
};
export namespace Entitlement {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        ENTITLEMENT = 'entitlement',
    }
}

