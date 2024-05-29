export var Invoice;
(function (Invoice) {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    let typeObj;
    (function (typeObj) {
        typeObj["INVOICE"] = "invoice";
    })(typeObj = Invoice.typeObj || (Invoice.typeObj = {}));
})(Invoice || (Invoice = {}));
//# sourceMappingURL=Invoice.js.map