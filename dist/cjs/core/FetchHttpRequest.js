"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchHttpRequest = void 0;
const BaseHttpRequest_js_1 = require("./BaseHttpRequest.js");
const request_js_1 = require("./request.js");
class FetchHttpRequest extends BaseHttpRequest_js_1.BaseHttpRequest {
    constructor(config) {
        super(config);
    }
    /**
     * Request method
     * @param options The request options from the service
     * @returns CancelablePromise<T>
     * @throws ApiError
     */
    request(options) {
        return (0, request_js_1.request)(this.config, options);
    }
}
exports.FetchHttpRequest = FetchHttpRequest;
//# sourceMappingURL=FetchHttpRequest.js.map