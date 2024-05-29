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
export declare namespace DeletedObject {
    /**
     * The type of the deleted object
     */
    enum typeObj {
        APP = "app",
        CUSTOMER = "customer",
        ENTITLEMENT = "entitlement",
        OFFERING = "offering",
        PACKAGE = "package",
        PRODUCT = "product"
    }
}
