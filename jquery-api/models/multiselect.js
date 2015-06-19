/**
 * Created by zxb on 2015/6/17.
 * 多选项插件
 *
 * data-model="multiselect"
 * data-result="resultId"
 * data-url="url"
 * data-json="json"
 * data-location="dataJson"
 * data-resultformatter="function(data){ ???.val(value) || ???.append(value) }"
 * dataStructure :   [ { id:"",name:"",children:[ { id:"",name:""} ] } ]
 *
 */
(function ($) {
    var defaultConfig = {};

    var cityCss = {
        ".model-multiselect-one:hover": "border: 1px solid #0099FF;border-radius: 5px;box-shadow: 0px 0px 5px #0099FF;",
        ".model-multiselect-one:active": "background:#f9f9f9;color:#000000;",
        ".model-multiselect-one": "cursor: pointer;padding:2px 5px 2px 5px;margin:5px;display:block;height:30px;font-size:12px;float:left;text-decoration:none;border: 1px solid #EEEEEE;border-radius: 5px;box-shadow: 0px 0px 5px #EEEEEE;min-width: 40px;text-align: center;line-height: 30px;",
        ".model-multiselect-pop": "border-radius: 5px;position: absolute;display: block;min-width: 300px;min-height: 150px;border: 1px solid #EEEEEE;z-index: 9999;background: #fafafa;",
        ".model-multiselect-pop-node": "cursor: pointer;margin: 2px 5px 2px 5px;display: block;float: left;min-height: 30px;min-width: 50px;font-size: 12px;border: 1px solid #EEEEEE;line-height: 30px;text-align: center;border-radius: 5px;box-shadow: 0px 0px 5px #EEEEEE;",
        ".model-multiselect-pop-node:hover": "border: 1px solid #0099FF;border-radius: 5px;box-shadow: 0px 0px 5px #0099FF;",
        ".model-multiselect-pop-node-click": "background: #FFFFCC;",
        ".model-multiselect-count": "position: relative;top: -8px;right: -8px;border: 1px solid #CCFFFF;border-radius: 30px;font-size: 12px;background: #CCFFFF;box-shadow: 0px 0px 5px #CCFFFF;padding: 3px 5px 3px 5px;"

    };

    var Constant = {
        "[data-model=multiselect] > [data-count]": "[data-model=multiselect] > [data-count]",
        "[data-model=multiselect]": "[data-model=multiselect]",
        "data": "data",
        "id": "id",
        "head": "head",
        "click": "click",
        "checks": "checks",
        "data-result": "data-result",
        "body": "body",
        "model-multiselect-one": "model-multiselect-one",
        "model_multiselect_css": "model_multiselect_css",
        "model-multiselect-count": "model-multiselect-count",
        "data-multiselect-one": "data-multiselect-one",
        "data-count": "data-count",
        "data-resultformatter": "data-resultformatter",
        "model-multiselect-pop": "model-multiselect-pop",
        "data-id": "data-id",
        "data-url": "data-url",
        "data-json": "data-json",
        "data-name": "data-name",
        "data-parentId": "data-parentId",
        "resultRender": "resultRender",
        "model-multiselect-pop-node": "model-multiselect-pop-node",
        "model-multiselect-pop-node-click": "model-multiselect-pop-node-click",
        ".model-multiselect-one": ".model-multiselect-one",
        ".model-multiselect-pop-node": ".model-multiselect-pop-node",
        ".model-multiselect-count": ".model-multiselect-count",
        "#model_multiselect_css": "#model_multiselect_css",
        ".model-multiselect-pop": ".model-multiselect-pop",
        "<style>": "<style>",
        "<a>": "<a>",
        "<div>": "<div>"


    };

    var methods = {
        render: function () {
            methods._createAfterDom.call(this);
            methods._validRenderData.call(this);
            methods._bindUI.call(this);
        },
        /**
         * 创建DOM
         * @private
         */
        _createAfterDom: function () {
            methods._createCss();
            var resultRender = methods._getResultRender.call(this);
            var data = methods._getData.call(this);
            var that = this;
            var multiSelects = [];

            for (var i = 0, len = data.length; i < len; i++) {
                var self = data[i];
                var multiSelect = $(Constant["<a>"]);
                multiSelect.data(Constant["data"], self);
                multiSelect.data(Constant["resultRender"], resultRender);
                multiSelect.attr(Constant["data-count"], methods._getChildrenCheckCount(self.children));
                multiSelect.attr(Constant["data-multiselect-one"], self.id);
                multiSelect.addClass(Constant["model-multiselect-one"]);
                multiSelect.html(self.name);
                multiSelects.push(multiSelect);
                methods._updateChecked(this, self.children);
            }
            that.append(multiSelects);

            //刷新数量显示
            methods._refreshCount();
            //刷新显示结果
            methods._refreshResult(this);
        },
        /**
         * 修改选中结果
         * @param t
         * @param children
         * @private
         */
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
        /**
         * 获取结果显示对象选择器
         * @returns {*}
         * @private
         */
        _getResultRender: function () {
            return this.attr(Constant["data-result"]);
        },
        /**
         * 获取数据
         * @returns {*[]}
         * @private
         */
        _getData: function () {
            var that = $(this[0]);
            dataUrl = that.attr(Constant["data-url"]);
            dataJson = that.attr(Constant["data-json"]);
            data = [];
            if (dataJson) {
                data = eval(dataJson);
            }
            else if (dataUrl) {
                $.ajax({
                    url: dataUrl,
                    type: "post",
                    dataType: "json",
                    async: false,
                    success: function (result) {
                        data = result;
                    }
                });
            }
            that.data("dataJson", data);
            return data;
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
            if ($(Constant["#model_multiselect_css"]).length == 0) {
                var style = $(Constant["<style>"]).append(css.join(""));
                style.attr(Constant["id"], Constant["model_multiselect_css"]);
                $(Constant["head"]).append(style);
            }
        },
        /**
         * 绑定事件
         * @private
         */
        _bindUI: function () {
            $(Constant[".model-multiselect-one"]).on(Constant["click"], this, function (e) {
                var that = $(this);
                var data = that.data(Constant["data"]);
                var province = e.data;
                var resultRender = that.data(Constant["resultRender"]);
                var pop = methods._createChildren(data, resultRender, province);
                var selfPosition = that.offset();
                var width = that.width();
                var height = that.height();
                selfPosition.top = selfPosition.top + height;
                pop.offset(selfPosition);
                return false;
            });

            $(Constant["body"]).on(Constant["click"], function () {
                $(Constant[".model-multiselect-pop"]).remove();
            });
            $(Constant["body"]).on(Constant["click"], Constant[".model-multiselect-pop"], function () {
                return false;
            });
            $(Constant["body"]).on(Constant["click"], Constant[".model-multiselect-pop-node"], this, function (e) {
                var that = $(this);
                var id = that.attr(Constant["data-id"]);
                var name = that.attr(Constant["data-name"]);
                var province = e.data;
                var parentId = that.attr(Constant["data-parentId"]);
                that.hasClass(Constant["model-multiselect-pop-node-click"]) ? (function () {
                    that.removeClass(Constant["model-multiselect-pop-node-click"]);
                    methods._removeCheckNode(province, id);
                    methods._removeCount(parentId);
                })() : (function () {
                    that.addClass(Constant["model-multiselect-pop-node-click"]);
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
            var list = $(Constant["[data-model=multiselect] > [data-count]"]);
            $(Constant["[data-model=multiselect]"]).find(Constant[".model-multiselect-count"]).remove();
            list.each(function () {
                var that = $(this);
                var dataCount = parseInt(that.attr(Constant["data-count"]));
                var numObj = $(Constant["<a>"]);
                numObj.addClass(Constant["model-multiselect-count"]);
                numObj.append(dataCount);
                that.append(numObj);

            });
        },
        /**
         * 刷新显示结果
         * @private
         */
        _refreshResult: function (t) {
            var resultRender = t.attr(Constant["data-result"]);
            var resultFormatter = t.attr(Constant["data-resultformatter"]);

            var data = t.data(Constant["checks"]);
            if (resultFormatter) {
                var fmt = eval(resultFormatter);
                fmt(data);
            }
            else if (resultRender) {
                var result = [];
                for (var id in data) {
                    var name = data[id];
                    result[result.length] = id + "_" + name;
                }
                $(resultRender).empty().append(result.join(","));
            }
        },
        /**
         * 添加选中
         * @private
         */
        _addCheckNode: function (t, id, name) {
            var checks = t.data(Constant["checks"]) || {};
            checks[id] = name;
            t.data(Constant["checks"], checks);
        },
        /**
         * 添加数量
         * @param parentId
         * @private
         */
        _addCount: function (parentId) {
            var selector = "[" + Constant["data-multiselect-one"] + "=" + parentId + "]";
            var province = $(selector);
            var count = parseInt(province.attr(Constant["data-count"]) || 0);
            province.attr(Constant["data-count"], ++count);
        },
        /**
         * 修改数量
         * @param parentId
         * @param sum
         * @private
         */
        _updateCount: function (parentId, sum) {
            var selector = "[" + Constant["data-multiselect-one"] + "=" + parentId + "]";
            $(selector).attr(Constant["data-count"], sum);
        },
        /**
         * 删除数量
         * @param parentId
         * @private
         */
        _removeCount: function (parentId) {
            var selector = "[" + Constant["data-multiselect-one"] + "=" + parentId + "]";
            var province = $(selector);
            var count = parseInt(province.attr(Constant["data-count"]) || 0);
            if (count != 0) {
                --count;
            }
            province.attr(Constant["data-count"], count);
        },
        /**
         * 删除选中
         * @private
         */
        _removeCheckNode: function (t, id) {
            var checks = t.data(Constant["checks"]) || {};
            delete checks[id];
            t.data(Constant["checks"], checks);

        },
        /**
         * 生成子多选菜单
         * @param data
         * @param resultRender
         * @param province
         * @returns {*|jQuery}
         * @private
         */
        _createChildren: function (data, resultRender, province) {
            var children = $(Constant["<div>"]);
            var checks = province.data(Constant["checks"]) || {};
            var p = $(Constant["<div>"]).addClass(Constant["model-multiselect-pop"]);
            var childDom = [];
            var count = 0;
            for (var i = 0, len = data.children.length; i < len; i++) {
                var obj = data.children[i];
                var node = $(Constant["<a>"]);
                node.attr(Constant["data-id"], obj.id);
                node.attr(Constant["data-name"], obj.name);
                node.attr(Constant["data-parentId"], data.id);
                node.data(Constant["resultRender"], resultRender);
                node.addClass(Constant["model-multiselect-pop-node"]);
                if (checks[obj.id]) {
                    node.addClass(Constant["model-multiselect-pop-node-click"]);
                    ++count;
                }
                methods._updateCount(count);
                node.append(obj.name);
                childDom.push(node);
            }
            p.append(childDom);
            $(Constant[".model-multiselect-pop"]).remove();
            $(Constant["body"]).append(p);
            return p;
        },
        /**
         * 检查数据格式
         * @private
         */
        _validRenderData: function () {
            var that = $(this[0]);
            var data = that.data("dataJson");
            if (data == undefined || data == null || data == "") {
                throw new Error('model-city error : data \u4e0d\u5b58\u5728\uff01');
            }
            //检查ID是否已存在
            for (var i = 0, len = data.length; i < len; i++) {

            }
        },
        /**
         * 刷新
         */
        refresh: function () {
        }
    };

    $.fn.MultiSelect = function (method) {
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
        $(Constant["[data-model=multiselect]"]).MultiSelect();
    });
})($);