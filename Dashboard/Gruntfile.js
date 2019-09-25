/// <binding ProjectOpened='ngBuild' />
// <binding Clean='ngBuild' />
module.exports = function (grunt) {

    // Task Load
    grunt.loadNpmTasks('grunt-shell');
    // Project configuration.
    
    grunt.initConfig({
        config: grunt.file.readJSON('appsettings.json'),
        shell: {
            command: ["cd <%=config.angulardir%>","ng build --deploy-url=/Ang-Dashboard/dist/Ang-Dashboard/ --watch"].join('&&')

        }

    });

    // Default task(s).
    grunt.registerTask('ngBuild',['shell']);
   

};