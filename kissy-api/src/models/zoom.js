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
        zoomClass: "web-api-zoom",
        zoomViewClass: "web-api-zoomview",
        xclass: 'zoom',
        //生成DOM
        beforeCreateDom: function () {
            console.log("-------生成zoom   zoomview-----------");
            var that = this, zoomClass = that.zoomClass, renderData = that.renderData, render = renderData.render, zoom = node('<div><div>');
            zoom.addClass(zoomClass).css({
                "position": "absolute",
                "left": 0,
                "top": 0,
                "width": "50px",
                "height": "50px",
                "background": "#000",
                "z-index": renderData.zIndex,
                "overflow": "hidden",
                "display": "none",
                "opacity": renderData.opacity,
                "cursor": renderData.crosshair
            });
            node.all("body").append(zoom);
        },
        //绑定控件事件
        bindUI: function () {
            var that = this, renderData = that.renderData, render = renderData.render;
            eventDom.delegate(document, "mousemove", render, that.handleMouseMoveInternal
                , that);
            eventDom.delegate(document, "mousemove", "." + that.zoomClass, that.handleMouseMoveInternal
                , that);
            eventDom.delegate(document, "mouseout", render, that.handleMouseOutInternal
                , that);
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
            var that = this, zoomClass = that.zoomClass, zoomClasszoomOffset = that.getZoomOffset(e), zoomViewOffset = that.getZoomViewOffset(e), zoom = node.all("." + zoomClass);
            zoom.offset({
                left: zoomClasszoomOffset.left,
                top: zoomClasszoomOffset.top
            }).show();
            console.log(e + "---------  鼠标移入事件启动");
        },
        //鼠标移出
        handleMouseOutInternal: function (e) {
            var that = this;
            node.all("." + that.zoomClass).remove();
            console.log(e + "---------  鼠标移出事件启动");

        },
        //获取计算后的放大镜位置
        getZoomOffset: function (e) {
            console.log("--------------获取计算后的放大镜位置-------------");
            return {"left": e.clientX, "top": e.clientY};
        },
        //获取计算后的放大镜视图位置
        getZoomViewOffset: function (e) {
            console.log("-------------获取计算后的放大镜视图位置--------------");
            return {"left": 0, "top": 0};
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