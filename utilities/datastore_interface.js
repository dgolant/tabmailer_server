const Datastore = require('@google-cloud/datastore');
var hash = require('object-hash');


// Refactor this into its own file later
// *****************************************************************

const projectId = 'tabmailer-174400';

// Instantiates a client
const datastoreClient = Datastore({
    projectId: projectId
});

if (process.env.NODE_ENV === 'development') {
    var config = {
        projectId: projectId,
        keyFilename: '../keys/tabmailer-946de2b4591a.json'
    };
}


// *****************************************************************

var datastore_interface = {

    var fetchUserForPropertyAndValue = function(property, value, callback) {

        var query = datastoreClient.createQuery('tabmailer_user');
        //fix this later to use authkey


        datastoreClient.runQuery(query, function(err, entities) {
            var userEntities = entities;
            if (!userEntities) {
                callback(false); // no user found
            } else {
                callback(userEntities);
            }
        });
    }
}

module.exports = datastore_interface;