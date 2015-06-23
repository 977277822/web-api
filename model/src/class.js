/**
 * Created by Administrator on 2015/6/23.
 */

(function () {

    var Class = function (config) {

        var obj = {"attrs": {}, "funcs": {}, "events": {}};

        /**
         * 事件
         */
        if (config.events) {
            for (var p in config.events) {
                obj["events"][p] = config.events[p];
            }
        }
        /**
         * 属性集
         */
        if (config.attrs) {
            for (var p in config.attrs) {
                obj["attrs"][p] = config.attrs[p] || null;
            }
        }
        /**
         * 方法集
         */
        if (config.funcs) {
            for (var p in config.funcs) {
                obj["funcs"][p] = config.funcs[p];
            }
        }

        return function (values) {
            this.setValue = function (attr, val) {
                obj["attrs"][attr] = val;
            };
            this.getValue = function (attr) {
                return obj["attrs"][attr];
            };
            this.setValues = function (vs) {
                for (var p in vs) {
                    this.setValue(p, vs[p]);
                }
            }
            this.destory = function(){
                if(obj["funcs"]["init"]){
                    obj["funcs"]["init"]();
                }
                delete this;
            }
            this.setValue(values);

            if(obj["funcs"]["init"]){
                obj["funcs"]["init"]();
            }

        };
    };


    var c = new Class({
        attrs: {a: 1, b: "2"},
        events: {
            a: function () {
            }
        },
        funcs: {
            b: function () {
            }
        }
    });
    var a = new c()
    a.setValue("a", "2")
    console.log(a.getValue("a"));
})();


