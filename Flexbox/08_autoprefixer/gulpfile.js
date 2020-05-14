const { task, src, dest, watch } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

task("styles", function(done) {
  src("css/styles.css")
    .pipe(autoprefixer())
    .pipe(dest("build"));
  done();
});

task("watch", function(done) {
  watch("css/styles.css", ["styles"]);
  done();
});
