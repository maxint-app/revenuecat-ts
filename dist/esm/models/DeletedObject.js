export var DeletedObject;
(function (DeletedObject) {
    /**
     * The type of the deleted object
     */
    let typeObj;
    (function (typeObj) {
        typeObj["APP"] = "app";
        typeObj["CUSTOMER"] = "customer";
        typeObj["ENTITLEMENT"] = "entitlement";
        typeObj["OFFERING"] = "offering";
        typeObj["PACKAGE"] = "package";
        typeObj["PRODUCT"] = "product";
    })(typeObj = DeletedObject.typeObj || (DeletedObject.typeObj = {}));
})(DeletedObject || (DeletedObject = {}));
//# sourceMappingURL=DeletedObject.js.map