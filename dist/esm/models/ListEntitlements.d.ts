import type { Entitlement } from "./Entitlement.js";
export type ListEntitlements = {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    object: ListEntitlements.typeObj;
    /**
     * Details about each object.
     */
    items: Array<Entitlement>;
    /**
     * URL to access the next page of the project's entitlements. If not present / null, there is no next page
     */
    next_page: string | null;
    /**
     * The URL where this list can be accessed.
     */
    url: string;
};
export declare namespace ListEntitlements {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    enum typeObj {
        LIST = "list"
    }
}
