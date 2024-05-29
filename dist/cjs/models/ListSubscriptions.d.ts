import type { Subscription } from "./Subscription.js";
export type ListSubscriptions = {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    object: ListSubscriptions.typeObj;
    /**
     * Details about each object.
     */
    items: Array<Subscription>;
    /**
     * URL to access the next page of the customer's subscriptions. If not present / null, there is no next page
     */
    next_page: string | null;
    /**
     * The URL where this list can be accessed.
     */
    url: string;
};
export declare namespace ListSubscriptions {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    enum typeObj {
        LIST = "list"
    }
}
