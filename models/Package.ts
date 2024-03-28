/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Package = {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: Package.object;
    /**
     * The id of the package
     */
    id: string;
    /**
     * The lookup_key of the package
     */
    lookup_key: string;
    /**
     * The display name of the package
     */
    display_name: string;
    /**
     * The position of the package within the offering
     */
    position: number | null;
    /**
     * The date the package was created at in ms since epoch
     */
    created_at: number;
    products?: any;
};
export namespace Package {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        PACKAGE = 'package',
    }
}

