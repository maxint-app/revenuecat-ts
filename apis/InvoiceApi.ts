/* tslint:disable */
/* eslint-disable */
/**
 * Developer API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from "../runtime.ts";
import type {
  ListCustomerInvoices,
  ListProjects400Response,
  ListProjects401Response,
  ListProjects403Response,
  ListProjects404Response,
  ListProjects429Response,
  ListProjects500Response,
} from "../models/index.ts";
import {
    ListCustomerInvoicesFromJSON,
    ListCustomerInvoicesToJSON,
    ListProjects400ResponseFromJSON,
    ListProjects400ResponseToJSON,
    ListProjects401ResponseFromJSON,
    ListProjects401ResponseToJSON,
    ListProjects403ResponseFromJSON,
    ListProjects403ResponseToJSON,
    ListProjects404ResponseFromJSON,
    ListProjects404ResponseToJSON,
    ListProjects429ResponseFromJSON,
    ListProjects429ResponseToJSON,
    ListProjects500ResponseFromJSON,
    ListProjects500ResponseToJSON,
} from "../models/index.ts";

export interface GetInvoiceRequest {
    projectId: string;
    customerId: string;
    invoiceId: string;
}

export interface ListCustomerInvoicesRequest {
    projectId: string;
    customerId: string;
    startingAfter?: string;
    limit?: number;
}

/**
 * 
 */
export class InvoiceApi extends runtime.BaseAPI {

    /**
     * This endpoint requires the following permission(s): `customer_information:invoices:read`.
     * Get an invoice
     */
    async getInvoiceRaw(requestParameters: GetInvoiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling getInvoice().'
            );
        }

        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling getInvoice().'
            );
        }

        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling getInvoice().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/projects/{project_id}/customers/{customer_id}/invoices/{invoice_id}/file`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"customer_id"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"invoice_id"}}`, encodeURIComponent(String(requestParameters['invoiceId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint requires the following permission(s): `customer_information:invoices:read`.
     * Get an invoice
     */
    async getInvoice(requestParameters: GetInvoiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getInvoiceRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint requires the following permission(s): `customer_information:invoices:read`.
     * Get a list of the customer\'s invoices
     */
    async listCustomerInvoicesRaw(requestParameters: ListCustomerInvoicesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListCustomerInvoices>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling listCustomerInvoices().'
            );
        }

        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling listCustomerInvoices().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['startingAfter'] != null) {
            queryParameters['starting_after'] = requestParameters['startingAfter'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/projects/{project_id}/customers/{customer_id}/invoices`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"customer_id"}}`, encodeURIComponent(String(requestParameters['customerId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListCustomerInvoicesFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `customer_information:invoices:read`.
     * Get a list of the customer\'s invoices
     */
    async listCustomerInvoices(requestParameters: ListCustomerInvoicesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListCustomerInvoices> {
        const response = await this.listCustomerInvoicesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
