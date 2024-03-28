/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmazonApp } from "./AmazonApp.ts";
import type { AppStoreApp } from "./AppStoreApp.ts";
import type { MacAppStoreApp } from "./MacAppStoreApp.ts";
import type { PlayStoreApp } from "./PlayStoreApp.ts";
export type App = ({
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: App.object;
    /**
     * The id of the app
     */
    id: string;
    /**
     * The name of the app
     */
    name: string;
    /**
     * The date when the app was created in ms since epoch
     */
    created_at: number;
    /**
     * The platform of the app
     */
    type: App.type;
    /**
     * The id of the project
     */
    project_id: string;
} & AmazonApp & AppStoreApp & MacAppStoreApp & PlayStoreApp);
export namespace App {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        APP = 'app',
    }
    /**
     * The platform of the app
     */
    export enum type {
        AMAZON = 'amazon',
        APP_STORE = 'app_store',
        MAC_APP_STORE = 'mac_app_store',
        PLAY_STORE = 'play_store',
        STRIPE = 'stripe',
    }
}

