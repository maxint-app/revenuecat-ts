export type PlayStoreAppCreate = {
    /**
     * Play Store type details. Should only be used when type is play_store.
     */
    play_store?: {
        /**
         * The package name of the app
         */
        package_name: string;
    };
};
