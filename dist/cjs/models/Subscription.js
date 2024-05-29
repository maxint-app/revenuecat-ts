"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
var Subscription;
(function (Subscription) {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    let typeObj;
    (function (typeObj) {
        typeObj["SUBSCRIPTION"] = "subscription";
    })(typeObj = Subscription.typeObj || (Subscription.typeObj = {}));
    /**
     * The auto renewal status of a subscription
     */
    let auto_renewal_status;
    (function (auto_renewal_status) {
        auto_renewal_status["WILL_RENEW"] = "will_renew";
        auto_renewal_status["WILL_NOT_RENEW"] = "will_not_renew";
        auto_renewal_status["WILL_CHANGE_PRODUCT"] = "will_change_product";
        auto_renewal_status["WILL_PAUSE"] = "will_pause";
        auto_renewal_status["REQUIRES_PRICE_INCREASE_CONSENT"] = "requires_price_increase_consent";
        auto_renewal_status["HAS_ALREADY_RENEWED"] = "has_already_renewed";
    })(auto_renewal_status = Subscription.auto_renewal_status || (Subscription.auto_renewal_status = {}));
    /**
     * The status of a subscription
     */
    let status;
    (function (status) {
        status["TRIALING"] = "trialing";
        status["ACTIVE"] = "active";
        status["EXPIRED"] = "expired";
        status["IN_GRACE_PERIOD"] = "in_grace_period";
        status["IN_BILLING_RETRY"] = "in_billing_retry";
        status["PAUSED"] = "paused";
        status["UNKNOWN"] = "unknown";
    })(status = Subscription.status || (Subscription.status = {}));
    /**
     * Store the subscription belongs to
     */
    let store;
    (function (store) {
        store["AMAZON"] = "amazon";
        store["APP_STORE"] = "app_store";
        store["MAC_APP_STORE"] = "mac_app_store";
        store["PLAY_STORE"] = "play_store";
        store["PROMOTIONAL"] = "promotional";
        store["STRIPE"] = "stripe";
        store["RC_BILLING"] = "rc_billing";
    })(store = Subscription.store || (Subscription.store = {}));
})(Subscription || (exports.Subscription = Subscription = {}));
//# sourceMappingURL=Subscription.js.map