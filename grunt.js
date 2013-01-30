/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'JSQ.js']
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        white: false, // sod off about whitespace
        curly: false, // no curly braces required on one-line blocks
        eqeqeq: false, // fuzzy comparisons ok
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: false,
        boss: true,
        eqnull: true,
        browser: true,
        smarttabs: true, // don't warn about mixed spaces/tabs
        asi: true, // don't bug me about semicollons
        evil: true // allow eval (metaprogramming yo)
      },
      globals: {
        jQuery: false,
        _: false,        
        // Qunit Assertions
        assert: false,
        asyncTest: false,
        deepEqual: false,
        equal: false,
        expect: false,
        module: false,
        notDeepEqual: false,
        notEqual: false,
        notStrictEqual: false,
        ok: false,
        QUnit: false,
        raises: false,
        start: false,
        stop: false,
        strictEqual: false,
        test: false
      }
    },
    server: {
        port: 3000,
        base: '.'
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint server watch');

};
