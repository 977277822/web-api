/**
 * Created by Administrator on 2015/7/3.
 */


(function(){
    if(define){
        define("mvc-view",function(require, exports, module){
            var model = require("mvc-model");
            var template = require("mvc-juicer");
            module.stack = [];
            module.create = function (defaultConfig) {
                if (defaultConfig || typeof defaultConfig == "object") {
                    var _View = Class({
                        __modelType: defaultConfig.modelType,
                        __view: defaultConfig.view,
                        __render: defaultConfig.render,
                        render: function () {
                            var that = this, modelType = that.__modelType, view = that.__view, render = that.__render;
                            if (model.Model.stack && template) {
                                var data = [],html;
                                for (var i = 0, len = Model.stack.length; i < len; i++) {
                                    var _self = Model.stack[i];
                                    if(_self.__registerType === modelType){
                                        data.push(_self.__renderData);
                                    }
                                }
                                html = juicer(view,data);
                                console.log(html);
                            } else {
                                new Error("juicer template or model is not find");
                            }
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
        })
    }
})()