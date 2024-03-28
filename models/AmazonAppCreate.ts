/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmazonAppCreate = {
    /**
     * Amazon type details. Should only be used when type is amazon.
     */
    amazon?: {
        /**
         * The package name of the app
         */
        package_name: string;
        /**
         * Your Amazon Developer Identity Shared Key
         */
        shared_secret?: string;
    };
};

