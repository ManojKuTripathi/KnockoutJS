/**
 * http://usejsdoc.org/
 */

function greet() {
	console.log('hello');
}

function getLang() {
	console.log('english');
}

// module.exports.greet = greet;
// module.exports.getLang = getLang;

var mod = {
	greet : greet,
	getLang : getLang
};

module.exports = mod;