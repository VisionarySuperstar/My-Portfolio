module.exports = function(grunt) {

    // Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Configuration for the LESS task
        less: {
            main: {
                options: {
                    paths: ['css'],
                    cleancss: false,
                    banner: '/*!\n' +
                        ' * Vitality v<%= pkg.version %> (http://themes.startbootstrap.com/vitality-v<%= pkg.version %>)\n' +
                        ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                        ' * To use this theme you must have a license purchased at WrapBootstrap (https://wrapbootstrap.com)\n' +
                        ' */\n',
                },
                files: {
                    'assets/css/vitality-red.css': 'assets/less/vitality.less'
                }
            },
            aqua: {
                options: {
                    paths: ['css'],
                    cleancss: false,
                    banner: '/*!\n' +
                        ' * Vitality v<%= pkg.version %> (http://themes.startbootstrap.com/vitality-v<%= pkg.version %>)\n' +
                        ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                        ' * To use this theme you must have a license purchased at WrapBootstrap (https://wrapbootstrap.com)\n' +
                        ' */\n',
                    modifyVars: {
                        themePrimary: '#38E6D8'
                    }
                },
                files: {
                    'assets/css/vitality-aqua.css': 'assets/less/vitality.less'
                }
            },
            blue: {
                options: {
                    paths: ['css'],
                    cleancss: false,
                    banner: '/*!\n' +
                        ' * Vitality v<%= pkg.version %> (http://themes.startbootstrap.com/vitality-v<%= pkg.version %>)\n' +
                        ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                        ' * To use this theme you must have a license purchased at WrapBootstrap (https://wrapbootstrap.com)\n' +
                        ' */\n',
                    modifyVars: {
                        themePrimary: '#0A8FD5'
                    }
                },
                files: {
                    'assets/css/vitality-blue.css': 'assets/less/vitality.less'
                }
            },
            green: {
                options: {
                    paths: ['css'],
                    cleancss: false,
                    banner: '/*!\n' +
                        ' * Vitality v<%= pkg.version %> (http://themes.startbootstrap.com/vitality-v<%= pkg.version %>)\n' +
                        ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                        ' * To use this theme you must have a license purchased at WrapBootstrap (https://wrapbootstrap.com)\n' +
                        ' */\n',
                    modifyVars: {
                        themePrimary: '#5CB85C'
                    }
                },
                files: {
                    'assets/css/vitality-green.css': 'assets/less/vitality.less'
                }
            },
            orange: {
                options: {
                    paths: ['css'],
                    cleancss: false,
                    banner: '/*!\n' +
                        ' * Vitality v<%= pkg.version %> (http://themes.startbootstrap.com/vitality-v<%= pkg.version %>)\n' +
                        ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                        ' * To use this theme you must have a license purchased at WrapBootstrap (https://wrapbootstrap.com)\n' +
                        ' */\n',
                    modifyVars: {
                        themePrimary: '#F26F21'
                    }
                },
                files: {
                    'assets/css/vitality-orange.css': 'assets/less/vitality.less'
                }
            },
            pink: {
                options: {
                    paths: ['css'],
                    cleancss: false,
                    banner: '/*!\n' +
                        ' * Vitality v<%= pkg.version %> (http://themes.startbootstrap.com/vitality-v<%= pkg.version %>)\n' +
                        ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                        ' * To use this theme you must have a license purchased at WrapBootstrap (https://wrapbootstrap.com)\n' +
                        ' */\n',
                    modifyVars: {
                        themePrimary: '#F62459'
                    }
                },
                files: {
                    'assets/css/vitality-pink.css': 'assets/less/vitality.less'
                }
            },
            purple: {
                options: {
                    paths: ['css'],
                    cleancss: false,
                    banner: '/*!\n' +
                        ' * Vitality v<%= pkg.version %> (http://themes.startbootstrap.com/vitality-v<%= pkg.version %>)\n' +
                        ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                        ' * To use this theme you must have a license purchased at WrapBootstrap (https://wrapbootstrap.com)\n' +
                        ' */\n',
                    modifyVars: {
                        themePrimary: '#AC5AFF'
                    }
                },
                files: {
                    'assets/css/vitality-purple.css': 'assets/less/vitality.less'
                }
            },
            tan: {
                options: {
                    paths: ['css'],
                    cleancss: false,
                    banner: '/*!\n' +
                        ' * Vitality v<%= pkg.version %> (http://themes.startbootstrap.com/vitality-v<%= pkg.version %>)\n' +
                        ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                        ' * To use this theme you must have a license purchased at WrapBootstrap (https://wrapbootstrap.com)\n' +
                        ' */\n',
                    modifyVars: {
                        themePrimary: '#C2B49A'
                    }
                },
                files: {
                    'assets/css/vitality-tan.css': 'assets/less/vitality.less'
                }
            },
            turquoise: {
                options: {
                    paths: ['css'],
                    cleancss: false,
                    banner: '/*!\n' +
                        ' * Vitality v<%= pkg.version %> (http://themes.startbootstrap.com/vitality-v<%= pkg.version %>)\n' +
                        ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                        ' * To use this theme you must have a license purchased at WrapBootstrap (https://wrapbootstrap.com)\n' +
                        ' */\n',
                    modifyVars: {
                        themePrimary: '#41C4AB'
                    }
                },
                files: {
                    'assets/css/vitality-turquoise.css': 'assets/less/vitality.less'
                }
            },
            yellow: {
                options: {
                    paths: ['css'],
                    cleancss: false,
                    banner: '/*!\n' +
                        ' * Vitality v<%= pkg.version %> (http://themes.startbootstrap.com/vitality-v<%= pkg.version %>)\n' +
                        ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                        ' * To use this theme you must have a license purchased at WrapBootstrap (https://wrapbootstrap.com)\n' +
                        ' */\n',
                    modifyVars: {
                        themePrimary: '#FFC153'
                    }
                },
                files: {
                    'assets/css/vitality-yellow.css': 'assets/less/vitality.less'
                }
            },
        },

        // Configuration for the watch task
        watch: {
            less: {
                files: ['assets/less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                }
            },
        }

    });

    // Load Tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Tasks
    grunt.registerTask('default', ['less']);
};
