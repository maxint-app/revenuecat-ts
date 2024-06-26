import type { OfferingMetadata } from "./OfferingMetadata.js";
import type { Package } from "./Package.js";
export type Offering = {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: Offering.typeObj;
    /**
     * The id of the offering
     */
    id: string;
    /**
     * A custom identifier of the entitlement
     */
    lookup_key: string;
    /**
     * The display name of the offering
     */
    display_name: string;
    /**
     * Indicates if the offering is the current offering
     */
    is_current: boolean;
    /**
     * The date the offering was created at in ms since epoch
     */
    created_at: number;
    /**
     * ID of the project to which the offering belongs
     */
    project_id: string;
    /**
     * Custom metadata of the offering
     */
    metadata?: OfferingMetadata | null;
    packages?: {
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: Offering.typeObj;
        /**
         * Details about each object.
         */
        items: Array<Package>;
        /**
         * URL to access the next page of the Offering's packages. If not present / null, there is no next page
         */
        next_page: string | null;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    } | null;
};
export declare namespace Offering {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    enum typeObj {
        OFFERING = "offering"
    }
}
