module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*']
    });

    var rewriteRule1 = '(^\/rest.*) $1 [L]';
    var rewriteRule2 = '!\\.html|\\.js|\\.less|\\.css|\\.gif|\\.jpeg|\\.jpg|\\.png|\\.webp|\\.svg|\\.eot|\\.woff|\\.ttf|\\.docx|\\.pdf$ /index.html [L]';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 9001,
                    middleware: function (connect) {
                        var serveStatic = require('serve-static');
                        return [
                            require('grunt-connect-prism/middleware'),
                            //require('connect-modrewrite')([rewriteRule1, rewriteRule2]),
                            connect().use('/bower_components', serveStatic('./bower_components')),
                            connect().use('/fonts', serveStatic('./bower_components/open-sans-fontface/fonts')),
                            //connect().use('/images', connect.static('./images')),
                            //connect().use('/data', connect.static('./data')),
                            connect().use('/app', serveStatic('./app')),
                            connect().use('/data', serveStatic('./data')),
                            serveStatic('app')
                        ];
                    }
                }
            }
        },
        watch: {
            main: {
                options: {
                    livereload: true,
                    livereloadOnError: true,
                    spawn: false
                },
                files: ['app/**/*.less', 'app/**/*.js', 'app/**/*.html'],
                tasks: [] //all the tasks are run dynamically during the watch event handler
            },
            express: {
                files: ['server/server.js'],
                tasks: ['express:dev'],
                options: {
                    spawn: false
                }
            }
        },
        prism :{
            options: {
                host: 'localhost',
                port: '3000',
                context: '/rest',
                mode: 'proxy'
            }
        },
        express: {
            options: {
                port: 9002
            }
        }
    });

    grunt.registerTask('serve', ['prism', 'connect', 'express', 'watch']);

};