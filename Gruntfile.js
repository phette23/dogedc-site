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
          "star-property-hack": false,
          "adjoining-classes": false
        },
        src: ['public/stylesheets/style.css']
      }
    },
    exec: {
      server: {
        cmd: 'nodemon app & grunt watch'
      }
    }
  });

  grunt.registerTask('test', ['csslint']);
  grunt.registerTask('build', ['cssmin']);
  grunt.registerTask('server', ['exec']);
  grunt.registerTask('default', ['test', 'build']);

};
