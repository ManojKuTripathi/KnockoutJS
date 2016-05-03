/**
 * http://usejsdoc.org/
 */

require([ 'js/lib/knockout-3.4.0',
          'js/vm/productsViewModel',
          'js/comp/product'], 
          
function(ko,productsViewModel,product) {
	
	
	ko.components.register('product-widget', product);
	
	ko.applyBindings(productsViewModel);
	
});