/**
 * zoom
 * 显示形式为：原始图片在左，高清放大图片在右
 * authro : zxb
 * Created by Administrator on 2015/6/11.
 */

define(function (require, exports, module) {
    var node = require("node");
    var util = require("util");
    var eventDom = require("event-dom");
    var defaultConfig = {
        bgColor: "255,255,255",
        version: "1.0.0",
        opacity: "0.5",
        cursor: "crosshair",
        zIndex: 9999,
        zoomViewSize: [480, 395],
        zoomViewMargin: 10,
        zoomViewBorder: "none"
    };
    var zoom;
    zoom = function (exports) {
        this.renderData = util.mix(defaultConfig, exports);
    };
    util.augment(zoom, {
        isZoom: 1,
        xclass: 'zoom',
        //生成DOM
        beforeCreateDom: function () {
            console.log("-------生成zoom   zoomview-----------");
        },
        //绑定控件
        bindUI: function () {
            var that = this;
            eventDom.on(that.renderData.render, {
                "mousemove": that.handleMouseMoveInternal,
                "mouseout": that.handleMouseOutInternal
            },that);
        },
        //检查参数输入是否正确
        validRenderData: function () {
            var that = this, renderData = that.renderData;
            if (renderData == undefined || renderData.render == undefined || renderData.render == null) {
                throw new TypeError('renderData 参数配置不正确！');
                return false;
            }
            if (node.all(renderData.render).length == 0) {
                return false;
            }
            return true;
        },
        //鼠标移入
        handleMouseMoveInternal: function (e) {
            console.log(this)
            var that = this, zoomOffset = that.getZoomOffset(e), zoomViewOffset = that.getZoomViewOffset(e);
            console.log(e + "---------  鼠标移入事件启动");
        },
        //鼠标移出
        handleMouseOutInternal: function (e) {
            console.log(e + "---------  鼠标移出事件启动");
        },
        //获取计算后的放大镜位置
        getZoomOffset: function (e) {
            console.log("--------------获取计算后的放大镜位置-------------");
            return { "left" : 0 , "top" : 0};
        },
        //获取计算后的放大镜视图位置
        getZoomViewOffset: function (e) {
            console.log("-------------获取计算后的放大镜视图位置--------------");
            return { "left" : 0 , "top" : 0};
        },
        //删除zoom，实际为隐藏，在下次进入图片时显示
        removeZoom: function () {
            console.log("--------------隐藏zoom-----------------");
        },
        //初始化控件
        render: function () {
            var that = this;
            if (!that.validRenderData()) return;
            that.beforeCreateDom();
            that.bindUI();
        }
    });
    module.exports = zoom;
});