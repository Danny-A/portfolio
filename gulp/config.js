var src = 'app';
var template = 'craft/templates';
var srcAssets = 'src';
var productionAssets = 'public';

// Source and destination paths for tasks:
var path = {
	npm: 'node_modules'
};

module.exports = {
    // browsersync
    browsersync: {
      logLevel: 'debug',
      notify: true,
      online: false,
      proxy: 'https://portfolio.dev/',
      port: 3000,
    },
    // watch
    watch: {
      sass: srcAssets + '/styles/**/*.{sass,scss}',
      javascript: srcAssets + '/scripts/**/*.js',
      images: srcAssets + '/images/**/*.{gif,jpg,jpeg,png,svg}',
      html: template + '/**/*.{twig,html}',
    },
    // javascript
    javascript: {
      src: [
        srcAssets + '/scripts/vendor/*.js',
        srcAssets + '/scripts/component/**/*.js',
        srcAssets + '/scripts/*.js',
      ],
      dest: productionAssets + '/scripts',
    },
    // sass
    styles: {
      src: [
          srcAssets + '/styles/application.scss',
      ],
      dest: productionAssets + '/styles',
      options: {
        outputStyle: 'expanded',
        precision: 10,
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
        'safari 8',
        'ie 9',
        'ios 7',
        'android 4'
      ],
      cascade: true
    },
    // style lint
    stylelint: {
      src: [
        srcAssets + '/styles/**/*.{sass,scss}',
        //'!' + srcAssets + '/styles/components/_1-animate.scss', // '!' = excluding a file
        //'!' + srcAssets + '/styles/components/animation/**/*.scss', // '!' = excluding a file
      ],
      options: {
        configFile: 'sass-lint.yml'
      }
    },
    //js hint
    jshint: {
      src: srcAssets + '/scripts/{,*/}*.js'
    },
    // optimize
    optimize: {
      styles: {
        src: productionAssets + '/styles/*.css',
        dest: productionAssets + '/styles/',
        options: {
          keepSpecialComments: 0
        }
      },
      javascript: {
        src: productionAssets + '/scripts/*.js',
        dest: productionAssets + '/scripts/',
        options: {}
      },
      images: {
        src: srcAssets + '/images/**/*.{gif,jpg,jpeg,png,svg}',
        dest: productionAssets + '/images/',
        options: {
    			progressive: true,
    			interlaced: true,
    			svgoPlugins: [
    				{ removeDoctype: false } // Keeps IE happy
    			]
        }
      }
    },
};
