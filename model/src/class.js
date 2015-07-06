/**
 * Created by zxb on 2015/7/3.
 */


(function () {
    if (define) {
        define("mvc-class", function (require, exports, module) {
            var hasOwn = Object.prototype.hasOwnProperty;
            var Class = function (proConfig, consConfig) {
                var pro = {}, cons = {};
                if (proConfig) {
                    for (var p in proConfig) {
                        if (hasOwn.call(proConfig, p)) {
                            pro[p] = proConfig[p];
                        }
                    }
                }
                if (consConfig) {
                    for (var p in consConfig) {
                        if (hasOwn.call(consConfig, p)) {
                            cons[p] = consConfig[p];
                        }
                    }
                }
                return (function () {
                    var func = function () {
                    };
                    var proto = func.prototype;
                    var constructor = func.constructor;
                    for (var p in pro) {
                        proto[p] = pro[p];
                    }
                    for (var p in cons) {
                        func[p] = cons[p];
                    }
                    return proto.constructor;
                })();
            };
            module.Class = Class;
            return module;
        });
    }

})();