"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
var Error;
(function (Error) {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    let typeObj;
    (function (typeObj) {
        typeObj["ERROR"] = "error";
    })(typeObj = Error.typeObj || (Error.typeObj = {}));
    /**
     * The error type
     */
    let type;
    (function (type) {
        type["PARAMETER_ERROR"] = "parameter_error";
        type["RESOURCE_ALREADY_EXISTS"] = "resource_already_exists";
        type["RESOURCE_MISSING"] = "resource_missing";
        type["IDEMPOTENCY_ERROR"] = "idempotency_error";
        type["RATE_LIMIT_ERROR"] = "rate_limit_error";
        type["AUTHENTICATION_ERROR"] = "authentication_error";
        type["AUTHORIZATION_ERROR"] = "authorization_error";
        type["STORE_ERROR"] = "store_error";
        type["SERVER_ERROR"] = "server_error";
        type["RESOURCE_LOCKED_ERROR"] = "resource_locked_error";
        type["UNPROCESSABLE_ENTITY_ERROR"] = "unprocessable_entity_error";
        type["INVALID_REQUEST"] = "invalid_request";
    })(type = Error.type || (Error.type = {}));
})(Error || (exports.Error = Error = {}));
//# sourceMappingURL=Error.js.map