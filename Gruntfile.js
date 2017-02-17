/**
    Gruntfile.js

    @author:
      - Derek Johnston

    @desc:
      - The configuration file for the project's Grunt taskrunner.
*/
module.exports = function (grunt) {
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      src: {
        files: 'src/**/*.js',
        tasks: ["start"],
      },
      options: {
        interrupt: true
      }
    },
    uglify: {
      dist: {
        files: {
          'public/scripts/bundle.min.js': ['public/scripts/bundle.js']
        }
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ["latest", "react"]
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['*.js'],
            dest: 'dist/'
          }
        ]
      }
    },
    webpack: {
      default: {
        entry: "./dist/client.js",
        output: {
          path    : "public/scripts/",
          filename: "bundle.js"
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-webpack");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("start", ["babel", "webpack", "uglify"]);
  grunt.registerTask("default", ["watch"]);
};
