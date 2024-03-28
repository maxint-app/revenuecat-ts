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
  CreateApp409Response,
  CreateApp422Response,
  CreateApp423Response,
  CreateOfferingRequest,
  DeletedObject,
  ListOfferings,
  ListProjects400Response,
  ListProjects401Response,
  ListProjects403Response,
  ListProjects404Response,
  ListProjects429Response,
  ListProjects500Response,
  Offering,
  UpdateOfferingRequest,
} from '../models/index';
import {
    CreateApp409ResponseFromJSON,
    CreateApp409ResponseToJSON,
    CreateApp422ResponseFromJSON,
    CreateApp422ResponseToJSON,
    CreateApp423ResponseFromJSON,
    CreateApp423ResponseToJSON,
    CreateOfferingRequestFromJSON,
    CreateOfferingRequestToJSON,
    DeletedObjectFromJSON,
    DeletedObjectToJSON,
    ListOfferingsFromJSON,
    ListOfferingsToJSON,
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
    OfferingFromJSON,
    OfferingToJSON,
    UpdateOfferingRequestFromJSON,
    UpdateOfferingRequestToJSON,
} from '../models/index';

export interface CreateOfferingOperationRequest {
    projectId: string;
    createOfferingRequest: CreateOfferingRequest;
}

export interface DeleteOfferingRequest {
    projectId: string;
    offeringId: string;
}

export interface GetOfferingRequest {
    projectId: string;
    offeringId: string;
    expand?: Array<GetOfferingExpandEnum>;
}

export interface ListOfferingsRequest {
    projectId: string;
    startingAfter?: string;
    limit?: number;
    expand?: Array<ListOfferingsExpandEnum>;
}

export interface UpdateOfferingOperationRequest {
    projectId: string;
    offeringId: string;
    updateOfferingRequest: UpdateOfferingRequest;
}

/**
 * 
 */
export class OfferingApi extends runtime.BaseAPI {

    /**
     * This endpoint requires the following permission(s): `project_configuration:offerings:read_write`.
     * Create an offering
     */
    async createOfferingRaw(requestParameters: CreateOfferingOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Offering>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling createOffering().'
            );
        }

        if (requestParameters['createOfferingRequest'] == null) {
            throw new runtime.RequiredError(
                'createOfferingRequest',
                'Required parameter "createOfferingRequest" was null or undefined when calling createOffering().'
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
            path: `/projects/{project_id}/offerings`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateOfferingRequestToJSON(requestParameters['createOfferingRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OfferingFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:offerings:read_write`.
     * Create an offering
     */
    async createOffering(requestParameters: CreateOfferingOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Offering> {
        const response = await this.createOfferingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:offerings:read_write`.
     * Delete an offering and its attached packages
     */
    async deleteOfferingRaw(requestParameters: DeleteOfferingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeletedObject>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling deleteOffering().'
            );
        }

        if (requestParameters['offeringId'] == null) {
            throw new runtime.RequiredError(
                'offeringId',
                'Required parameter "offeringId" was null or undefined when calling deleteOffering().'
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
            path: `/projects/{project_id}/offerings/{offering_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"offering_id"}}`, encodeURIComponent(String(requestParameters['offeringId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeletedObjectFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:offerings:read_write`.
     * Delete an offering and its attached packages
     */
    async deleteOffering(requestParameters: DeleteOfferingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeletedObject> {
        const response = await this.deleteOfferingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:offerings:read`.
     * Get an offering
     */
    async getOfferingRaw(requestParameters: GetOfferingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Offering>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling getOffering().'
            );
        }

        if (requestParameters['offeringId'] == null) {
            throw new runtime.RequiredError(
                'offeringId',
                'Required parameter "offeringId" was null or undefined when calling getOffering().'
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
            path: `/projects/{project_id}/offerings/{offering_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"offering_id"}}`, encodeURIComponent(String(requestParameters['offeringId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OfferingFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:offerings:read`.
     * Get an offering
     */
    async getOffering(requestParameters: GetOfferingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Offering> {
        const response = await this.getOfferingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:offerings:read`.
     * Get a list of offerings
     */
    async listOfferingsRaw(requestParameters: ListOfferingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListOfferings>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling listOfferings().'
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
            path: `/projects/{project_id}/offerings`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListOfferingsFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:offerings:read`.
     * Get a list of offerings
     */
    async listOfferings(requestParameters: ListOfferingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListOfferings> {
        const response = await this.listOfferingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:offerings:read_write`.
     * Update an offering
     */
    async updateOfferingRaw(requestParameters: UpdateOfferingOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Offering>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling updateOffering().'
            );
        }

        if (requestParameters['offeringId'] == null) {
            throw new runtime.RequiredError(
                'offeringId',
                'Required parameter "offeringId" was null or undefined when calling updateOffering().'
            );
        }

        if (requestParameters['updateOfferingRequest'] == null) {
            throw new runtime.RequiredError(
                'updateOfferingRequest',
                'Required parameter "updateOfferingRequest" was null or undefined when calling updateOffering().'
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
            path: `/projects/{project_id}/offerings/{offering_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"offering_id"}}`, encodeURIComponent(String(requestParameters['offeringId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateOfferingRequestToJSON(requestParameters['updateOfferingRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OfferingFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:offerings:read_write`.
     * Update an offering
     */
    async updateOffering(requestParameters: UpdateOfferingOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Offering> {
        const response = await this.updateOfferingRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetOfferingExpandEnum = {
    Package: 'package',
    PackageProduct: 'package.product'
} as const;
export type GetOfferingExpandEnum = typeof GetOfferingExpandEnum[keyof typeof GetOfferingExpandEnum];
/**
 * @export
 */
export const ListOfferingsExpandEnum = {
    Package: 'items.package',
    PackageProduct: 'items.package.product'
} as const;
export type ListOfferingsExpandEnum = typeof ListOfferingsExpandEnum[keyof typeof ListOfferingsExpandEnum];