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
  AttachProductsToPackageRequest,
  CreateApp409Response,
  CreateApp422Response,
  CreateApp423Response,
  CreatePackagesRequest,
  DeletedObject,
  DetachProductsFromPackageRequest,
  ListPackages,
  ListProjects400Response,
  ListProjects401Response,
  ListProjects403Response,
  ListProjects404Response,
  ListProjects429Response,
  ListProjects500Response,
  Package,
  ProductsFromPackage,
  UpdatePackageRequest,
} from "../models/index.ts";
import {
    AttachProductsToPackageRequestFromJSON,
    AttachProductsToPackageRequestToJSON,
    CreateApp409ResponseFromJSON,
    CreateApp409ResponseToJSON,
    CreateApp422ResponseFromJSON,
    CreateApp422ResponseToJSON,
    CreateApp423ResponseFromJSON,
    CreateApp423ResponseToJSON,
    CreatePackagesRequestFromJSON,
    CreatePackagesRequestToJSON,
    DeletedObjectFromJSON,
    DeletedObjectToJSON,
    DetachProductsFromPackageRequestFromJSON,
    DetachProductsFromPackageRequestToJSON,
    ListPackagesFromJSON,
    ListPackagesToJSON,
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
    PackageFromJSON,
    PackageToJSON,
    ProductsFromPackageFromJSON,
    ProductsFromPackageToJSON,
    UpdatePackageRequestFromJSON,
    UpdatePackageRequestToJSON,
} from "../models/index.ts";

export interface AttachProductsToPackageOperationRequest {
    projectId: string;
    packageId: string;
    attachProductsToPackageRequest: AttachProductsToPackageRequest;
}

export interface CreatePackagesOperationRequest {
    projectId: string;
    offeringId: string;
    createPackagesRequest: CreatePackagesRequest;
}

export interface DeletePackageFromOfferingRequest {
    projectId: string;
    packageId: string;
}

export interface DetachProductsFromPackageOperationRequest {
    projectId: string;
    packageId: string;
    detachProductsFromPackageRequest: DetachProductsFromPackageRequest;
}

export interface GetPackageRequest {
    projectId: string;
    packageId: string;
    expand?: Array<GetPackageExpandEnum>;
}

export interface GetProductsFromPackageRequest {
    projectId: string;
    packageId: string;
    startingAfter?: string;
    limit?: number;
}

export interface ListPackagesRequest {
    projectId: string;
    offeringId: string;
    startingAfter?: string;
    limit?: number;
    expand?: Array<ListPackagesExpandEnum>;
}

export interface UpdatePackageOperationRequest {
    projectId: string;
    packageId: string;
    updatePackageRequest: UpdatePackageRequest;
}

/**
 * 
 */
export class PackageApi extends runtime.BaseAPI {

    /**
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * Attach a set of products to a package
     */
    async attachProductsToPackageRaw(requestParameters: AttachProductsToPackageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Package>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling attachProductsToPackage().'
            );
        }

        if (requestParameters['packageId'] == null) {
            throw new runtime.RequiredError(
                'packageId',
                'Required parameter "packageId" was null or undefined when calling attachProductsToPackage().'
            );
        }

        if (requestParameters['attachProductsToPackageRequest'] == null) {
            throw new runtime.RequiredError(
                'attachProductsToPackageRequest',
                'Required parameter "attachProductsToPackageRequest" was null or undefined when calling attachProductsToPackage().'
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
            path: `/projects/{project_id}/packages/{package_id}/actions/attach_products`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"package_id"}}`, encodeURIComponent(String(requestParameters['packageId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AttachProductsToPackageRequestToJSON(requestParameters['attachProductsToPackageRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PackageFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * Attach a set of products to a package
     */
    async attachProductsToPackage(requestParameters: AttachProductsToPackageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Package> {
        const response = await this.attachProductsToPackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * Create a package
     */
    async createPackagesRaw(requestParameters: CreatePackagesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Package>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling createPackages().'
            );
        }

        if (requestParameters['offeringId'] == null) {
            throw new runtime.RequiredError(
                'offeringId',
                'Required parameter "offeringId" was null or undefined when calling createPackages().'
            );
        }

        if (requestParameters['createPackagesRequest'] == null) {
            throw new runtime.RequiredError(
                'createPackagesRequest',
                'Required parameter "createPackagesRequest" was null or undefined when calling createPackages().'
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
            path: `/projects/{project_id}/offerings/{offering_id}/packages`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"offering_id"}}`, encodeURIComponent(String(requestParameters['offeringId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreatePackagesRequestToJSON(requestParameters['createPackagesRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PackageFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * Create a package
     */
    async createPackages(requestParameters: CreatePackagesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Package> {
        const response = await this.createPackagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * Delete a package
     */
    async deletePackageFromOfferingRaw(requestParameters: DeletePackageFromOfferingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeletedObject>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling deletePackageFromOffering().'
            );
        }

        if (requestParameters['packageId'] == null) {
            throw new runtime.RequiredError(
                'packageId',
                'Required parameter "packageId" was null or undefined when calling deletePackageFromOffering().'
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
            path: `/projects/{project_id}/packages/{package_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"package_id"}}`, encodeURIComponent(String(requestParameters['packageId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeletedObjectFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * Delete a package
     */
    async deletePackageFromOffering(requestParameters: DeletePackageFromOfferingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeletedObject> {
        const response = await this.deletePackageFromOfferingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * Detach a set of products from a package
     */
    async detachProductsFromPackageRaw(requestParameters: DetachProductsFromPackageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Package>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling detachProductsFromPackage().'
            );
        }

        if (requestParameters['packageId'] == null) {
            throw new runtime.RequiredError(
                'packageId',
                'Required parameter "packageId" was null or undefined when calling detachProductsFromPackage().'
            );
        }

        if (requestParameters['detachProductsFromPackageRequest'] == null) {
            throw new runtime.RequiredError(
                'detachProductsFromPackageRequest',
                'Required parameter "detachProductsFromPackageRequest" was null or undefined when calling detachProductsFromPackage().'
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
            path: `/projects/{project_id}/packages/{package_id}/actions/detach_products`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"package_id"}}`, encodeURIComponent(String(requestParameters['packageId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DetachProductsFromPackageRequestToJSON(requestParameters['detachProductsFromPackageRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PackageFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * Detach a set of products from a package
     */
    async detachProductsFromPackage(requestParameters: DetachProductsFromPackageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Package> {
        const response = await this.detachProductsFromPackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:packages:read`.
     * Get a package
     */
    async getPackageRaw(requestParameters: GetPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Package>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling getPackage().'
            );
        }

        if (requestParameters['packageId'] == null) {
            throw new runtime.RequiredError(
                'packageId',
                'Required parameter "packageId" was null or undefined when calling getPackage().'
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
            path: `/projects/{project_id}/packages/{package_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"package_id"}}`, encodeURIComponent(String(requestParameters['packageId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PackageFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:packages:read`.
     * Get a package
     */
    async getPackage(requestParameters: GetPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Package> {
        const response = await this.getPackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:packages:read`.
     * Get a list of products attached to a given package of an offering
     */
    async getProductsFromPackageRaw(requestParameters: GetProductsFromPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductsFromPackage>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling getProductsFromPackage().'
            );
        }

        if (requestParameters['packageId'] == null) {
            throw new runtime.RequiredError(
                'packageId',
                'Required parameter "packageId" was null or undefined when calling getProductsFromPackage().'
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
            path: `/projects/{project_id}/packages/{package_id}/products`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"package_id"}}`, encodeURIComponent(String(requestParameters['packageId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductsFromPackageFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:packages:read`.
     * Get a list of products attached to a given package of an offering
     */
    async getProductsFromPackage(requestParameters: GetProductsFromPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductsFromPackage> {
        const response = await this.getProductsFromPackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:packages:read`.
     * Get a list of packages in an offering
     */
    async listPackagesRaw(requestParameters: ListPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListPackages>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling listPackages().'
            );
        }

        if (requestParameters['offeringId'] == null) {
            throw new runtime.RequiredError(
                'offeringId',
                'Required parameter "offeringId" was null or undefined when calling listPackages().'
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
            path: `/projects/{project_id}/offerings/{offering_id}/packages`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"offering_id"}}`, encodeURIComponent(String(requestParameters['offeringId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListPackagesFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:packages:read`.
     * Get a list of packages in an offering
     */
    async listPackages(requestParameters: ListPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListPackages> {
        const response = await this.listPackagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * Update a package
     */
    async updatePackageRaw(requestParameters: UpdatePackageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Package>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling updatePackage().'
            );
        }

        if (requestParameters['packageId'] == null) {
            throw new runtime.RequiredError(
                'packageId',
                'Required parameter "packageId" was null or undefined when calling updatePackage().'
            );
        }

        if (requestParameters['updatePackageRequest'] == null) {
            throw new runtime.RequiredError(
                'updatePackageRequest',
                'Required parameter "updatePackageRequest" was null or undefined when calling updatePackage().'
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
            path: `/projects/{project_id}/packages/{package_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"package_id"}}`, encodeURIComponent(String(requestParameters['packageId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdatePackageRequestToJSON(requestParameters['updatePackageRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PackageFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:packages:read_write`.
     * Update a package
     */
    async updatePackage(requestParameters: UpdatePackageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Package> {
        const response = await this.updatePackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetPackageExpandEnum = {
    Product: 'product'
} as const;
export type GetPackageExpandEnum = typeof GetPackageExpandEnum[keyof typeof GetPackageExpandEnum];
/**
 * @export
 */
export const ListPackagesExpandEnum = {
    ItemsProduct: 'items.product'
} as const;
export type ListPackagesExpandEnum = typeof ListPackagesExpandEnum[keyof typeof ListPackagesExpandEnum];
