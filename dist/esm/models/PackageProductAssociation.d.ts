import type { EligibilityCriteria } from "./EligibilityCriteria.js";
import type { Product } from "./Product.js";
export type PackageProductAssociation = {
    product: Product;
    eligibility_criteria: EligibilityCriteria;
};
