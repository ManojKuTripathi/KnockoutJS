/**
 * http://usejsdoc.org/
 */

// var o = {
// doWork : function() {
// console.log('A work');
// }
// };
//

//-----------------------------------------------

//(function() {
//
//	var i = 10;
//
//	// need 'b.js' obj func
//	APP.b.doWork();
//
//	var o = {
//		doWork : function() {
//			console.log('A work');
//		}
//	};
//
//	APP.a = o;
//
//})();
//


//-----------------------------------------------


define('js/a',['js/b','js/c'],function(bmod,cmod){
	
	cmod.doWork();
	bmod.doWork();
	
	var o = {
		doWork : function() {
			console.log('A work');
		}
	};

	return o;
	
});




