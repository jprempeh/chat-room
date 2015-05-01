spa.chat = (function(){
// ---- BEGIN MODULE SCOPE VARIABLES ----
    var configMap = {
        main_html: String()
        + '<div style="padding: 1em; color: #FFF">'
        + 'Say hello to chat'
        + '</div>',
        stateMap: { $container: null },
        jqueryMap: {},
        setJqueryMap, configModule, initModule;
// ---- END MODULE SCOPE VARIABLES ----
// ---- BEGIN UTILITY SCOPE MODULES ----
// ---- END UTILITY SCOPE MODULES ----
// ---- BEGIN DOM METHODS ----
    // Begin DOM method /setjQueryMap/
    setJqueryMap = function() {
        var $container = stateMap.$container;
        jqueryMap = { $container : $container };
    };

// ---- END DOM METHODS----
}());