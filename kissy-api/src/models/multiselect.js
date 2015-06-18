/**
 * Created by Administrator on 2015/6/17.
 * 支持jquery、kissy
 */

define(function(require, exports, module){
    var node = require("node");
    var util = require("util");
    var event = require("event-dom");

    var defaultConfig = {};

    var MultiSelect;
    MultiSelect = function(exports){
        this.renderData = util.mix(defaultConfig,exports);
    }
    util.augment(MultiSelect,{
        //生成DOM
        beforeCreateDom:function(){},
        //绑定控件事件
        bindUI:function(){},
        //检查参数输入是否正确
        validRenderData:function(){},
        render:function(){}
    });

    module.exports = city;
});
