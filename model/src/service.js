/**
 * Created by Administrator on 2015/7/6.
 */


(function () {
    if (require) {
        require(["app/run"], function (app) {
            app.run([{id: "1", name: "2"}, {id: "3", name: "4"}]);
        })
    }
})()