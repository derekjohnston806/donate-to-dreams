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
    webpack: {
      default: {
        entry: "./src/client.js",
        output: {
          path    : "public/scripts/",
          filename: "bundle.js"
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-webpack");

  grunt.registerTask("default", ["webpack"]);

};
