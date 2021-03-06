/**
 * Created by Administrator on 2015/7/10.
 */

(function () {
    if (require) {
        require.config({
            paths: {
                "backbone": "../src/js/base/backbone",
                "underscore": "../src/js/base/underscore",
                "juicer": "../src/js/base/juicer",
                "jquery": "../src/js/base/jquery",
                "mobilebone": "../src/js/base/mobilebone",
                "iscroll": "../src/js/base/iscroll",
                "jmobile": "../src/js/base/jquery.mobile-1.4.5"
            }
        });

        require(["jmobile"], function (jm) {
            $(document).on("pagebeforecreate",function(){
                jm.loading('show', {
                    text: '加载中...', //加载器中显示的文字
                    textVisible: false, //是否显示文字
                    theme:"a",        //加载器主题样式a-e
                    html: ""           //要显示的html内容，如图片等
                });
            });
            $(document).on("pageinit",function(){
                jm.loading('hide');
            });
            $(document).on("pageloadfailed",function(){

            });
        })
    }
})();

