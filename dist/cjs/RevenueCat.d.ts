import type { BaseHttpRequest } from "./core/BaseHttpRequest.js";
import type { OpenAPIConfig } from "./core/OpenAPI.js";
import { AppService } from "./services/AppService.js";
import { ChartsMetricsService } from "./services/ChartsMetricsService.js";
import { CustomerService } from "./services/CustomerService.js";
import { EntitlementService } from "./services/EntitlementService.js";
import { InvoiceService } from "./services/InvoiceService.js";
import { OfferingService } from "./services/OfferingService.js";
import { PackageService } from "./services/PackageService.js";
import { ProductService } from "./services/ProductService.js";
import { ProjectService } from "./services/ProjectService.js";
import { SubscriptionService } from "./services/SubscriptionService.js";
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export declare class RevenueCat {
    readonly app: AppService;
    readonly chartsMetrics: ChartsMetricsService;
    readonly customer: CustomerService;
    readonly entitlement: EntitlementService;
    readonly invoice: InvoiceService;
    readonly offering: OfferingService;
    readonly package: PackageService;
    readonly product: ProductService;
    readonly project: ProjectService;
    readonly subscription: SubscriptionService;
    readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest?: HttpRequestConstructor);
}
export {};
