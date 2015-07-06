/**
 * Created by zxb on 2015/7/6.
 */


(function () {
    if (define) {
        define("app/run", function (require, exports, module) {
            var MVC = require("mvc");
            module.run = function (data) {
                require(["mvc"], function (MVC) {
                    MVC.config([{
                        modelType: "Student",
                        renderData: data,
                        view: "#tpl",
                        render: "body"
                    }]);
                })
            }

            return module;
        })
    }
})()