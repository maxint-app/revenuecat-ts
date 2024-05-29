import type { Package } from "./Package.js";
export type ListPackages = {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    object: ListPackages.typeObj;
    /**
     * Details about each object.
     */
    items: Array<Package>;
    /**
     * URL to access the next page of the project's packages. If not present / null, there is no next page
     */
    next_page: string | null;
    /**
     * The URL where this list can be accessed.
     */
    url: string;
};
export declare namespace ListPackages {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    enum typeObj {
        LIST = "list"
    }
}
