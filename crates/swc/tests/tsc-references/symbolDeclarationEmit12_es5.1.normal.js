import _class_call_check from "@swc/helpers/lib/_class_call_check.js";
import _create_class from "@swc/helpers/lib/_create_class.js";
//@target: ES6
//@declaration: true
var M;
(function(M1) {
    var C = /*#__PURE__*/ function() {
        "use strict";
        function C() {
            _class_call_check(this, C);
        }
        var _proto = C.prototype;
        _proto[Symbol.toPrimitive] = function(x) {};
        _proto[Symbol.isConcatSpreadable] = function() {
            return undefined;
        };
        _create_class(C, [
            {
                key: Symbol.toPrimitive,
                get: function get() {
                    return undefined;
                }
            },
            {
                key: Symbol.toPrimitive,
                set: function set(x) {}
            }
        ]);
        return C;
    }();
    M1.C = C;
})(M || (M = {}));
