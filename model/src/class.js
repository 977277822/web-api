/**
 * Created by Administrator on 2015/6/23.
 */

var Model = {};
(function () {
    var hasOwn = Object.prototype.hasOwnProperty;
    var privateReg = /^[_]/;
    var Class = function (config) {
        var pro = {};
        if (config) {
            for (var p in config) {
                if (hasOwn.call(config, p)) {
                    pro[p] = config[p];
                }
            }
        }
        return (function () {
            var proto = Function.prototype;
            proto.getPro = function(p){
                return pro[p];
            }
            for (var p in pro) {
                if (!privateReg.test(p)) {
                    proto[p] = pro[p];
                }
            }
            return proto.constructor;
        })();
    };


    var augment = function (oldClass, newClassAttr) {
        var pro = oldClass.prototype;
        for (var p in newClassAttr) {
            pro[p] = newClassAttr[p];
        }
    }

    if (Model) {
        Model.create = Class;
    }
})();

(function () {
    var Student = new Model.create({
        _name: "1",
        id: "1",
        getName : function(){
            console.log(this.getPro("_name"))
        }
    });

    var a = new Student();
    console.log(a.getName())
})()


