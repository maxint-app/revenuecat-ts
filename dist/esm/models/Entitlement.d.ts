import type { Product } from "./Product.js";
export type Entitlement = {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: Entitlement.typeObj;
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
        object: Entitlement.typeObj;
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
export declare namespace Entitlement {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    enum typeObj {
        ENTITLEMENT = "entitlement"
    }
}
