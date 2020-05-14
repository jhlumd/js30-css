const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

const { task, src, dest, watch } = gulp;

task("styles", function () {
  src("css/styles.css")
    .pipe(autoprefixer())
    .pipe(dest("build"));
});

task("watch", function () {
  watch("css/styles.css", ["styles"]);
});
