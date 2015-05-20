module.exports = (grunt) ->
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-karma')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-coffeelint')
  grunt.loadNpmTasks('grunt-bumpx')

  grunt.initConfig(
    pkg:
      grunt.file.readJSON('package.json')
    bump:
      options:
        part: 'patch'
      files: [ 'package.json', 'bower.json']
    copy:
      angular:
        files: [
          cwd: 'bower_components/angular/'
          src: [
            'angular.min.js'
            'angular.min.js.map'
          ]
          dest: 'dist'
          expand: true
          filter: 'isFile'
        ]
    coffee:
      options:
        bare: true
      main:
        files:
          'dist/ng-spinner.js': [
            'src/ng-spinner.coffee'
          ]
    uglify:
      main:
        files:
          'ng-spinner.min.js': [
            'dist/ng-spinner.js'
          ]
    watch:
      html:
        files: [
          'src/*.html'
        ]
      coffee:
        files: [
          'src/*.coffee'
        ]
        tasks: ['coffee']
  )
  grunt.registerTask('dev', [
    'copy',
    'coffee'
  ])
  grunt.registerTask('dist', [
    'dev'
    'uglify'
  ])
  grunt.registerTask('deploy', [
    'bump'
    'dist'
  ])
  grunt.registerTask('default', ['dist'])
