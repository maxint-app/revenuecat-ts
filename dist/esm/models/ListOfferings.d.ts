import type { Offering } from "./Offering.js";
export type ListOfferings = {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    object: ListOfferings.typeObj;
    /**
     * Details about each object.
     */
    items: Array<Offering>;
    /**
     * URL to access the next page of the project's offerings. If not present / null, there is no next page
     */
    next_page: string | null;
    /**
     * The URL where this list can be accessed.
     */
    url: string;
};
export declare namespace ListOfferings {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    enum typeObj {
        LIST = "list"
    }
}
