export type MacAppStoreAppCreate = {
    /**
     * Mac App Store type details. Should only be used when type is mac_app_store.
     */
    mac_app_store?: {
        /**
         * The bundle ID of the app
         */
        bundle_id: string;
        /**
         * The shared secret of the app
         */
        shared_secret?: string;
    };
};
