/**
 * Model. View. Control framework.
 * Created by zxb on 2015/6/23.
 */

var Model = {};
(function () {
    var hasOwn = Object.prototype.hasOwnProperty;
    var Class = function (proConfig,consConfig) {
        var pro = {},cons = {};
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
            var func = Function;
            var proto = func.prototype;
            var constructor = func.constructor;
            for (var p in pro) {
                proto[p] = pro[p];
            }
            for (var p in cons) {
                constructor[p] = cons[p];
            }
            return proto.constructor;
        })();
    };


    if (Model) {
        Model.create = function (defaultConfig) {
            if(defaultConfig){
                if(typeof defaultConfig == "object" ){
                    var _Model = Class({
                        __registerType: defaultConfig.registerType,
                        __renderData:defaultConfig.renderData,
                        __instances: [],
                        get: function () {
                            console.log(1)
                        },
                        update: function () {
                        },
                        remove: function () {
                        }
                    },{
                        instance : function(){
                            var cons = this.constructor,__renderData = cons.prototype.__renderData;

                            console.log(__renderData)
                        }
                    });
                    return _Model;
                }
            }
        };
    }
})();

(function () {
    var a = Model.create({registerType: "Student", renderData: [{id: 1, name: "zs"}, {id: 2, name: "lisi"}]});

    a.instance()
})()


