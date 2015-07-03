/**
 * Model. View. Control framework.
 * Created by zxb on 2015/6/23.
 */

var Model = {};
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
            if (defaultConfig) {
                if (typeof defaultConfig == "object") {
                    var _Model = Class({
                        __registerType: defaultConfig.registerType,
                        __renderData: defaultConfig.renderData,
                        get: function (attrId,attrValue) {
                            var that = this,renderData = this.__renderData;
                            if(renderData){

                            }
                        }
                    }, {
                        instance: function () {
                            return new this;
                        }
                    });
                    Model.stack.push(_Model);
                    return _Model;
                }
            }
        };
    }
})();

(function () {
    var a = Model.create({registerType: "Student", renderData: [{id: 1, name: "zs"}, {id: 2, name: "zs2"}]});
    var b = Model.create({registerType: "Class", renderData: [{id: 3, name: "zs"}, {id: 4, name: "zs2"}]});

    console.log(a.instance())
    console.log(b.instance())
    //a.instance();
    // b.instance();
    //console.log(a.get("id", 1))
    //console.log(b.get("id", 3))
})()


