/**
 * Created by Administrator on 2015/6/17.
 *
 * data-model="city"
 * data-result="resultId"
 * data-url="url"
 */
(function ($) {
    var defaultConfig = {};

    var cityCss = {
        ".model-city-province:hover": "border: 1px solid #0099FF;border-radius: 5px;box-shadow: 0px 0px 5px #0099FF;",
        ".model-city-province:active": "background:#f9f9f9;color:#000000;",
        ".model-city-province": "cursor: pointer;padding:2px 5px 2px 5px;margin:5px;display:block;height:30px;font-size:12px;float:left;text-decoration:none;border: 1px solid #EEEEEE;border-radius: 5px;box-shadow: 0px 0px 5px #EEEEEE;min-width: 40px;text-align: center;line-height: 30px;",
        ".model-city-pop": "border-radius: 5px;position: absolute;display: block;min-width: 300px;min-height: 150px;border: 1px solid #EEEEEE;z-index: 9999;background: #fafafa;",
        ".model-city-pop-node": "cursor: pointer;margin: 2px 5px 2px 5px;display: block;float: left;min-height: 30px;min-width: 50px;font-size: 12px;border: 1px solid #EEEEEE;line-height: 30px;text-align: center;border-radius: 5px;box-shadow: 0px 0px 5px #EEEEEE;",
        ".model-city-pop-node:hover": "border: 1px solid #0099FF;border-radius: 5px;box-shadow: 0px 0px 5px #0099FF;",
        ".model-city-pop-node-click": "background: #FFFFCC;",
        ".model-city-count": "position: relative;top: -8px;right: -8px;border: 1px solid #CCFFFF;border-radius: 30px;font-size: 12px;background: #CCFFFF;box-shadow: 0px 0px 5px #CCFFFF;padding: 3px 5px 3px 5px;"


    };

    var methods = {
        render: function (params) {
            methods._createAfterDom.call(this);
            methods._bindUI.call(this);
        },
        /**
         * 创建DOM
         * @private
         */
        _createAfterDom: function () {
            methods._createCss();
            var resultRender = methods._getResultRender.call(this);
            var data = methods._getData();
            var that = this;
            var provinces = [];

            for (var i = 0, len = data.length; i < len; i++) {
                var self = data[i];
                var province = $("<a>");
                province.data("data", self);
                province.data("resultRender", resultRender);
                province.attr("data-count", methods._getChildrenCheckCount(self.children));
                province.attr("id", self.id);
                province.attr("data-city-province", self.id);
                province.addClass("model-city-province");
                province.html(self.name);
                provinces.push(province);
                methods._updateChecked(this,self.children);
            }
            that.append(provinces);

            //刷新数量显示
            methods._refreshCount();
            //刷新显示结果
            methods._refreshResult(this);
        },
        _updateChecked: function (t, children) {
            for (var i = 0, len = children.length; i < len; i++) {
                var self = children[i];
                if (self.checked) {
                    methods._addCheckNode(t, self.id, self.name);
                }
            }
        },
        /**
         * 获取子选中数量
         * @param children
         * @private
         */
        _getChildrenCheckCount: function (children) {
            var count = 0;
            for (var i = 0, len = children.length; i < len; i++) {
                var self = children[i];
                if (self.checked == true) {
                    ++count;
                }
            }
            return count;
        },
        _getResultRender: function () {
            return this.attr("data-result");
        },
        /**
         * 获取数据
         * @returns {*[]}
         * @private
         */
        _getData: function () {
            return [{id: "beijing0", name: "北京", children: [{id: "bj0", name: "北京", checked: true}]},
                {id: "beijing1", name: "北京", children: [{id: "bj1", name: "北京"}]},
                {id: "beijing2", name: "北京", children: [{id: "bj2", name: "北京"}]},
                {id: "beijing3", name: "北京", children: [{id: "bj3", name: "北京", checked: true}]},
                {id: "beijing4", name: "北京", children: [{id: "bj4", name: "北京"}]},
                {id: "beijing5", name: "北京", children: [{id: "bj5", name: "北京"}]},
                {id: "beijing6", name: "北京", children: [{id: "bj6", name: "北京"}]},
                {id: "beijing7", name: "北京", children: [{id: "bj7", name: "北京"}]},
                {id: "beijing8", name: "北京", children: [{id: "bj8", name: "北京"}]},
                {id: "beijing9", name: "北京", children: [{id: "bj9", name: "北京"}]},
                {id: "beijing10", name: "北京", children: [{id: "bj10", name: "北京"}]},
                {id: "beijing11", name: "北京", children: [{id: "bj11", name: "北京"}]},
                {id: "beijing12", name: "北京", children: [{id: "bj12", name: "北京"}]},
                {id: "beijing13", name: "北京", children: [{id: "bj13", name: "北京"}]},
                {id: "beijing14", name: "北京", children: [{id: "bj14", name: "北京"}]},
                {id: "beijing15", name: "北京", children: [{id: "bj15", name: "北京"}]}
            ];
        },
        /**
         * 创建样式表
         * @private
         */
        _createCss: function () {
            var css = [];
            for (var c in cityCss) {
                css.push(c + "{" + cityCss[c] + "}");
            }
            if ($("#model_city_css").length == 0) {
                var style = $("<style>").append(css.join(""));
                style.attr("id", "model_city_css");
                $("head").append(style);
            }
        },
        /**
         * 绑定事件
         * @private
         */
        _bindUI: function () {
            $(".model-city-province").on("click", this, function (e) {
                var that = $(this);
                var data = that.data("data");
                var province = e.data;
                var resultRender = that.data("resultRender");
                var pop = methods._createChildren(data, resultRender, province);
                var selfPosition = that.offset();
                var width = that.width();
                var height = that.height();
                selfPosition.top = selfPosition.top + height;
                pop.offset(selfPosition);
                return false;
            });

            $("body").on("click", function () {
                $(".model-city-pop").remove();
            });
            $("body").on("click", ".model-city-pop", function () {
                return false;
            });
            $("body").on("click", ".model-city-pop-node", this, function (e) {
                var that = $(this);
                var id = that.attr("id");
                var name = that.attr("data-name");
                var province = e.data;
                var parentId = that.attr("data-parentId");
                that.hasClass("model-city-pop-node-click") ? (function () {
                    that.removeClass("model-city-pop-node-click");
                    methods._removeCheckNode(province, id);
                    methods._removeCount(parentId);
                })() : (function () {
                    that.addClass("model-city-pop-node-click");
                    methods._addCheckNode(province, id, name);
                    methods._addCount(parentId);
                })();
                //刷新显示结果
                methods._refreshResult(province);
                //刷新数量显示
                methods._refreshCount();
                return false;
            });
        },
        /**
         * 刷新数量显示
         * @private
         */
        _refreshCount: function () {
            var list = $("[data-model=city] > [data-count]");
            $("[data-model=city]").find(".model-city-count").remove();
            list.each(function () {
                var that = $(this);
                var dataCount = parseInt(that.attr("data-count"));
                var numObj = $("<a>");
                numObj.addClass("model-city-count");
                numObj.append(dataCount);
                that.append(numObj);

            });
        },
        /**
         * 刷新显示结果
         * @private
         */
        _refreshResult: function (t) {
            var resultRender = t.attr("data-result");
            var data = t.data("checks");
            var result = [];
            for (var id in data) {
                var name = data[id];
                result[result.length] = id + "_" + name;
            }
            $(resultRender).empty().append(result.join(","));
        },
        /**
         * 添加选中
         * @private
         */
        _addCheckNode: function (t, id, name) {
            var checks = t.data("checks") || {};
            checks[id] = name;
            t.data("checks", checks);
        },

        _addCount: function (parentId) {
            var count = parseInt($("#" + parentId).attr("data-count") || 0);
            $("#" + parentId).attr("data-count", ++count);
        },
        _updateCount: function (parentId, sum) {
            $("#" + parentId).attr("data-count", sum);
        },
        _removeCount: function (parentId) {
            var count = parseInt($("#" + parentId).attr("data-count") || 0);
            if (count != 0) {
                --count;
            }
            $("#" + parentId).attr("data-count", count);
        },
        /**
         * 删除选中
         * @private
         */
        _removeCheckNode: function (t, id) {
            var checks = t.data("checks") || {};
            delete checks[id];
            t.data("checks", checks);

        },
        _createChildren: function (data, resultRender, province) {
            var children = $("<div>");
            var checks = province.data("checks") || {};
            var p = $("<div>").addClass("model-city-pop");
            var childDom = [];
            var count = 0;
            for (var i = 0, len = data.children.length; i < len; i++) {
                var obj = data.children[i];
                var node = $("<a>");
                node.attr("id", obj.id);
                node.attr("data-name", obj.name);
                node.attr("data-parentId", data.id);
                node.data("resultRender", resultRender);
                node.addClass("model-city-pop-node");
                if (checks[obj.id]) {
                    node.addClass("model-city-pop-node-click");
                    ++count;
                }
                methods._updateCount(count);
                node.append(obj.name);
                childDom.push(node);
            }
            p.append(childDom);
            $(".model-city-pop").remove();
            $("body").append(p);
            return p;
        },
        /**
         * 检查数据格式
         * @private
         */
        _validRenderData: function () {
        },
        /**
         * 刷新
         */
        refresh: function () {
        }
    };

    $.fn.city = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.render.apply(this, arguments);
        } else {
            $.error(method);
        }
    }

    //页面加载完成之后，初始化控件
    $(document).ready(function () {
        $("[data-model=city]").city();
    });
})($);