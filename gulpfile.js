var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open=require('gulp-open'),
    concat=require('gulp-concat'),
    browserify=require('gulp-browserify');
var port=process.env.port||3000;

// 将所有的组件源文件通过reactify转化为非jsx格式的js代码
gulp.task('browserify',function () {
  gulp.src('./app/src/js/components/main.js')
  .pipe(browserify({transform:'reactify'}))
  .pipe(gulp.dest('./app/dist/js'));
});

//在本地打开浏览器
gulp.task('open',function () {
  var options={
    url:"localhost:"+port
  };
  gulp.src('./app/index.html').pipe(open('',options));
});
// 创建一个支持reload的服务器
gulp.task('connect',function () {
  connect.server({
    root:'app',
    port:port,
    livereload:true
  });
});
// 当js文件发生变化的时候启动浏览器reload
gulp.task('js',function () {
  gulp.src('./app/dist/**/*.js').pipe(connect.reload());
});


gulp.task('html',function () {
  gulp.src('./app/*.html').pipe(connect.reload());
});
gulp.task("watch",function () {
  gulp.watch('app/dist/js/*.js',['js']);
  gulp.watch('app/index.html',['html']);
  gulp.watch("app/src/js/**/*.js",['browserify']);
});

gulp.task('default',['browserify']);
gulp.task('server',['browserify','connect','open','watch']);
