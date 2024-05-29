import type { App } from "./App.js";
export type ListApps = {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    object: ListApps.typeObj;
    /**
     * Details about each object.
     */
    items: Array<App>;
    /**
     * URL to access the next page of the project's apps. If not present / null, there is no next page
     */
    next_page: string | null;
    /**
     * The URL where this list can be accessed.
     */
    url: string;
};
export declare namespace ListApps {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    enum typeObj {
        LIST = "list"
    }
}
