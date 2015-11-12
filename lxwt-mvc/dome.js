/**
 * Created by zxb on 2015/10/26.
 */

(function () {
    var Dome = {
        /**
         * 模型类
         * @constructor
         */
        Model: function () {
        },
        /**
         * 控制器类
         * @constructor
         */
        Collection: function () {
        },
        /**
         * 视图处理类
         * @constructor
         */
        View: function () {
        },
        /**
         * 类继承
         * 继承后的类为新类，与父类不存在对象继承关系
         * @param pClass 父类
         * @param nObj 子类继承的属性对象集
         */
        extend: function (pClass, nObj) {
            var proc = pClass.prototype, newClass = function () {
                if (this.init) this.init();
            }, newProc = newClass.prototype;

            for (var p in proc) {
                newProc[p] = proc[p];
            }

            for (var p in nObj) {
                newProc[p] = nObj[p];
            }
            return newClass;
        },
        ext: function (modelType, attrObj) {
            return Dome.extend(modelType, attrObj);
        },
        error: function (msg) {
            throw(msg);
        }
    };

    Dome.Model = Dome.extend(Dome.Model, {
        data: {},
        getModel: function (modelAttr) {
            return this.data[modelAttr];
        },
        setModel: function (modelAttr, value) {
            this.data[modelAttr] = value;
        },
        get: function () {
            return this.data;
        }
    });

    Dome.Collection = Dome.extend(Dome.Collection, {
        /**
         * 数据同步触发器
         */
        cevents: {},
        model: null,   //对应的数据模型
        url: "",       //数据模型对应的url
        sysc: true,    //默认异步加载数据
        fetch: function (type, callback) {
            //ajax加载数据
            console.log(this.url)
            this.ctrigger("fetch", callback);
        },
        save: function () {
            //同步数据
            this.ctrigger("save", callback);
        },
        update: function () {
            //获取被修改的数据
            this.ctrigger("update", callback);
        },
        remove: function () {
            //获取被删除的数据。
            this.ctrigger("remove", callback);
        },
        /**
         * 绑定collection数据同步触发器。
         * @param type [ fetch,save,update,remove ]
         * @param callback [ params:{ modelObject } ]
         */
        bind: function (type, callback) {
            this.cevents[type] = callback;
        },
        ctrigger: function (event, callback) {
            if (this.cevents[event]) {
                this.cevents[event](this.model);
            }
        }
    });
    Dome.Model.extend = function (obj) {
        return Dome.ext(Dome.Model, obj || {});
    };
    Dome.Collection.extend = function (obj) {
        return Dome.ext(Dome.Collection, obj || {});
    };
    {
        var DomeModel = Dome.Model.extend({
            data: {name: 1, title: "title"},
            init: function () {
                console.log(this.data)
            }
        });

        var DomeCollection = Dome.Collection.extend({
            model : DomeModel,
            url : "aaa"
        });



        var domeCollection = new DomeCollection();
        console.log(domeCollection.fetch());
    }

})();