const { task, src, dest, watch, series } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

task("styles", function() {
  return src("css/styles.css")
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(dest("build"));
});

task("watch", function() {
  watch("css/styles.css", series("styles"));
});
