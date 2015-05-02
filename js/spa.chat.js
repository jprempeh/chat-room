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
// ---- BEGIN PUBLIC METHODS ----
configModule = function(input_map) {
    spa.util.setConfigMap({
    input_map: input_map,
    settable_map: configMap.settable_map,
    config_map: configMap

});
    return true;
};


}());