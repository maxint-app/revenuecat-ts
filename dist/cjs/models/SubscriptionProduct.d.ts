export type SubscriptionProduct = {
    /**
     * The duration of the subscription in ISO-8601 standard
     */
    duration: string | null;
    /**
     * The duration of the subscription's grace period in ISO-8601 standard
     */
    grace_period_duration: string | null;
    /**
     * The duration of the subcription's trial period in ISO-8601 standard
     */
    trial_duration: string | null;
};
