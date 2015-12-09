module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      client: {
        src: ['src/client/app/**/*.js'],
        dest: 'src/client/dist/app.js',
        options: {
          watch: true,
          keepAlive: true,
          transform: ['hbsfy']
        }
      },
      specs: {
        src: ["src/client/**/*.spec.js"],
        dest: "src/client/dist/specs.js",
        options: {
          browserifyOptions: {
            debug: false,
            transform: ['hbsfy']
          }
        }
      }
    },

    uglify: {
      options: {
        compress: true
      },
      build: {
        src: 'src/client/dist/app.js',
        dest: 'src/client/dist/app.min.js'
      }
    },

    jasmine: {
      src: [],
      options: {
        specs: 'src/client/dist/specs.js',
        vendor: []
      }
    },

    watch: {
      all: {
        files: ['src/**/*.*', 'test/**/*.*'],
        tasks: ['test']
      },
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['browserify']);
  grunt.registerTask('test', ['browserify:specs', 'jasmine']);
};