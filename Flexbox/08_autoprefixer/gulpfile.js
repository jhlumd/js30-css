import { task, src, dest, watch } from "gulp";
import autoprefixer from "gulp-autoprefixer";

task("styles", function () {
  src("css/styles.css")
    .pipe(autoprefixer())
    .pipe(dest("build"));
});

task("watch", function () {
  watch("css/styles.css", ["styles"]);
});
