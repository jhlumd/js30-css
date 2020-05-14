const { task, src, dest, watch } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

task("styles", function () {
  src("css/styles.css")
    .pipe(autoprefixer())
    .pipe(dest("build"));
});

task("watch", function () {
  watch("css/styles.css", ["styles"]);
});
