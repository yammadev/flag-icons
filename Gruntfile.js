// Wrapper
module.exports = function(grunt) {

  // Configuration
  grunt.initConfig({
    // Package
    pkg: grunt.file.readJSON('package.json'),

    // Banner
    banner: '/** \n' +
            ' * <%= pkg.name %> v.<%= pkg.version %> (<%= grunt.template.today("dd-mm-yyyy") %>) \n' +
            ' * <%= pkg.description %> \n' +
            ' * Visit <%= pkg.homepage %> for details. \n' +
            ' * Made by <%= pkg.author.name %> - <%= pkg.author.url %>. \n' +
            ' */',

    // Use
    usebanner: {
      build: {
        options: {
          position: 'top',
          banner: '<%= banner %>'
        },

        files: {
          src: ['css/<%= pkg.name %>.css', 'css/<%= pkg.name %>.min.css']
        }
      }
    },

    // Sass
    sass: {
      build: {
        options: {
          sourcemap: 'none',
          style: 'expanded',
          noCache: true
        },

        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },

    // Minify
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },

    // Check js
    jshint: {
      files: ['*.js'],
    },

    // Png
    svg2png: {
      all: {
        files: [{
          cwd: 'svg/',
          src: ['**/*.svg'],
          dest: 'png/'
        }]
      }
    },

    // Check for changes
    watch: {
      sass: {
        files: ['sass/*.scss'],
        tasks: ['build']
      },

      js: {
        files: ['*.js'],
        tasks: ['jshint']
      }
    }
  });

  // Load
  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-svg2png');

  // $ grunt build
  grunt.registerTask('build', ['sass', 'cssmin', 'usebanner']);

  // $ grunt | $ grunt default
  grunt.registerTask('default', ['watch']);
};
