//***********   GRUNT NEEDS ***************//
//  npm install grunt --save
//  npm install grunt-contrib-copy --save
//  npm install grunt-contrib-uglify --save
//  npm install grunt-contrib-jshint --save
//  npm install grunt-contrib-watch --save
//
//***********   GRUNT USES  ***************//
//  vendors:  jquery, bootstrap
//  client/app.js
//
//

module.exports = function(grunt){
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        expand: true,
        cwd: 'client/scripts/',
        src: '*.js',
        dest: 'server/public/assets/scripts/',
        ext: '.min.js'
      }
    },
    jshint:{
      files:['client/scripts/*.js', 'server/app.js', 'server/modules/*.js', 'server/models/*.js']
    },
    watch: {
      scripts:{
        files: ['client/*.js','server/app.js', 'server/modules/*.js','server/models/*.js'],
        tasks: ['jshint', 'uglify'],
        options:{
          spawn: false
        }
      }
    },
    copy: {
      angular: {
        expand: true,
        cwd: "node_modules/angular",
        src: [
          "angular.min.js",
          "angular.js",
          "angular.min.js.map"
        ],
        dest: "server/public/vendors/"
      },
      angularroute: {
        expand: true,
        cwd: "node_modules/angular-route",
        src: [
          "angular-route.min.js",
          "angular-route.js",
          "angular-route.min.js.map"
        ],
        dest: "server/public/vendors/"
      },
      bootstrap: {
        expand: true,
        cwd: "node_modules/bootstrap/dist/css/",
        src: [
          "bootstrap.min.css",
          "bootstrap.min.css.map"
        ],
        dest: "server/public/vendors"
      },
      html : {
         expand: true,
         cwd: 'client/views',
         src: [
            "*/*/*",  //four levels deep
            "*/*",    //two levels deep
            "*"       //one level deep
          ],
          "dest": "server/public/assets/views/"
       }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['copy','uglify','jshint']);

}
