var Datastore = require('nedb');
var path = require('path');

module.exports = {
    inventory: new Datastore({ filename: path.resolve(__dirname,'db/inventory'), autoload: true }),
    category: new Datastore({ filename: path.resolve(__dirname,'db/category'), autoload: true }),
    users: new Datastore({ filename: path.resolve(__dirname,'db/users'), autoload: true }),
}