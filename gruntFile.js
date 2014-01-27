/*global module:false*/

// The "wrapper" function
module.exports = function (grunt) {
	'use strict';
	
	var appJS = 'src/app/**/*.js';
	var commonJS = 'src/common/**/*.js';
	
    // Project and task configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
		
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        meta: {
            name: "bham"
        },
		
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: [appJS, commonJS],
                dest: 'dist/app/<%= pkg.name %>.js'
            }
        },
		
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                 src: '<%= concat.dist.dest %>',
                 dest: 'dist/app/<%= pkg.name %>.min.js'
            }
            // prod: { files: jsFiles }
        },
		
        jshint: {
            options: {                
				globals: {
					"describe"   : false,
					"it"         : false,
					"by"         : false,
					"browser"    : false,
					"expect"     : false,
					"before"     : false,
					"beforeEach" : false,
					"after"      : false,
					"afterEach"  : false,
					"inject"     : false,
					"element"    : false,
					"angular"    : false,
					"exports"    : false,
					"console"    : false
				}
            },
            all: {
                src: ['Gruntfile.js', appJS, commonJS, 'test/unit/*.js', 'test/e2e/*.js', 'test/config/*.js']
            }
        },
		
        watch: {
            all: {
                files: '<%= jshint.all.src %>',
                tasks: ['jshint:all']
            }           
        }, 
		
        clean: {
            all: [
                'tmp',                             
                'build'
            ]
        },
		
        copy: {
            release: {
                files: [
                    {
						expand: true,
						dest: 'build/',
						src: [
							'src/*.html',
							'dist/css/bham.min.css',
							'dist/app/bham.min.js',
							'src/assets/avatars/*', 
							'src/assets/font/*',
							'src/assets/images/**/*', 
							'src/assets/img/*',
							'src/assets/css/**/*',
							'src/assets/js/**/*.js',
							'src/app/**/*.html',
							'vendor/angular/*.min.js',
							'vendor/angular-route/*.min.js',
							'vendor/angular-resource/*.min.js',
							'vendor/angular-sanitize/*.min.js'
						]
                    }
                ]
            }
        },   
		
		recess: {
			build: {
				files: {
					'dist/css/bham.css':['src/less/bham.less'] },
				options: {
					compile: true
				}
			},
			min: {
				files: {
					'dist/css/bham.min.css': ['src/less/bham.less']
				},
				options: {
					compress: true
				}
			}
		},
		
        'git-describe': { 
			me: {} 
		},
		
        karma: {
			options: { configFile: 'test/config/karma.conf.js'  },            
            watch: {              
                singleRun: false,
                autoWatch: true
            },
			continuous: {
				singleRun: true,            
				reporters: ['dots', 'junit'],
						junitReporter: {
						outputFile: 'test-results.xml'
				}
          }
        },
		
		protractor: {
          options: {
              configFile: "node_modules/protractor/referenceConf.js", // Default config file
              keepAlive: true, // If false, the grunt process stops when the test fails.
              noColor: false, // If true, protractor will not use colors in its output.
              args: {
                  // Arguments passed to the command
              }
          },
          e2e: {
              options: {
                  configFile: "test/config/protractor.conf.js", // Target-specific config file
                  args: {} // Target-specific arguments
              }
          }
		}
    });

    grunt.registerTask('test', 'Run tests in real browser', [      
		'recess:min',
		'jshint',
		'karma:continuous',
        'protractor'		
    ]);
	
	grunt.registerTask('jenkins', 'Run all the tasks for the Jenkins pipeline', [
        'recess:min',
		'jshint',
		'karma:continuous',
		'protractor',
        'concat',
		'uglify',
        'save-version',
		'copy:release'		
    ]);
	
    grunt.registerTask('release', 'Generates a release of the application', [
        'test',
        'uglify:prod',
        'save-version',
        'copy:release'
    ]);
	
    // Default task.
    grunt.registerTask('default', ['clean','jshint', 'concat', 'uglify', 'recess:min','copy']);
	
    // "Basic" Tasks
    grunt.registerTask('version', 'Shows version number', function () {
        var pkg = grunt.file.readJSON('package.json');
        //console.log(pkg.name, pkg.version);
    });
	
	//CI tasks
	grunt.registerTask('runRecess', 'Lint and minify css and less files', ['recess:min']);
	grunt.registerTask('runJSHint', 'Lint JS files', ['jshint']);
	grunt.registerTask('runKarma', 'Unit testing in real browser', ['karma:continuous']);
	grunt.registerTask('runProtractor', 'End to End integration test', ['protractor']);
	grunt.registerTask('runConcat', 'Concat all JS files', ['concat']);
	grunt.registerTask('runUglify', 'Minify the concat JS files', ['uglify']);
	grunt.registerTask('runSaveVersion', 'Save the current version', ['save-version']);
	grunt.registerTask('runCopyRelease', 'Copy release files in the dist folder', ['copy']);

    // Custom Tasks
    grunt.registerTask('save-version', function () {
        grunt.event.once('git-describe', function (rev) {
            //grunt.log.writeln("Git Revision: " + rev);
            grunt.file.write('.tmp/version.json', JSON.stringify({
                version: grunt.config('pkg.version'),
                revision: rev[3],
                date: grunt.template.today()
            }));
        });
        grunt.task.run('git-describe');
    });
	
    [ // load plugins which provide necessary tasks.
		'grunt-contrib-jshint',
		'grunt-contrib-uglify',
		'grunt-contrib-watch',	
		'grunt-contrib-concat',
		'grunt-contrib-less',	
		'grunt-recess',
		'grunt-contrib-clean',
		'grunt-contrib-copy',
		'grunt-html2js',
		'grunt-karma', 
		'grunt-git-describe',
		'grunt-protractor-runner',			
    ].forEach(grunt.loadNpmTasks);
	
};
