/**
 * Created by Administrator on 2015/7/3.
 */


(function(){
    if(define){
        define("mvc-view",function(require, exports, module){
            var template = require("mvc-juicer");
            var Class = require("mvc-class").Class;
            var node = require("node");
            module.stack = [];
            module.create = function (defaultConfig) {
                if (defaultConfig || typeof defaultConfig == "object") {
                    var _View = Class({
                        __object: defaultConfig.model,
                        __view: defaultConfig.view,
                        __render: defaultConfig.render,
                        render: function () {
                            var that = this, modelType = that.__modelType, view = that.__view, render = that.__render,__renderData = that.__object.__renderData;
                            if (__renderData && template) {
                                html = template(view,__renderData);
                                node.all(render).append(html);
                            } else {
                                new Error("juicer template or model is not find");
                            }
                        },
                        refresh: function () {
                        }
                    }, {
                        instance: function () {
                            var o = new this;
                            o.render();
                            return o;
                        }
                    });
                    module.stack.push(_View);
                    return _View;
                }
            }
            return module;
        })
    }
})()