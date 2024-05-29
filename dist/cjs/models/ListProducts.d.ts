import type { Product } from "./Product.js";
export type ListProducts = {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    object: ListProducts.typeObj;
    /**
     * Details about each object.
     */
    items: Array<Product>;
    /**
     * URL to access the next page of the project's products. If not present / null, there is no next page
     */
    next_page: string | null;
    /**
     * The URL where this list can be accessed.
     */
    url: string;
};
export declare namespace ListProducts {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    enum typeObj {
        LIST = "list"
    }
}
