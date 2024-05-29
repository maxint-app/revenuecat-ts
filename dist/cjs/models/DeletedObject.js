"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletedObject = void 0;
var DeletedObject;
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
})(DeletedObject || (exports.DeletedObject = DeletedObject = {}));
//# sourceMappingURL=DeletedObject.js.map