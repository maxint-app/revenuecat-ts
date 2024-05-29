export type AppStoreAppCreate = {
    /**
     * App Store type details. Should only be used when type is app_store.
     */
    app_store?: {
        /**
         * The bundle ID of the app
         */
        bundle_id: string;
        /**
         * The shared secret of the app
         */
        shared_secret?: string;
        /**
         * PKCS /#8 In App Key downloaded from App Store Connect in PEM format. Copy the contents
         * of the file in this field. See instructions on how to get it in:
         * https://www.revenuecat.com/docs/in-app-purchase-key-configuration
         *
         */
        subscription_private_key: string;
        /**
         * In App Key id. The ID of the downloaded in app key. You can get it from App Store Connect
         */
        subscription_key_id: string;
        /**
         * The key Issuer id. See instructions on how to obtain this in:
         * https://www.revenuecat.com/docs/in-app-purchase-key-configuration#3-providing-the-issuer-id-to-revenuecat
         *
         */
        subscription_key_issuer: string;
    };
};
