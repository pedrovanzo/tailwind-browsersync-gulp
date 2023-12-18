const { watch, series } = require('gulp')
const browsersync = require('browser-sync').create();
// Browsersync Tasks
function browsersyncServe(cb){
    browsersync.init({
        // server: {
        //     baseDir: './views/'
        // }
        proxy: 'http://localhost:3000', // Your Express app URL
        port: 3000, // BrowserSync will run on port 3000
    });
    cb();
}
function browsersyncReload(cb){
    browsersync.reload();
    cb();
}
// Watch Task
function watchTask(){
    watch('./views/*.ejs', browsersyncReload);
    watch('../public/*.css', browsersyncReload);
}
// Default Gulp Task
exports.default = series(
    browsersyncServe,
    watchTask,
);