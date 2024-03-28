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
  ListProjects,
  ListProjects400Response,
  ListProjects401Response,
  ListProjects403Response,
  ListProjects404Response,
  ListProjects429Response,
  ListProjects500Response,
} from '../models/index';
import {
    ListProjectsFromJSON,
    ListProjectsToJSON,
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
} from '../models/index';

export interface ListProjectsRequest {
    startingAfter?: string;
    limit?: number;
}

/**
 * 
 */
export class ProjectApi extends runtime.BaseAPI {

    /**
     * This endpoint requires the following permission(s): `project_configuration:projects:read`.
     * Get a list of projects
     */
    async listProjectsRaw(requestParameters: ListProjectsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListProjects>> {
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
            path: `/projects`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListProjectsFromJSON(jsonValue));
    }

    /**
     * This endpoint requires the following permission(s): `project_configuration:projects:read`.
     * Get a list of projects
     */
    async listProjects(requestParameters: ListProjectsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListProjects> {
        const response = await this.listProjectsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
