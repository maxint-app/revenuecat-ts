export var AppCreate;
(function (AppCreate) {
    /**
     * The platform of the app.
     * Mac App Store is disabled by default. See [Legacy Mac Apps](https://www.revenuecat.com/docs/legacy-mac-apps) for more details.
     *
     */
    let type;
    (function (type) {
        type["AMAZON"] = "amazon";
        type["APP_STORE"] = "app_store";
        type["MAC_APP_STORE"] = "mac_app_store";
        type["PLAY_STORE"] = "play_store";
        type["STRIPE"] = "stripe";
    })(type = AppCreate.type || (AppCreate.type = {}));
})(AppCreate || (AppCreate = {}));
//# sourceMappingURL=AppCreate.js.map