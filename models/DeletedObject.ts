/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DeletedObject = {
    /**
     * The type of the deleted object
     */
    object: DeletedObject.typeObj;
    /**
     * The ID of the deleted object
     */
    id: string;
    /**
     * The date when the object was deleted in ms since epoch
     */
    deleted_at: number;
};
export namespace DeletedObject {
    /**
     * The type of the deleted object
     */
    export enum typeObj {
        APP = 'app',
        CUSTOMER = 'customer',
        ENTITLEMENT = 'entitlement',
        OFFERING = 'offering',
        PACKAGE = 'package',
        PRODUCT = 'product',
    }
}

