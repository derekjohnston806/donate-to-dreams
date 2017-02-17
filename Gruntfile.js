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
      entry: "./src/main.js",
      output: {
        path: "dist/scripts/",
        filename: "bundle.js"
      }
    }
  });

  grunt.registerTask("default", ["webpack"]);

};
