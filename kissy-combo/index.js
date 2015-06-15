/**
 * Created by Administrator on 2015/6/15.
 */

var express = require("express");
var fs = require("fs");
var uuid = require('node-uuid');

var app = express();

app.get('/', function (req, res) {
    var originalUrl, relation, tag,filePath;
    originalUrl = req.originalUrl;
    if (originalUrl.indexOf("??") != -1) {
        relation = originalUrl.substring(originalUrl.indexOf("??") + 2);
        tag = relation.substring(relation.indexOf("?") + 1);
        relation = relation.replace(["?" + tag], "");
        tag = tag.substring(tag.indexOf("=") + 1);
        if(!findMapHandle(relation)){
            readyAndConcat(relation, tag);
        }
    }
    filePath = getMapPath(relation);
    console.log(filePath);
    res.sendfile(filePath);
});
/**
 * 读取关联文件并合并
 * @param filePaths  关联文件路径集合
 * @param tag 时间戳
 */
var readyAndConcat = function (filePaths, tag) {
    var fps, mod, data = [], fileName, mapKey;
    fps = filePaths.split(",");
    for (var i = 0, len = fps.length; i < len; i++) {
        mod = fps[i];
        data.push(fs.readFileSync('src/kissy/' + mod));
    }

    fileName = "bulid/" + uuid.v1() + "-" + tag;
    mapKey = filePaths;
    fs.writeFile(fileName, data.join(""), function (err) {
    });
    //添加map映射
    pathMapHandle(mapKey, fileName);
};
/**
 * 添加map映射
 * @param mapKey  文件映射关联
 * @param fileName 文件真实路径
 */
var pathMapHandle = function (mapKey, fileName) {
    var pathMap, pathMapJson = {}, pathMapFile = "pathmap.json";
    pathMap = fs.readFileSync(pathMapFile);
    if (pathMap != "") {
        pathMapJson = JSON.parse(pathMap);
    }
    pathMapJson[mapKey] = fileName;
    pathMapJson = JSON.stringify(pathMapJson);
    fs.writeFile(pathMapFile, pathMapJson, function (err) {
    });
}
/**
 * 检查映射在map中是否已存在
 * @param mapKey
 * @returns {boolean}
 */
var findMapHandle = function(mapKey){
    var pathMapFile = "pathmap.json";
    pathMap = fs.readFileSync(pathMapFile);
    if (pathMap != "") {
        pathMapJson = JSON.parse(pathMap);
        if(pathMapJson[mapKey]){
            return true;
        }
    }
    return false;
}
/**
 * 获取map路径信息
 * @param mapKey
 * @returns {*}
 */
var getMapPath = function(mapKey){
    var pathMapFile = "pathmap.json";
    pathMap = fs.readFileSync(pathMapFile);
    if (pathMap != "") {
        pathMapJson = JSON.parse(pathMap);
        return pathMapJson[mapKey];
    }
}
app.listen(3000);