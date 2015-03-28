// * step 1 *
var proto = {
    sentence   : 4,
    probation  : 2
};

// * step 2 *
var Prisoner  = function (name, id) {
    this.name = name;
    this.id   = id;
};

// * Step 3 *
Prisoner.prototype = proto;

// * step 4 *
var firstPrisoner = new Prisoner('Joe', '12A');

var secondPrisoner = new Prisoner('Party', '13C');

// using Object. create
//
var proto = {
    age  : 4,
    city : 'Patts'
};

var firstImp  = Object.create( proto );
firstImp.name = 'Party';
firstImp.id   = '14A';

var secondImp = Object.create( proto );
secondImp.name = 'Rain';
secondImp.id   = '16G';

// Use of Object.create with a factory function

var myPrototype = {
    venue : 'DD',
    ability : 'plug'
};

var makeImp = function( name, id ) {
    var imp = Object.create ( myPrototype );
    imp.name = name;
    imp.id   = id;

    return imp;
};

var numberOne = makeImp('Joy', 'B');
var numberTwo = makeImp('Dew', 'C');

// Cross-browser method to support Object.create()

var objectCreate = function ( arg ) {
    if (! arg ) { return {} }
    function obj() {};
    obj.prototype = arg;
    return new obj;
};

Object.create = Object.create || objectCreate;