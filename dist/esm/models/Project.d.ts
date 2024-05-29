export type Project = {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: Project.typeObj;
    /**
     * The id of the project
     */
    id: string;
    /**
     * The name of the project
     */
    name: string;
    /**
     * The date when the project was created in ms since epoch
     */
    created_at: number;
};
export declare namespace Project {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    enum typeObj {
        PROJECT = "project"
    }
}
