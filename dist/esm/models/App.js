export var App;
(function (App) {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    let typeObj;
    (function (typeObj) {
        typeObj["APP"] = "app";
    })(typeObj = App.typeObj || (App.typeObj = {}));
    /**
     * The platform of the app
     */
    let type;
    (function (type) {
        type["AMAZON"] = "amazon";
        type["APP_STORE"] = "app_store";
        type["MAC_APP_STORE"] = "mac_app_store";
        type["PLAY_STORE"] = "play_store";
        type["STRIPE"] = "stripe";
    })(type = App.type || (App.type = {}));
})(App || (App = {}));
//# sourceMappingURL=App.js.map