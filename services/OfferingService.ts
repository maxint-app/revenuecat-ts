/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeletedObject } from "../models/DeletedObject.js";
import type { ListOfferings } from "../models/ListOfferings.js";
import type { Offering } from "../models/Offering.js";
import type { OfferingMetadata } from "../models/OfferingMetadata.js";
import type { CancelablePromise } from "../core/CancelablePromise.js";
import type { BaseHttpRequest } from "../core/BaseHttpRequest.js";
export class OfferingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get an offering
     * This endpoint requires the following permission(s): `project_configuration:offerings:read`.
     * @param projectId ID of the project
     * @param offeringId ID of the offering
     * @param expand Specifies which fields in the response should be expanded. Accepted values are: `package`, `package.product`.
     * @returns Offering Success
     * @throws ApiError
     */
    public getOffering(
        projectId: string,
        offeringId: string,
        expand?: Array<'package' | 'package.product'>,
    ): CancelablePromise<Offering> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/offerings/{offering_id}',
            path: {
                'project_id': projectId,
                'offering_id': offeringId,
            },
            query: {
                'expand': expand,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Access denied`,
                404: `Not found`,
                429: `The request could not be completed because the rate limiting domain for this endpoint is currently at its limit for this project.`,
                500: `Internal server error`,
                503: `Internal server error`,
            },
        });
    }
    /**
     * Update an offering
     * This endpoint requires the following permission(s): `project_configuration:offerings:read_write`.
     * @param projectId ID of the project
     * @param offeringId ID of the offering
     * @param requestBody
     * @returns Offering Success. The offering was updated
     * @throws ApiError
     */
    public updateOffering(
        projectId: string,
        offeringId: string,
        requestBody: {
            /**
             * The display name of the offering
             */
            display_name?: string;
            /**
             * Indicates if the offering is the current offering
             */
            is_current?: boolean;
            /**
             * Custom metadata of the offering
             */
            metadata?: OfferingMetadata | null;
        },
    ): CancelablePromise<Offering> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/offerings/{offering_id}',
            path: {
                'project_id': projectId,
                'offering_id': offeringId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Access denied`,
                404: `Not found`,
                409: `Conflict`,
                422: `Unprocessable entity`,
                423: `Locked`,
                429: `The request could not be completed because the rate limiting domain for this endpoint is currently at its limit for this project.`,
                500: `Internal server error`,
                503: `Internal server error`,
            },
        });
    }
    /**
     * Delete an offering and its attached packages
     * This endpoint requires the following permission(s): `project_configuration:offerings:read_write`.
     * @param projectId ID of the project
     * @param offeringId ID of the offering
     * @returns DeletedObject Success
     * @throws ApiError
     */
    public deleteOffering(
        projectId: string,
        offeringId: string,
    ): CancelablePromise<DeletedObject> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/offerings/{offering_id}',
            path: {
                'project_id': projectId,
                'offering_id': offeringId,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Access denied`,
                404: `Not found`,
                409: `Conflict`,
                422: `Unprocessable entity`,
                423: `Locked`,
                429: `The request could not be completed because the rate limiting domain for this endpoint is currently at its limit for this project.`,
                500: `Internal server error`,
                503: `Internal server error`,
            },
        });
    }
    /**
     * Get a list of offerings
     * This endpoint requires the following permission(s): `project_configuration:offerings:read`.
     * @param projectId ID of the project
     * @param startingAfter
     * @param limit
     * @param expand Specifies which fields in the response should be expanded. Accepted values are: `items.package`, `items.package.product`.
     * @returns ListOfferings Success
     * @throws ApiError
     */
    public listOfferings(
        projectId: string,
        startingAfter?: string,
        limit: number = 20,
        expand?: Array<'items.package' | 'items.package.product'>,
    ): CancelablePromise<ListOfferings> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/offerings',
            path: {
                'project_id': projectId,
            },
            query: {
                'starting_after': startingAfter,
                'limit': limit,
                'expand': expand,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Access denied`,
                404: `Not found`,
                429: `The request could not be completed because the rate limiting domain for this endpoint is currently at its limit for this project.`,
                500: `Internal server error`,
                503: `Internal server error`,
            },
        });
    }
    /**
     * Create an offering
     * This endpoint requires the following permission(s): `project_configuration:offerings:read_write`.
     * @param projectId ID of the project
     * @param requestBody
     * @returns Offering Success. The offering was created
     * @throws ApiError
     */
    public createOffering(
        projectId: string,
        requestBody: {
            /**
             * The custom identifier of the offering
             */
            lookup_key: string;
            /**
             * The display_name of the offering
             */
            display_name: string;
            /**
             * Custom metadata of the offering
             */
            metadata?: OfferingMetadata | null;
        },
    ): CancelablePromise<Offering> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/offerings',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Access denied`,
                404: `Not found`,
                409: `Conflict`,
                422: `Unprocessable entity`,
                423: `Locked`,
                429: `The request could not be completed because the rate limiting domain for this endpoint is currently at its limit for this project.`,
                500: `Internal server error`,
                503: `Internal server error`,
            },
        });
    }
}
