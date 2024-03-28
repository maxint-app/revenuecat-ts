/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from "./Currency.ts";
export type MonetaryAmount = {
    currency: Currency;
    /**
     * Total revenue generated (excluding taxes and commission)
     */
    gross: number;
    /**
     * Store commission or payment processor fees deducted from gross revenue (if any)
     */
    commission?: number;
    /**
     * Estimated taxes deducted from gross revenue
     */
    tax: number;
    /**
     * Net revenue after store commission / fees and taxes
     */
    proceeds: number;
};

