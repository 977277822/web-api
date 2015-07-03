/**
 * zoom
 * 显示形式为：原始图片在左，高清放大图片在右
 * authro : zxb
 * Created by Administrator on 2015/6/11.
 */

define("zoom",function (require, exports, module) {
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
        isFoucs: false,
        renderOffset: {},
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
            eventDom.delegate(document, "mouseenter", render, that.handlerZoomShowInternal, that);
            eventDom.delegate(document, "mouseleave", "." + that.zoomClass, that.handleMouseOutInternal, that);
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
        //鼠标进入图片绑定放大镜移动事件
        handlerZoomShowInternal: function () {
            var that = this, zoomClass = that.zoomClass, zoom = node.all("." + zoomClass);
            eventDom.delegate(document, "mousemove", "body", that.handleMouseMoveInternal, that);
        },
        //鼠标移动的放大镜定位
        handleMouseMoveInternal: function (e) {
            var target = node(e.target), that = this, renderData = that.renderData, zoomClass = that.zoomClass, zoomClasszoomOffset = that.getZoomOffset(e), zoomViewOffset = that.getZoomViewOffset(e), zoom = node.all("." + zoomClass);
            left = zoomClasszoomOffset.left - 25;
            if (left > 190) left = 190;
            zoom.offset({
                left: left,
                top: zoomClasszoomOffset.top - 25
            }).show();
        },
        //鼠标移出事件
        handleMouseOutInternal: function (e) {
            var that = this, zoomClass = that.zoomClass, zoom = node.all("." + zoomClass);
            eventDom.undelegate(document, "mousemove", "body", that.handleMouseMoveInternal, that);
            zoom.hide();
        },
        //获取计算后的放大镜位置
        getZoomOffset: function (e) {
            //检测render坐标位置，如果计算后的位置超过图片坐标位置则保持当前位置。


            return {"left": e.clientX, "top": e.clientY};
        },
        //获取计算后的放大镜视图位置
        getZoomViewOffset: function (e) {
            return {"left": 0, "top": 0};
        },
        //删除zoom，实际为隐藏，在下次进入图片时显示
        removeZoom: function () {
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