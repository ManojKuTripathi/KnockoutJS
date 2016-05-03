/**
 * http://usejsdoc.org/
 */

define([ 'js/lib/knockout-3.4.0'], function(ko) {
	 
	function MyComponentViewModel(params) {
		this.name = params.name;
		this.price=params.price;
		this.desc=params.desc;
		this.canBuy=params.canBuy;
	}
	
	
	var htmlString="<div class=list-group-item>\
						<h3 data-bind=text:name></h3>\
						<h4 data-bind=text:price></h4>\
						<p data-bind=text:desc></p>\
						<button data-bind=disable:canBuy class='btn btn-primary'>Add to cart</button>\
					</div>";
	
	 // Return component definition
    return { viewModel: MyComponentViewModel, template: htmlString };
	
});
