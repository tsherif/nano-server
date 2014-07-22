module.exports = function(grunt) {
  "use strict";
  
  grunt.initConfig({
    jshint: {
      options: {
        eqeqeq: true,
        undef: true,
        unused: true,
        strict: true,
        indent: 2,
        immed: true,
        latedef: "nofunc",
        newcap: true,
        nonew: true,
        trailing: true
      },
      all: {
        options: {
          node: true
        },
        src: ["nano-server",  "Gruntfile.js"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerTask("default", ["jshint"]);
};