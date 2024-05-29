/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmazonAppCreate } from "./AmazonAppCreate.js";
import type { AppStoreAppCreate } from "./AppStoreAppCreate.js";
import type { MacAppStoreAppCreate } from "./MacAppStoreAppCreate.js";
import type { PlayStoreAppCreate } from "./PlayStoreAppCreate.js";
export type AppCreate = ({
    /**
     * The name of the app
     */
    name: string;
    /**
     * The platform of the app.
     * Mac App Store is disabled by default. See [Legacy Mac Apps](https://www.revenuecat.com/docs/legacy-mac-apps) for more details.
     *
     */
    type: AppCreate.type;
} & AmazonAppCreate & AppStoreAppCreate & MacAppStoreAppCreate & PlayStoreAppCreate);
export namespace AppCreate {
    /**
     * The platform of the app.
     * Mac App Store is disabled by default. See [Legacy Mac Apps](https://www.revenuecat.com/docs/legacy-mac-apps) for more details.
     *
     */
    export enum type {
        AMAZON = 'amazon',
        APP_STORE = 'app_store',
        MAC_APP_STORE = 'mac_app_store',
        PLAY_STORE = 'play_store',
        STRIPE = 'stripe',
    }
}

