/**
 * models config
 * Created by Administrator on 2015/6/11.
 */

(function (require) {
    var currentFile = ["mseed", "mseed-debug"];
    var basePath = (function () {
        var scripts = document.getElementsByTagName("script"), that, src;
        for (var i = 0, len = scripts.length; i < len; i++) {
            that = scripts[i], src = that.src;
            if (src.indexOf(currentFile[0]) != -1) {
                return src.substring(0, src.indexOf("mseed.js"));
            } else if (src.indexOf(currentFile[1]) != -1) {
                return src.substring(0, src.indexOf("mseed.js"));
            }
        }
    })();
    require.config({
        packages: {
            "mod": {
                combine: false,
                tag: "20150611",//时间戳, 添加在动态脚本路径后面, 用于更新包内模块代码
                base: basePath, //包对应路径, 相对路径指相对于当前页面路径
                charset: "utf-8", //包里模块文件编码格式
            }
        }
    });
})(require);
