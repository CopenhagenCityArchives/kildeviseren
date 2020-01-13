/**
 *
 * God basis gulp fil.
 * Kan:
 * 1) con: Concate flere .js filer til én fil
 * 2) minify: Overvåge filer .js-filer og køre minify
 * 3) connomini: Concat flere .js filer uden minify (til debugging)
 * 4) toprod: Kopiere filer til en produktionsmappe
 *
 */

//Options
var opt = {};


// All js files except test files are concatenated
opt.appSrc = [
   // "src/client/assets/js/plugins/leaflet.js", 
    "src/client/assets/js/**/*.js",
    "src/client/directives/*.js",
    "src/client/controllers/*.js",
    "src/client/services/*.js",
    '!src/client/services/mocks.js'
];
opt.appFileName = "concat.js";

// All css files are concatenated
opt.cssSrc = ["src/client/assets/*.css"];
opt.cssFileName = "all.css";

// All assets are copied
opt.assetsSrc = "src/client/assets/**/*.*";

// All server files are put in server folder
opt.serverSrc = "src/server/**/*.*";
opt.serverDest = "dist";

// Views are copied
opt.viewsSrc = "src/client/views/*.html";

//Dependencies:

//Gulp!!!
var gulp = require('gulp');
//Only handles changed files
var changed = require('gulp-changed');
//Minifies html, css and Javascript
var minifier = require('gulp-minifier');
//Watch for changes
var watchify = require('gulp-watchify');
//Put files together in a single file
var concat = require('gulp-concat');
//Remove files and folders
var clean = require('gulp-clean');

//Tasks:

// Clear dist dir
gulp.task('clearDist', function () {
    console.log('Clearing dist dir');
    return gulp.src('dist', {read: false})
        .pipe(clean({force: true}));
});

//Concat js files and copy assets to dist
gulp.task('build', ['clearDist', 'connomini'], function(){
    
    console.log('Copying assets ', opt.assetsSrc);
    
    gulp.src(opt.assetsSrc)
    .pipe(gulp.dest('./dist/assets'));

    console.log('Copying server files ', opt.serverSrc);
    
    gulp.src(opt.serverSrc)
    .pipe(gulp.dest('./dist/'));    

    console.log('Copying server files ', opt.serverSrc);
    
    gulp.src(opt.serverSrc)
    .pipe(gulp.dest('./dist/'));   

    console.log('Copying view files ', opt.viewsSrc);
    
    gulp.src(opt.viewsSrc)
    .pipe(gulp.dest('./dist/'));   
});

//Concat, no minify (for debugging)
gulp.task('connomini', ['clearDist'], function(){
    
    console.log('Concating and minifying ', opt.appSrc);

    gulp.src(opt.appSrc)
    .pipe(concat(opt.appFileName))
    .pipe(gulp.dest('dist'));
});

//Minifies Javascript files
gulp.task('minify', watchify(function(){
    gulp.src(opt.src)
    //.pipe(changed(dest))
    .pipe(minifier({
        minify: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyJS: true,
        minifyCSS: true
    }))
    .pipe(concat(opt.minifyFileName))
    .pipe(gulp.dest(opt.dest));
}));

//Concat all .js files
gulp.task('con', function(){
    gulp.src(opt.src)
    .pipe(minifier({
        minify: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyJS: true,
        minifyCSS: true
    }))
    .pipe(concat(opt.concatFileName))
    .pipe(gulp.dest(opt.dest));
});





//Concats all CSS files
gulp.task('minifycss', watchify(function(){
    gulp.src(opt.srcCSS)
    //.pipe(changed(dest))
    .pipe(minifier({
        minify: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyJS: true,
        minifyCSS: true
    }))
    .pipe(concat(opt.minifyCSSFileName))
    .pipe(gulp.dest(opt.dest));
}));


gulp.task('default',function(){
    console.log('watching ' + opt.src);
    gulp.watch([opt.src], ['connomini']);
});

// Hack to enable configurable watchify watching
var watching = false;
gulp.task('enable-watch-mode', function() { watching = true; });

//Browserify and copy js files
gulp.task('browserify', watchify(function(watchify) {
    return gulp.src(opt.src)
        .pipe(watchify({
            watch:watching
        }))
        .pipe(gulp.dest(opt.dest));
}));

//Move destination files to another folder, defined with "prod"
gulp.task('toprod', function(){
    gulp.src(opt.dest + '/**/*.js')
    .pipe(gulp.dest(opt.prod));
});

//Watchify is based on browserify and enable-watch-mode
gulp.task('watchify', ['enable-watch-mode', 'browserify']);
