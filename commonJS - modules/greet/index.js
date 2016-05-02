/**
 * http://usejsdoc.org/
 */

//
// var i=100;
// console.log('hello');
var en = require('./en-greet');
var es = require('./es-greet');

function greet(lang) {
	if (lang === 'en') {
		en.greet();
		en.getLang();
	}
	if (lang === 'es') {
		es();
	}
}

module.exports = greet;