/**
 * Created by Administrator on 2015/7/3.
 */


(function () {
    if (define) {
        define("Model", function (require, exports, module) {
            var Class = require("Class").Class;
            module.stack = [];
            module.create = function (defaultConfig) {
                if (defaultConfig || typeof defaultConfig == "object") {
                    var _Model = Class({
                        __registerType: defaultConfig.registerType,
                        __renderData: defaultConfig.renderData,
                        get: function (attrId, attrValue) {
                            var that = this, renderData = that.__renderData, resultArr = [];
                            if (!attrId && !attrValue) {
                                return renderData;
                            }

                            if (renderData) {
                                for (var i = 0, len = renderData.length; i < len; i++) {
                                    var t = renderData[i];
                                    if (attrId && attrValue) {
                                        if (t[attrId] === attrValue) {
                                            resultArr.push(t);
                                        }
                                    } else if (attrId) {
                                        if (t[attrId]) {
                                            resultArr.push(t);
                                        }
                                    }
                                }
                                return resultArr;
                            }
                        }
                    }, {
                        instance: function () {
                            var o = new this;
                            module.stack.push(o);
                            return o;
                        }
                    });
                    module.stack.push(_Model);
                    return _Model;
                }
            }
            return module;
        })
    }
})()