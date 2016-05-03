/**
 * http://usejsdoc.org/
 */

// Model
// -------------------------------------------------
// load 'products' from server-side

var products = [ {
	id : 123123,
	name : 'Laptop',
	price : 198000,
	desc : 'New Model',
	canBuy:false
}, {
	id : 324234,
	name : 'Mobile',
	price : 18000,
	desc : 'New Model',
	canBuy:true
} ];

// -------------------------------------------------

// ViewModel

var ProductViewModel = function(products) {
	this.products = ko.observableArray(products);
	this.addToCart=function(id){
		console.log('adding to cart , id='+id);
	};
};

// --------------------------------------------------

var vm = new ProductViewModel(products);
ko.applyBindings(vm);

//---------------------------------------------------
