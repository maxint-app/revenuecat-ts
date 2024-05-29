/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
export namespace Project {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum typeObj {
        PROJECT = 'project',
    }
}

