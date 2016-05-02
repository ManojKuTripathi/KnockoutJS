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

var ProductsViewModel = function(products) {
	this.products = ko.observableArray(products);
};

var vm = new ProductsViewModel(products);

//--------------------------------------------------


ko.components.register('product-widget', {
	
    viewModel: function(params) {
        this.name =params.name;
        this.price=params.price;
        this.desc=params.desc;
        this.canBuy=params.canBuy;
    },
    template:  "<div class='list-group-item'>\
			        <h3 data-bind='text:name'></h3>\
	    			<h4 data-bind='text:price'></h4>\
	    			<p data-bind='text:desc'></p>\
	    			<button data-bind='visible:canBuy' class='btn btn-primary'>Add to cart</button>\
		       <\div>"
});


ko.applyBindings(vm);


//-----------------------------------------------------



