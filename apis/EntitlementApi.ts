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


import * as runtime from '../runtime';
import type {
  AttachProductsToEntitlementRequest,
  CreateApp409Response,
  CreateApp422Response,
  CreateApp423Response,
  CreateEntitlementRequest,
  DeletedObject,
  DetachProductsFromEntitlementRequest,
  Entitlement,
  ListEntitlements,
  ListProjects400Response,
  ListProjects401Response,
  ListProjects403Response,
  ListProjects404Response,
  ListProjects429Response,
  ListProjects500Response,
  ProductsFromEntitlement,
  UpdateEntitlementRequest,
} from '../models/index';
import {
    AttachProductsToEntitlementRequestFromJSON,
    AttachProductsToEntitlementRequestToJSON,
    CreateApp409ResponseFromJSON,
    CreateApp409ResponseToJSON,
    CreateApp422ResponseFromJSON,
    CreateApp422ResponseToJSON,
    CreateApp423ResponseFromJSON,
    CreateApp423ResponseToJSON,
    CreateEntitlementRequestFromJSON,
    CreateEntitlementRequestToJSON,
    DeletedObjectFromJSON,
    DeletedObjectToJSON,
    DetachProductsFromEntitlementRequestFromJSON,
    DetachProductsFromEntitlementRequestToJSON,
    EntitlementFromJSON,
    EntitlementToJSON,
    ListEntitlementsFromJSON,
    ListEntitlementsToJSON,
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
    ProductsFromEntitlementFromJSON,
    ProductsFromEntitlementToJSON,
    UpdateEntitlementRequestFromJSON,
    UpdateEntitlementRequestToJSON,
} from '../models/index';

export interface AttachProductsToEntitlementOperationRequest {
    projectId: string;
    entitlementId: string;
    attachProductsToEntitlementRequest: AttachProductsToEntitlementRequest;
}

export interface CreateEntitlementOperationRequest {
    projectId: string;
    createEntitlementRequest: CreateEntitlementRequest;
}

export interface DeleteEntitlementRequest {
    projectId: string;
    entitlementId: string;
}

export interface DetachProductsFromEntitlementOperationRequest {
    projectId: string;
    entitlementId: string;
    detachProductsFromEntitlementRequest: DetachProductsFromEntitlementRequest;
}

export interface GetEntitlementRequest {
    projectId: string;
    entitlementId: string;
    expand?: Array<GetEntitlementExpandEnum>;
}

export interface GetProductsFromEntitlementRequest {
    projectId: string;
    entitlementId: string;
    startingAfter?: string;
    limit?: number;
}

export interface ListEntitlementsRequest {
    projectId: string;
    startingAfter?: string;
    limit?: number;
    expand?: Array<ListEntitlementsExpandEnum>;
}

export interface UpdateEntitlementOperationRequest {
    projectId: string;
    entitlementId: string;
    updateEntitlementRequest: UpdateEntitlementRequest;
}

/**
 * 
 */
export class EntitlementApi extends runtime.BaseAPI {

    /**
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * Attach a set of products to an entitlement
     */
    async attachProductsToEntitlementRaw(requestParameters: AttachProductsToEntitlementOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Entitlement>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling attachProductsToEntitlement().'
            );
        }

        if (requestParameters['entitlementId'] == null) {
            throw new runtime.RequiredError(
                'entitlementId',
                'Required parameter "entitlementId" was null or undefined when calling attachProductsToEntitlement().'
            );
        }

        if (requestParameters['attachProductsToEntitlementRequest'] == null) {
            throw new runtime.RequiredError(
                'attachProductsToEntitlementRequest',
                'Required parameter "attachProductsToEntitlementRequest" was null or undefined when calling attachProductsToEntitlement().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/projects/{project_id}/entitlements/{entitlement_id}/actions/attach_products`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"entitlement_id"}}`, encodeURIComponent(String(requestParameters['entitlementId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AttachProductsToEntitlementRequestToJSON(requestParameters['attachProductsToEntitlementRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntitlementFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * Attach a set of products to an entitlement
     */
    async attachProductsToEntitlement(requestParameters: AttachProductsToEntitlementOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Entitlement> {
        const response = await this.attachProductsToEntitlementRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * Create an entitlement
     */
    async createEntitlementRaw(requestParameters: CreateEntitlementOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Entitlement>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling createEntitlement().'
            );
        }

        if (requestParameters['createEntitlementRequest'] == null) {
            throw new runtime.RequiredError(
                'createEntitlementRequest',
                'Required parameter "createEntitlementRequest" was null or undefined when calling createEntitlement().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/projects/{project_id}/entitlements`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateEntitlementRequestToJSON(requestParameters['createEntitlementRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntitlementFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * Create an entitlement
     */
    async createEntitlement(requestParameters: CreateEntitlementOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Entitlement> {
        const response = await this.createEntitlementRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * Delete an entitlement
     */
    async deleteEntitlementRaw(requestParameters: DeleteEntitlementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeletedObject>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling deleteEntitlement().'
            );
        }

        if (requestParameters['entitlementId'] == null) {
            throw new runtime.RequiredError(
                'entitlementId',
                'Required parameter "entitlementId" was null or undefined when calling deleteEntitlement().'
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
            path: `/projects/{project_id}/entitlements/{entitlement_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"entitlement_id"}}`, encodeURIComponent(String(requestParameters['entitlementId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeletedObjectFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * Delete an entitlement
     */
    async deleteEntitlement(requestParameters: DeleteEntitlementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeletedObject> {
        const response = await this.deleteEntitlementRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * Detach a set of product from an entitlement
     */
    async detachProductsFromEntitlementRaw(requestParameters: DetachProductsFromEntitlementOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Entitlement>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling detachProductsFromEntitlement().'
            );
        }

        if (requestParameters['entitlementId'] == null) {
            throw new runtime.RequiredError(
                'entitlementId',
                'Required parameter "entitlementId" was null or undefined when calling detachProductsFromEntitlement().'
            );
        }

        if (requestParameters['detachProductsFromEntitlementRequest'] == null) {
            throw new runtime.RequiredError(
                'detachProductsFromEntitlementRequest',
                'Required parameter "detachProductsFromEntitlementRequest" was null or undefined when calling detachProductsFromEntitlement().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/projects/{project_id}/entitlements/{entitlement_id}/actions/detach_products`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"entitlement_id"}}`, encodeURIComponent(String(requestParameters['entitlementId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DetachProductsFromEntitlementRequestToJSON(requestParameters['detachProductsFromEntitlementRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntitlementFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * Detach a set of product from an entitlement
     */
    async detachProductsFromEntitlement(requestParameters: DetachProductsFromEntitlementOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Entitlement> {
        const response = await this.detachProductsFromEntitlementRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read`.
     * Get an entitlement
     */
    async getEntitlementRaw(requestParameters: GetEntitlementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Entitlement>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling getEntitlement().'
            );
        }

        if (requestParameters['entitlementId'] == null) {
            throw new runtime.RequiredError(
                'entitlementId',
                'Required parameter "entitlementId" was null or undefined when calling getEntitlement().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
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
            path: `/projects/{project_id}/entitlements/{entitlement_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"entitlement_id"}}`, encodeURIComponent(String(requestParameters['entitlementId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntitlementFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read`.
     * Get an entitlement
     */
    async getEntitlement(requestParameters: GetEntitlementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Entitlement> {
        const response = await this.getEntitlementRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read`.
     * Get a list of products attached to a given entitlement
     */
    async getProductsFromEntitlementRaw(requestParameters: GetProductsFromEntitlementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductsFromEntitlement>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling getProductsFromEntitlement().'
            );
        }

        if (requestParameters['entitlementId'] == null) {
            throw new runtime.RequiredError(
                'entitlementId',
                'Required parameter "entitlementId" was null or undefined when calling getProductsFromEntitlement().'
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
            path: `/projects/{project_id}/entitlements/{entitlement_id}/products`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"entitlement_id"}}`, encodeURIComponent(String(requestParameters['entitlementId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductsFromEntitlementFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read`.
     * Get a list of products attached to a given entitlement
     */
    async getProductsFromEntitlement(requestParameters: GetProductsFromEntitlementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductsFromEntitlement> {
        const response = await this.getProductsFromEntitlementRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read`.
     * Get a list of entitlements
     */
    async listEntitlementsRaw(requestParameters: ListEntitlementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListEntitlements>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling listEntitlements().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['startingAfter'] != null) {
            queryParameters['starting_after'] = requestParameters['startingAfter'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
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
            path: `/projects/{project_id}/entitlements`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListEntitlementsFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read`.
     * Get a list of entitlements
     */
    async listEntitlements(requestParameters: ListEntitlementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListEntitlements> {
        const response = await this.listEntitlementsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * Update an entitlement
     */
    async updateEntitlementRaw(requestParameters: UpdateEntitlementOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Entitlement>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling updateEntitlement().'
            );
        }

        if (requestParameters['entitlementId'] == null) {
            throw new runtime.RequiredError(
                'entitlementId',
                'Required parameter "entitlementId" was null or undefined when calling updateEntitlement().'
            );
        }

        if (requestParameters['updateEntitlementRequest'] == null) {
            throw new runtime.RequiredError(
                'updateEntitlementRequest',
                'Required parameter "updateEntitlementRequest" was null or undefined when calling updateEntitlement().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/projects/{project_id}/entitlements/{entitlement_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"entitlement_id"}}`, encodeURIComponent(String(requestParameters['entitlementId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateEntitlementRequestToJSON(requestParameters['updateEntitlementRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntitlementFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:entitlements:read_write`.
     * Update an entitlement
     */
    async updateEntitlement(requestParameters: UpdateEntitlementOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Entitlement> {
        const response = await this.updateEntitlementRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetEntitlementExpandEnum = {
    Product: 'product'
} as const;
export type GetEntitlementExpandEnum = typeof GetEntitlementExpandEnum[keyof typeof GetEntitlementExpandEnum];
/**
 * @export
 */
export const ListEntitlementsExpandEnum = {
    ItemsProduct: 'items.product'
} as const;
export type ListEntitlementsExpandEnum = typeof ListEntitlementsExpandEnum[keyof typeof ListEntitlementsExpandEnum];
