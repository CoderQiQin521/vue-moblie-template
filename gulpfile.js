const path = require("path");
const { series, parallel, src, dest } = require("gulp");
const gulpzip = require("gulp-zip");
const del = require("del");
const dayjs = require("dayjs");

exports.build = function build() {
  del(["*.zip"]);

  console.log("打包完成");
  return src("dist/**")
    .pipe(gulpzip(`test.123.com-${dayjs().format("YYYY-MM-DD HH-mm-ss")}.zip`))
    .pipe(dest("./"));
};
