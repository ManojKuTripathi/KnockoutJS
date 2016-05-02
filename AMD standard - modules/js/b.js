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


define('js/b',[],function(){
	
	var o = {
		doWork : function() {
			console.log('B work');
		}
	};

	return o;
	
});




