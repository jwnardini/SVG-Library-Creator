module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    svgstore: {
      options: {
        // includeTitleElement: false,
        prefix: 'icon-',
        cleanup: ['fill', false],
        formatting: {
          indent_size : 2
        },
        convertNameToId: function(name) {
            return name.replace(/^\w+\_/, '');
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
