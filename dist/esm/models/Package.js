export var Package;
(function (Package) {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    let typeObj;
    (function (typeObj) {
        typeObj["PACKAGE"] = "package";
    })(typeObj = Package.typeObj || (Package.typeObj = {}));
})(Package || (Package = {}));
//# sourceMappingURL=Package.js.map