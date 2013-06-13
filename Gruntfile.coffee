config =
  requirejs:
    compile:
      options:
        mainConfigFile: 'app/config.js'
        out: 'assets/src/deckr.js'
        optimize: 'uglify2'
        wrap: false
        preserveLicenseComments: false
        almond: true


module.exports = (grunt) ->

  grunt.initConfig( config )

  grunt.loadNpmTasks('grunt-requirejs')
  grunt.loadNpmTasks('grunt-devtools')

  grunt.registerTask('default', ['requirejs'])
