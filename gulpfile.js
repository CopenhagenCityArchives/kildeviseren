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
const { src, dest, series, parallel, watch } = require('gulp');
//Options
var opt = {};


// All js files except test files are concatenated
opt.appSrc = [
    "src/client/assets/js/plugins/leaflet.js", 
    "src/client/assets/js/**/*.js",
    "src/client/directives/*.js",
    "src/client/controllers/*.js",
    "src/client/services/*.js",
    '!src/client/services/mocks.js'
];
opt.appDest = "concat.js";

opt.appFileSrc = "src/client/app.js";

// All assets are copied
opt.assetsSrc = [
    "src/client/assets/fonts/**/*.*",
    "src/client/assets/img/**/*.*",
    "src/client/assets/js/**/*.*",
    //"src/client/assets/ui_images/**/*.*",
    "src/client/assets/favicon.ico"
];

// Assets for directives are copied
opt.directiveAssets = [
    "src/client/directives/*.png",
    "src/client/directives/*.css",
]
opt.directiveDest = 'dist/assets/css';

opt.cssSrc = [
    "src/client/assets/css/custom-theme/jquery-ui.min.css", 
    "src/client/assets/css/leaflet.css",
    "src/client/assets/css/bootstrap.min.css",
    "src/client/directives/chosen.css",
    "src/client/assets/css/extras.css",
    "src/client/assets/css/style.css"
];
opt.cssFileName = "concat.css";

opt.fontSrc = "src/client/assets/fonts/*.*";
opt.fontDest = "dist/fonts/"

// Views are copied
opt.viewsSrc = "src/client/views/*.html";

// All server files are put in server folder
opt.serverSrc = ["src/server/**", "src/server/.htaccess"];


//Dependencies:

//Gulp!!!
var gulp = require('gulp');
//Put files together in a single file
var concat = require('gulp-concat');
//Remove files and folders
var clean = require('gulp-clean');
// Upload with ftp
var ftp = require( 'vinyl-ftp' );
// Webserver with LiveReload
var connect = require( 'gulp-connect');

//Tasks:

// Clear dist dir
//gulp.task('clearDist', function () {
function clearDist() {
    //console.log('Clearing dist dir');
    return src('dist', {read: false, allowEmpty: true})
        .pipe(clean({force: true}));
};

function concatAngularApp(){
    //console.log('Concating ', opt.appSrc);
    return src(opt.appSrc)
        .pipe(concat(opt.appDest))
        .pipe(dest('dist'));
}

function copyAppFile(){
    //console.log('Copying ', opt.appFileSrc);
    return src(opt.appFileSrc)
        .pipe(dest('dist'));  
}

function concatCssFile(){
    //console.log('Concating ', opt.cssSrc);
    return src(opt.cssSrc)
        .pipe(concat(opt.cssFileName))
        .pipe(dest(('dist/assets/css')));
}

function copyAssets(){
    //console.log('Copying assets ', opt.assetsSrc);
    return src(opt.assetsSrc, {base: './src/client'})
        .pipe(dest('./dist/'));
}

function copyDirectiveAssets(){
    //console.log('Copying directive assets ', opt.directiveAssets);
    return src(opt.directiveAssets)
        .pipe(dest(opt.directiveDest));
}

function copyFontFiles(){
    //console.log('Copying font files ', opt.fontSrc);
    return src(opt.fontSrc)
        .pipe(dest(opt.fontDest));
}

function copyServerFiles(){
    //console.log('Copying server files ', opt.serverSrc);
    return src(opt.serverSrc)
        .pipe(dest('./dist')); 
}

function copyViewFiles(){
    //console.log('Copying view files ', opt.viewsSrc);
    return src(opt.viewsSrc)
        .pipe(dest('./dist'));   
}

var conn = ftp.create( {
    host:     '***REMOVED***',
    user:     '***REMOVED***',
    password: '***REMOVED***',
    parallel: 10
} );

function deploy(){
    var globs = [
        'dist/**',
        'dist/.htaccess'
    ];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance
    return src(globs, {base: './dist', buffer: false})
        .pipe(conn.dest('/public_html/kildeviser-development'));
};

function removeFTPFiles(cb){
    conn.rmdir( '/public_html/kildeviser-development', cb);
}

function watcher(){
    return watch(['src/client/**/*.*','src/server/**/*.*'], { delay: 500 }, build);
}

function startWebserver(cb){
    
    connect.server({
        root: './dist',
        livereload: true,
        fallback: 'index.html#!?collection=2&item=3809251'
      });

      cb();
}

function reloadWebserver(){
    return src('./dist')
        .pipe(connect.reload());
}

var build = series(clearDist, parallel(concatAngularApp, copyAppFile, concatCssFile, copyAssets, copyDirectiveAssets, copyFontFiles, copyServerFiles, copyViewFiles), reloadWebserver);
var deploy = series(removeFTPFiles, deploy);

exports.build = build;
exports.watch = series(startWebserver, watcher);
exports.webserver = startWebserver;
