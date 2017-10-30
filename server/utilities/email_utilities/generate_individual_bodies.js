const _ = require('lodash');
const logger = require('../logger.js');


function generate_body(linkObject) {
	var tabmailBody = `You asked LinkMeLater to save the following link: <a href="${linkObject.link_url}">${linkObject.link_title}</a>.There it is!`;
	return tabmailBody;
}
const generate_individual_bodies = function(linkObjectArray) {
	var bodyArray = [];
	_.each(linkObjectArray, function(linkObject) {
		bodyArray.push(generate_body(linkObject));
	});

	return bodyArray;
}
module.exports = generate_individual_bodies;