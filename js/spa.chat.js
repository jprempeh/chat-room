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

    // Begin public method /initModule/
    // Example    : spa.chat.initModule( $('#div_id') );
    // Purpose    :
    //   Directs Chat to offer its capability to the user
    // Arguments  :
    //   * $append_target (example: $('#div_id')).
    //     A jQuery collection that should represent
    //     a single DOM container
    // Action     :
    //   Appends the chat slider to the provided container and fills
    //   it with HTML content.  It then initializes elements,
    //   events, and handlers to provide the user with a chat-room
    //   interface
    // Returns    : true on success, false on failure
    // Throws     : none
    //
    initModule = function ( $append_target ) {
        $append_target.append( configMap.main_html );
        stateMap.$append_target = $append_target;
        setJqueryMap();
        setPxSizes();

        // initialize chat slider to default title and state
        jqueryMap.$toggle.prop( 'title', configMap.slider_closed_title );
        jqueryMap.$head.click( onClickToggle );
        stateMap.position_type = 'closed';

        return true;
    };


}());