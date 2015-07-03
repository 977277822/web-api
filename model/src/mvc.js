/**
 * Model. View. Control framework.
 * Created by zxb on 2015/6/23.
 */

var Model = {}, View = {};
(function () {
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


    if (Model) {
        Model.stack = [];
        Model.create = function (defaultConfig) {
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
                        Model.stack.push(o);
                        return o;
                    }
                });
                Model.stack.push(_Model);
                return _Model;
            }
        }

        View.stack = [];
        View.create = function (defaultConfig) {
            if (defaultConfig || typeof defaultConfig == "object") {
                var _View = Class({
                    __modelType: defaultConfig.modelType,
                    __view: defaultConfig.view,
                    __render: defaultConfig.render,
                    render: function () {
                        var that = this, modelType = that.__modelType, view = that.__view, render = that.__render;
                    },
                    refresh: function () {
                    }
                }, {
                    render: function () {
                        var o = new this;
                        View.stack[o];
                        return o;
                    }
                });
            }
        }
    }
})();

(function () {
    var A = Model.create({registerType: "Student", renderData: [{id: 1, name: "zs"}, {id: 2, name: "zs2"}]});
    var B = Model.create({registerType: "Class", renderData: [{id: 3, name: "zs"}, {id: 4, name: "zs2"}]});

    var V = View.create({modelType: "Student", view: "aaaa", render: "dddd"});

    var a = A.instance();
    var b = B.instance();

    console.log(a.get("id", 1))
    console.log(A.instance())
    console.log(B.instance())
    //a.instance();
    // b.instance();
    //console.log(a.get("id", 1))
    //console.log(b.get("id", 3))
})()


