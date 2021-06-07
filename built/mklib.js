System.register("MkShape", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("MkArc", [], function (exports_2, context_2) {
    "use strict";
    var MkArc;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            MkArc = (function () {
                function MkArc() {
                }
                MkArc.prototype.Length = function () {
                    return 0;
                };
                return MkArc;
            }());
            exports_2("MkArc", MkArc);
        }
    };
});
System.register("MkCircle", [], function (exports_3, context_3) {
    "use strict";
    var MkCircle;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            MkCircle = (function () {
                function MkCircle() {
                }
                MkCircle.prototype.Length = function () {
                    return 0;
                };
                return MkCircle;
            }());
            exports_3("MkCircle", MkCircle);
        }
    };
});
System.register("MkLine", [], function (exports_4, context_4) {
    "use strict";
    var MkLine;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            MkLine = (function () {
                function MkLine() {
                }
                MkLine.prototype.Length = function () {
                    return 0;
                };
                return MkLine;
            }());
            exports_4("MkLine", MkLine);
        }
    };
});
System.register("MkPoint", [], function (exports_5, context_5) {
    "use strict";
    var MkPoint;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
            MkPoint = (function () {
                function MkPoint(x, y, z) {
                    this.X = x;
                    this.Y = y;
                    this.Z = z;
                }
                MkPoint.prototype.Length = function () {
                    return 0;
                };
                MkPoint.prototype.DistanceFrom = function (pnt) {
                    var dist = Math.sqrt(pnt.X - this.X);
                    return 0;
                };
                MkPoint.prototype.Set = function (x, y, z) {
                    this.X = x;
                    this.Y = y;
                    this.Z = z;
                };
                return MkPoint;
            }());
            exports_5("MkPoint", MkPoint);
        }
    };
});
System.register("MkTest", ["MkPoint"], function (exports_6, context_6) {
    "use strict";
    var mkpoint_1, pnt;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (mkpoint_1_1) {
                mkpoint_1 = mkpoint_1_1;
            }
        ],
        execute: function () {
            pnt = new mkpoint_1.MkPoint(0, 0, 0);
            console.log(pnt);
        }
    };
});
//# sourceMappingURL=mklib.js.map