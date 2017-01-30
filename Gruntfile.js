module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    svgstore: {
      options: {
        formatting: {
          indent_size : 2
        }},
      default: {
        files: {
          'includes/defs.svg': ['SVG/*.svg'],
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-svgstore');
};
