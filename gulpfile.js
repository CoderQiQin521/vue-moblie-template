const { series, parallel, src, dest } = require("gulp");
const path = require("path");
const gulpzip = require("gulp-zip");
const del = require("del");
const dayjs = require("dayjs");
const projectName = "test.uupt.com";

function zip() {
  del(["*.zip"]);

  console.log("打包完成");
  return src("dist/**")
    .pipe(gulpzip(`${projectName}-qiqin-${dayjs().format("YYYY-MM-DD HH-mm-ss")}.zip`))
    .pipe(dest("./"));
}

exports.zip = zip;
