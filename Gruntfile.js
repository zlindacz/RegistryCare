module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [
            {
              name: "small",
              width: 250,
              quality: 100
            }, {
              upscale: true,
              name: "large",
              width: 600,
              quality: 80
            }
          ]
        },
        files: [{
          expand: true,
          src: '*.{jpg, gif, jpeg, png}',
          cwd: 'app/assets/images/profile_pictures',
          dest: 'app/assets/images/cloudinary/'
        }]
      }
    },

    // Clear out the cloudinary directory if it exists
    clean: {
      dev: {
        src: ['app/assets/images/cloudinary']
      }
    },

    // Generates the cloudinary directory if it doesn't already exist
    mkdir: {
      dev: {
        options: {
          create: ['app/assets/images/cloudinary']
        }
      }
    },

    // watch: {
    //   sass: {
    //     files: 'app/assets/stylesheets/*.scss',
    //     tasks: ['sass']
    //   }
    // },
  });

  grunt.registerTask('default', [
    'clean',
    'mkdir',
    'responsive_images',
    // 'watch',
  ]);
};
