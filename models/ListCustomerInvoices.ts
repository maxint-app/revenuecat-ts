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

import { mapValues } from '../runtime';
import type { Invoice } from './Invoice';
import {
    InvoiceFromJSON,
    InvoiceFromJSONTyped,
    InvoiceToJSON,
} from './Invoice';

/**
 * 
 * @export
 * @interface ListCustomerInvoices
 */
export interface ListCustomerInvoices {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     * @type {string}
     * @memberof ListCustomerInvoices
     */
    object: ListCustomerInvoicesObjectEnum;
    /**
     * Details about each object.
     * @type {Array<Invoice>}
     * @memberof ListCustomerInvoices
     */
    items: Array<Invoice>;
    /**
     * URL to access the next page of the customer's invoice. If not present / null, there is no next page
     * @type {string}
     * @memberof ListCustomerInvoices
     */
    nextPage: string | null;
    /**
     * The URL where this list can be accessed.
     * @type {string}
     * @memberof ListCustomerInvoices
     */
    url: string;
}


/**
 * @export
 */
export const ListCustomerInvoicesObjectEnum = {
    List: 'list'
} as const;
export type ListCustomerInvoicesObjectEnum = typeof ListCustomerInvoicesObjectEnum[keyof typeof ListCustomerInvoicesObjectEnum];


/**
 * Check if a given object implements the ListCustomerInvoices interface.
 */
export function instanceOfListCustomerInvoices(value: object): boolean {
    if (!('object' in value)) return false;
    if (!('items' in value)) return false;
    if (!('nextPage' in value)) return false;
    if (!('url' in value)) return false;
    return true;
}

export function ListCustomerInvoicesFromJSON(json: any): ListCustomerInvoices {
    return ListCustomerInvoicesFromJSONTyped(json, false);
}

export function ListCustomerInvoicesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListCustomerInvoices {
    if (json == null) {
        return json;
    }
    return {
        
        'object': json['object'],
        'items': ((json['items'] as Array<any>).map(InvoiceFromJSON)),
        'nextPage': json['next_page'],
        'url': json['url'],
    };
}

export function ListCustomerInvoicesToJSON(value?: ListCustomerInvoices | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'object': value['object'],
        'items': ((value['items'] as Array<any>).map(InvoiceToJSON)),
        'next_page': value['nextPage'],
        'url': value['url'],
    };
}

