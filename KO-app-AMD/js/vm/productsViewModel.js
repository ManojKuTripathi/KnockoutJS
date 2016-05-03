/**
 * http://usejsdoc.org/
 * 
 * 
 */

// AMD module..
define([ 'js/lib/knockout-3.4.0' ], function(ko) {

	// ViewModel

	var ProductViewModel = function() {
		this.products = ko.observableArray();
		this.addToCart = function(id) {
			console.log('adding to cart , id=' + id);
		};
	};

	var vm = new ProductViewModel();

	// Model
	// -------------------------------------------------
	// load 'products' from server-side
	var url = "http://0.0.0.0:3000/api/products";
	$.getJSON(url, function(data) {
		vm.products(data);
	})
	// -------------------------------------------------

	return vm;

});

// --------------------------------------------------
