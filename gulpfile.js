// include gulp
var gulp = require('gulp'); 
var concat = require('gulp-concat'); 
var runSequence = require('run-sequence'); 
var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      open: true,
      fallback: 'app/index.html'
    }));
});

var depsJS  = ['app/bower_components/angular/angular.min.js',
				'app/bower_components/angular-route/angular-route.min.js',
				'app/bower_components/firebase/firebase.js',
				'app/bower_components/angularfire/dist/angularfire.min.js',
				'app/bower_components/jquery/dist/jquery.min.js',
				'app/bower_components/bootstrap/dist/js/bootstrap.min.js'];

var appJS  = ['app/js/app.js',
				'app/js/services/dataBase.js',
				'app/js/controllers/HomeController.js',
				'app/js/controllers/ContactController.js'];

//tasks

gulp.task('devDeps', function() 
{
  var depsjs = gulp.src(depsJS);
  return depsjs.pipe(concat('bowerDependencies.js'))
  				.pipe(gulp.dest('src'));
});

gulp.task('devJS', function() 
{
  var js = gulp.src(appJS);
  return js.pipe(concat('appDependencies.js'))
  				.pipe(gulp.dest('src'));
});

gulp.task('default', function(callback)
{
	runSequence('webserver', 'devDeps', 'devJS', callback);
});