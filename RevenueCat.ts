/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from "./core/BaseHttpRequest.ts";
import type { OpenAPIConfig } from "./core/OpenAPI.ts";
import { FetchHttpRequest } from "./core/FetchHttpRequest.ts";
import { AppService } from "./services/AppService.ts";
import { ChartsMetricsService } from "./services/ChartsMetricsService.ts";
import { CustomerService } from "./services/CustomerService.ts";
import { EntitlementService } from "./services/EntitlementService.ts";
import { InvoiceService } from "./services/InvoiceService.ts";
import { OfferingService } from "./services/OfferingService.ts";
import { PackageService } from "./services/PackageService.ts";
import { ProductService } from "./services/ProductService.ts";
import { ProjectService } from "./services/ProjectService.ts";
import { SubscriptionService } from "./services/SubscriptionService.ts";
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class RevenueCat {
    public readonly app: AppService;
    public readonly chartsMetrics: ChartsMetricsService;
    public readonly customer: CustomerService;
    public readonly entitlement: EntitlementService;
    public readonly invoice: InvoiceService;
    public readonly offering: OfferingService;
    public readonly package: PackageService;
    public readonly product: ProductService;
    public readonly project: ProjectService;
    public readonly subscription: SubscriptionService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
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
        this.app = new AppService(this.request);
        this.chartsMetrics = new ChartsMetricsService(this.request);
        this.customer = new CustomerService(this.request);
        this.entitlement = new EntitlementService(this.request);
        this.invoice = new InvoiceService(this.request);
        this.offering = new OfferingService(this.request);
        this.package = new PackageService(this.request);
        this.product = new ProductService(this.request);
        this.project = new ProjectService(this.request);
        this.subscription = new SubscriptionService(this.request);
    }
}

