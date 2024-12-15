import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import terser from 'gulp-terser'
import concat from 'gulp-concat'
import browserSync from 'browser-sync'
import gulpImagemin from 'gulp-imagemin'

const bs = browserSync.create()
const sass = gulpSass(dartSass)

export const styles = () => {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'))
}

// Задача для обработки скриптов
export const scripts = () => {
  return gulp.src('./src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(gulp.dest('./dist/js'))
}

export const html = () => {
  return gulp.src('./src/**/*.html').pipe(gulp.dest('./dist'))
}

export const images = () => {
  return gulp.src('./src/img/**/*')
    .pipe(gulpImagemin())
    .pipe(gulp.dest('./dist/img'))
}

export const build = gulp.series(html, styles, scripts, images)

export const serve = () => {
  bs.init({
    server: {
      baseDir: './dist',
    }
  })
  gulp.watch('./src/scss/**/*.scss', styles).on('change', bs.reload)
  gulp.watch('./src/js/**/*.js', scripts).on('change', bs.reload)
  gulp.watch('./src/**/*.html', html).on('change', bs.reload)
  gulp.watch('./src/img/**/*', images).on('change', bs.reload)
}

export default gulp.series(build, serve)
