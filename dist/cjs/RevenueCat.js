"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevenueCat = void 0;
const FetchHttpRequest_js_1 = require("./core/FetchHttpRequest.js");
const AppService_js_1 = require("./services/AppService.js");
const ChartsMetricsService_js_1 = require("./services/ChartsMetricsService.js");
const CustomerService_js_1 = require("./services/CustomerService.js");
const EntitlementService_js_1 = require("./services/EntitlementService.js");
const InvoiceService_js_1 = require("./services/InvoiceService.js");
const OfferingService_js_1 = require("./services/OfferingService.js");
const PackageService_js_1 = require("./services/PackageService.js");
const ProductService_js_1 = require("./services/ProductService.js");
const ProjectService_js_1 = require("./services/ProjectService.js");
const SubscriptionService_js_1 = require("./services/SubscriptionService.js");
class RevenueCat {
    app;
    chartsMetrics;
    customer;
    entitlement;
    invoice;
    offering;
    package;
    product;
    project;
    subscription;
    request;
    constructor(config, HttpRequest = FetchHttpRequest_js_1.FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://api.revenuecat.com/v2',
            VERSION: config?.VERSION ?? '2.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.app = new AppService_js_1.AppService(this.request);
        this.chartsMetrics = new ChartsMetricsService_js_1.ChartsMetricsService(this.request);
        this.customer = new CustomerService_js_1.CustomerService(this.request);
        this.entitlement = new EntitlementService_js_1.EntitlementService(this.request);
        this.invoice = new InvoiceService_js_1.InvoiceService(this.request);
        this.offering = new OfferingService_js_1.OfferingService(this.request);
        this.package = new PackageService_js_1.PackageService(this.request);
        this.product = new ProductService_js_1.ProductService(this.request);
        this.project = new ProjectService_js_1.ProjectService(this.request);
        this.subscription = new SubscriptionService_js_1.SubscriptionService(this.request);
    }
}
exports.RevenueCat = RevenueCat;
//# sourceMappingURL=RevenueCat.js.map