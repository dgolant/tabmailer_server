var mail_sender = require('./mail_sender.js');
require('dotenv').config();
const os = require('os');
var datastore_interface = require('../utilities/datastore_interface');
const util = require('util');

var user_activator = {

    sendUserActivationEmail: function(entity) {

        var hash = entity.data.user_hash;
        var env = os.hostname();
        var activation_url = process.env.DOMAIN + "/activateUser/" + hash;

        var email_body = "please visit the following link to activate your account: " + activation_url;
        var email_subject = "TabMailer Activation";

        mail_sender.sendEmail(entity.data.emailaddress, email_subject, email_body);
    },

    activateUser: function(userHash, cb) {
        datastore_interface.fetchUserForPropertyAndValue('user_hash', userHash, function(optionalUserEntities) {
        	var err = '';
        	if(!optionalUserEntities[0]){
        		err = 'No user found';
        		cb(err, null);
        		return;
        	}
        	userEntity = optionalUserEntities[0];
            datastore_interface.setValueForProperty(userEntity, 'activated', true, function(endUser) {
                cb(null, endUser);
            });
        });
    }
}








module.exports = user_activator;