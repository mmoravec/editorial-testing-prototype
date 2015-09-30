module.exports = function(grunt) {

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        uglify : {
            options : {
                mangle : {
                    except : ['jQuery']
                }
            },
            my_target : {
                files : {
                    'public/js/main.min.js' : [
                        'assets/js/gsap/main-gsap.js',
                        'assets/js/jquery-ui/js/jquery-ui-1.10.3.minimal.min.js',
                        'assets/js/bootstrap.js',
                        'assets/js/joinable.js',
                        'assets/js/resizeable.js',
                        'assets/js/neon-api.js',
                        'assets/js/jvectormap/jquery-jvectormap-1.2.2.min.js',
                        'assets/js/jvectormap/jquery-jvectormap-europe-merc-en.js',
                        'assets/js/jquery.sparkline.min.js',
                        'assets/js/rickshaw/vendor/d3.v3.js',
                        'assets/js/rickshaw/rickshaw.min.js',
                        'assets/js/raphael-min.js',
                        'assets/js/toastr.js',
                        'assets/js/neon-chat.js',
                        'assets/js/neon-custom.js',
                        'assets/js/neon-demo.js',
                    ]
                }
            }
        },
        cssmin : {
            compress : {
                files : {
                    "public/css/main.min.css" : [
                        'assets/js/jquery-ui/css/no-theme/jquery-ui-1.10.3.custom.min.css',
                        'assets/css/font-icons/entypo/css/entypo.css',
                        'assets/css/bootstrap.css',
                        'assets/css/neon-core.css',
                        'assets/css/neon-theme.css',
                        'assets/css/neon-forms.css',
                        'assets/css/custom.css',
                        'assets/js/jvectormap/jquery-jvectormap-1.2.2.css',
                        'assets/js/rickshaw/rickshaw.min.css'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify', 'cssmin']);
};
