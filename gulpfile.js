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
    "src/client/assets/ui_images/**/*.*",
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
// Upload with ftp
var ftp = require( 'vinyl-ftp' );

//Tasks:

// Clear dist dir
gulp.task('clearDist', function () {
    console.log('Clearing dist dir');
    return gulp.src('dist', {read: false})
        .pipe(clean({force: true}));
});

//Concat js files and copy assets to dist
gulp.task('build', ['clearDist'], function(){
    
    console.log('Concating ', opt.appSrc);
    gulp.src(opt.appSrc)
    .pipe(concat(opt.appDest))
    .pipe(gulp.dest('dist'));


    console.log('Copying ', opt.appFileSrc);
    gulp.src(opt.appFileSrc)
    .pipe(gulp.dest('dist'));    


    console.log('Concating ', opt.cssSrc);
    gulp.src(opt.cssSrc)
    .pipe(concat(opt.cssFileName))
    .pipe(gulp.dest(('dist/assets/css')));


    console.log('Copying assets ', opt.assetsSrc);
    gulp.src(opt.assetsSrc, {base: './src/client'})
    .pipe(gulp.dest('./dist/'));


    console.log('Copying directive assets ', opt.directiveAssets);
    gulp.src(opt.directiveAssets)
    .pipe(gulp.dest(opt.directiveDest));

    
    console.log('Copying font files ', opt.fontSrc);
    gulp.src(opt.fontSrc)
    .pipe(gulp.dest(opt.fontDest));
    

    console.log('Copying server files ', opt.serverSrc);
    gulp.src(opt.serverSrc)
    .pipe(gulp.dest('./dist'));   


    console.log('Copying view files ', opt.viewsSrc);
    gulp.src(opt.viewsSrc)
    .pipe(gulp.dest('./dist'));   
});

gulp.task('deploy', function () {
 
    var conn = ftp.create( {
        host:     '***REMOVED***',
        user:     '***REMOVED***',
        password: '***REMOVED***',
        parallel: 10
    } );
 
    var globs = [
        'dist/**',
        'dist/.htaccess'
    ];
 
    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance
    return conn.rmdir( '/public_html/kildeviser-development', function(){
        gulp.src( globs, { base: './dist', buffer: false } )
        //  .pipe( conn.newer( '/public_html' ) ) // only upload newer files
            .pipe(conn.dest('/public_html/kildeviser-development'));
    });
     
} );

//Watchify is based on browserify and enable-watch-mode
gulp.task('watch', ['enable-watch-mode', 'build', 'deploy']);

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
