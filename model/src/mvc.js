/**
 * Model. View. Control framework.
 * Created by zxb on 2015/6/23.
 */
(function () {
    if (define) {
        define("mvc", function (require, exports, module) {
            var Class = require("mvc-class").Class;
            var Model = require("mvc-model");
            var View = require("mvc-view");


            module.config = function (defaultConfig) {
                if (defaultConfig) {
                    var dcs = [];
                    if (typeof defaultConfig == "array") {
                        dcs = defaultConfig;
                    }
                    else if (typeof defaultConfig == "object") {
                        dcs = [defaultConfig];
                    }
                    for (var i = 0, len = dcs.length; i < len; i++) {
                        var _self = dcs[i];
                        var modelType = _self.modelType;
                        var renderData = _self.renderData;
                        var view = _self.view;
                        var render = _self.render;

                        var modelClass = Model.create({registerType: modelType, renderData: renderData});
                        var modelObject = modelClass.instance();

                        var viewClass = View.create({model: modelObject, view: view, render: render});
                        var viewObject = viewClass.instance();
                    }
                }

            }
            return module;
        })
    }
})()
