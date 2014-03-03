module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      files: 'public/stylesheets/style.css',
      tasks: 'build'
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'public/stylesheets/',
        src: ['style.css'],
        dest: 'public/stylesheets/',
        ext: '.min.css'
      }
    },
    csslint: {
      strict: {
        options: {
          // used in micro-clearfix
          "star-property-hack": false
        },
        src: ['public/stylesheets/style.css']
      }
    }
  });

  grunt.registerTask('test', ['csslint']);
  grunt.registerTask('build', ['cssmin']);
  grunt.registerTask('default', ['test', 'build']);

};
