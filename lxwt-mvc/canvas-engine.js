/**
 * Created by 小彬 on 2015/10/28.
 * convas 画布图形引擎
 */

(function () {
    var ConvasEngine = {};
    window.ConvasEngine = ConvasEngine;

    /**
     * 画布圆形引擎
     * @param canvasId 画布标识
     * @param x 圆心x坐标轴位置
     * @param y 圆心y坐标轴位置
     * @param radius 圆心半径
     * @param percent 弧度（百分比）
     * @param lineWidth 弧线宽度
     * @param lineColor 弧线颜色
     * @return canvas context(2d)
     */
    ConvasEngine.radiusEngine = function (canvasId, x, y, radius, percent, lineWidth, lineColor) {
        //起始位置。默认以圆心为坐标中心，顶点为弧线起始位置。
        var beginIndex = 1.5 * Math.PI;
        //结束位置。默认以百分比方式绘制圆形弧线长度。
        var endIndex = beginIndex + beginIndex / 270 * 3.6 * percent;
        var radiusObject = document.getElementById(canvasId);
        var ctx = radiusObject.getContext("2d");
        ctx.beginPath();
        //边线宽度
        ctx.lineWidth = lineWidth;
        //边线颜色
        ctx.strokeStyle = lineColor;
        ctx.arc(x, y, radius, beginIndex, endIndex, false);
        ctx.stroke();
        ctx.closePath();

        return ctx;
    };
    /**
     * 擦除整个画布
     * @param canvasId
     * @returns {CanvasRenderingContext2D}
     */
    ConvasEngine.clearCanves = function (canvasId) {
        var cavasObj = document.getElementById(canvasId);
        var ctx = cavasObj.getContext("2d");
        var width = cavasObj.width, height = cavasObj.height;
        ctx.clearRect(0, 0, width, height);
        return ctx;
    }

})();