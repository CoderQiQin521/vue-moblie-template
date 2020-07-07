const { series, parallel, src, dest } = require("gulp");
const path = require("path");
const gulpzip = require("gulp-zip");
const del = require("del");
const dayjs = require("dayjs");

const projectName = "test.uupt.com";
const author = "qiqin";
const date = dayjs().format("YYYY-MM-DD HH-mm-ss");

function zip() {
  del(["*.zip"]);

  console.log("打包完成");
  return src("dist/**")
    .pipe(gulpzip(`${projectName}-${author}-${date}.zip`))
    .pipe(dest("./"));
}

exports.zip = zip;
