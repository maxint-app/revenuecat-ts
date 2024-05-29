import type { Project } from "./Project.js";
export type ListProjects = {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    object: ListProjects.typeObj;
    /**
     * Details about each object.
     */
    items: Array<Project>;
    /**
     * URL to access the next page of the projects. If not present / null, there is no next page
     */
    next_page: string | null;
    /**
     * The URL where this list can be accessed.
     */
    url: string;
};
export declare namespace ListProjects {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    enum typeObj {
        LIST = "list"
    }
}
