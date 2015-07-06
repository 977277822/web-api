/**
 * Model. View. Control framework.
 * Created by zxb on 2015/6/23.
 */
(function () {
    if (define) {
        define("mvc", function (require, exports, module) {
            var Model = require("mvc-model");
            var View = require("mvc-view");

            module.modelClas = [];
            module.modelObjects = [];
            module.viewClas = [];
            module.viewsObjects = [];
            module.config = function (defaultConfig) {
                if (defaultConfig) {
                    var dcs = [];
                    if (defaultConfig instanceof Array) {
                        dcs = defaultConfig;
                    }
                    else if (defaultConfig instanceof Object) {
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

                        module.modelClas.push();
                        module.modelObjects.push();
                        module.viewClas.push(viewClass);
                        module.viewsObjects.push(viewObject);
                    }
                }

            }
            return module;
        })
    }
})()
