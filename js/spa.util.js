/*
 * spa.util.js
 * General JavaScript utilities
 *
 *
 */

/*jslint          browser : true,  continue : true,
 devel  : true,  indent  : 2,     maxerr   : 50,
 newcap : true,  nomen   : true,  plusplus : true,
 regexp : true,  sloppy  : true,  vars     : false,
 white  : true
 */
/*global $, spa */

spa.util = (function () {
    var makeError, setConfigMap;

    // Begin Public constructor /makeError/
    // Purpose: a convenience wrapper to create an error object
    // Arguments:
    //   * name_text - the error name
    //   * msg_text  - long error message
    //   * data      - optional data attached to error object
    // Returns  : newly constructed error object
    // Throws   : none
    //
    makeError = function ( name_text, msg_text, data ) {
        var error     = new Error();
        error.name    = name_text;
        error.message = msg_text;

        if ( data ){ error.data = data; }

        return error;
    };
// End Public constructor /makeError/

// Add more methods later