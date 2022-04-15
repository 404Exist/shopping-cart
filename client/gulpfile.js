const { task, dest, src, watch } = require('gulp');
const gulpSass = require('gulp-sass');
const sass = gulpSass(require('sass'));

task("sass", async () => {
  src("src/sass/*.scss").pipe(sass()).pipe(dest("src/css"))
})

task("watching", async () => {
  watch("src/sass/*.scss", async () => {
    src("src/sass/*.scss").pipe(dest("dist/css"))
  }) 
})