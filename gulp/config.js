var src = 'app';
var template = 'craft/templates';
var build = 'build';
var srcAssets = src + '/assets';
var productionAssets = build + '/assets';
var configJson = require('./parameters.json');

module.exports = {
    // browsersync
    browsersync: {
        development: {
            logLevel: 'debug',
            browser: ['firefox'],
            notify: true,
            online: false,
            /*server: {
                baseDir: './',
                index: 'index.php',
            },
            */
            proxy: 'http://' + configJson.parameters.host.replace('.nl', '.dev'),
            port: 9000,
        },
    },
    // delete
    delete: {
        src: [productionAssets] + '/**',
        options: {
            read: false // much faster because it is not reading the files
        }
    },
    // watch
    watch: {
        sass: srcAssets + '/scss/**/*.{sass,scss}',
        javascript: srcAssets + '/js/**/*.js',
        html: template + '/**/*.html',
        images: srcAssets + 'images/**/*',

    },
    // javascript
    javascript: {
        src: [
            srcAssets + '/js/libs/jquery.min.js',
            srcAssets + '/js/libs/bootstrap.js',
            srcAssets + '/js/libs/*.js',
            srcAssets + '/js/*.js',
        ],
        dest: productionAssets + '/js',
    },
    // sass
    sass: {
        src: [
            srcAssets + '/scss/main.scss',
        ],
        dest: productionAssets + '/css',
        options: {
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.'],
            onError: console.error.bind(console, 'Sass error:'),
            bundleExec: true,
            errLogToConsole: true,
            noCache: true,
            compass: false,
        }
    },
    // autoprefixer
    autoprefixer: {
        browsers: [
            'last 2 versions',
            'safari 7',
            'ie 9',
            'opera 12.1',
            'ios 6',
            'android 4'
        ],
        cascade: true
    },
    // scss lint
    scsslint: {
        src: [
            srcAssets + 'scss/**/*.{sass,scss}',
            //'!' + development + 'css/scss/component/animate.scss', // '!' = excluding a file
        ],
        options: {
            'maxBuffer': 507200,
            'config': 'scss-lint.yml',
            'filePipeOutput': 'scssReport.json'
        }
    },
    //js hint
    jshint: {
        src: productionAssets + '/js/**/*.js'
    },
    // optimize
    optimize: {
        css: {
            src: productionAssets + '/css/*.css',
            dest: productionAssets + '/css/',
            options: {
                keepSpecialComments: 0
            }
        },
        js: {
            src: productionAssets + '/js/*.js',
            dest: productionAssets + '/js/',
            options: {}
        },
        images: {
            src: productionAssets + '/images/**/*.{jpg,jpeg,png,gif}',
            dest: productionAssets + '/images/',
            options: {
                optimizationLevel: 3,
                progessive: true,
                interlaced: true
            }
        }
    },
    // base 64 css images
    base64: {
        src: productionAssets + '/css/*.css',
        dest: productionAssets + '/css/',
        options: {
            baseDir: build,
            extensions: ['png'],
            maxImageSize: 20 * 1024, // bytes
            debug: false
        }
    },

    // ftp options
    ftp: {
        hostname: configJson.parameters.ftp_hostname,
        username: configJson.parameters.ftp_username,
        password: configJson.parameters.ftp_password,
        path: configJson.parameters.path,
    }
};
