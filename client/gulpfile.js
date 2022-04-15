const { task, dest, src, watch } = require('gulp');
const gulpSass = require('gulp-sass');
const sass = gulpSass(require('sass'));

task("sass", async () => {
  watch("src/components/**/*.scss", async () => {
    src("src/components/**/*.scss").pipe(sass()).pipe(dest("src/css"))
  }) 
})