export type Error = {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: Error.typeObj;
    /**
     * The error type
     */
    type: Error.type;
    /**
     * If the error is parameter-specific, the parameter related to the error
     */
    param?: string | null;
    /**
     * A URL to more information about the error reported
     */
    doc_url?: string;
    /**
     * A message describing the reason of the error
     */
    message: string;
    /**
     * Indicates if the error is retryable or not
     */
    retryable: boolean;
    /**
     * The ms the client should wait before retrying the request. Only present for retryable errors.
     */
    backoff_ms?: number | null;
};
export declare namespace Error {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    enum typeObj {
        ERROR = "error"
    }
    /**
     * The error type
     */
    enum type {
        PARAMETER_ERROR = "parameter_error",
        RESOURCE_ALREADY_EXISTS = "resource_already_exists",
        RESOURCE_MISSING = "resource_missing",
        IDEMPOTENCY_ERROR = "idempotency_error",
        RATE_LIMIT_ERROR = "rate_limit_error",
        AUTHENTICATION_ERROR = "authentication_error",
        AUTHORIZATION_ERROR = "authorization_error",
        STORE_ERROR = "store_error",
        SERVER_ERROR = "server_error",
        RESOURCE_LOCKED_ERROR = "resource_locked_error",
        UNPROCESSABLE_ENTITY_ERROR = "unprocessable_entity_error",
        INVALID_REQUEST = "invalid_request"
    }
}
