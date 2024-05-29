"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverviewMetric = void 0;
var OverviewMetric;
(function (OverviewMetric) {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    let typeObj;
    (function (typeObj) {
        typeObj["OVERVIEW_METRIC"] = "overview_metric";
    })(typeObj = OverviewMetric.typeObj || (OverviewMetric.typeObj = {}));
    /**
     * Length of time during which metric data is collected in ISO 8601 format. Zero period means metric data was collected now
     */
    let period;
    (function (period) {
        period["P0D"] = "P0D";
        period["P28D"] = "P28D";
    })(period = OverviewMetric.period || (OverviewMetric.period = {}));
})(OverviewMetric || (exports.OverviewMetric = OverviewMetric = {}));
//# sourceMappingURL=OverviewMetric.js.map