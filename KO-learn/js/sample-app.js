// 
// initial list of books ( Model )  // AJAX
var initialPubs = [ {
	name : "Prentice hall",
	books : [ {
		title : "C#",
		author : "Johnson",
		price : 34.99
	}, {
		title : "JavaScript",
		author : "Flin",
		price : 45.99
	} ]
}, {
	name : "Wiley",
	books : [ {
		title : "jQuery",
		author : "Allen",
		price : 49.97
	}, {
		title : "Visual Basic.NET",
		author : "Gates",
		price : 59.99
	} ]
} ];



// ViewModel;
var PubViewModel = function(pubs) {
	
	var self = this;
	
	self.publishers = ko.observableArray(ko.utils.arrayMap(pubs, function(pub) {
		return {
			name : pub.name,
			books : ko.observableArray(pub.books)
		};
	}));

	self.addPub = function() {
		self.publishers.push({
			name : "",
			books : ko.observableArray()
		});
	};

	self.removePub = function(pub) {
		self.publishers.remove(pub);
	};

	self.addBook = function(pub) {
		pub.books.push({
			title : "",
			author : "",
			price : 0
		});
	};

	self.removeBook = function(book) {
		$.each(self.publishers(), function() {
			this.books.remove(book);
		});
	};

   


	self.save = function() {
		// null is the 'replacer', 2 Causes the resulting string to be pretty-printed.
		self.pubJSON(JSON.stringify(ko.toJS(self.publishers), null, 2));
		
	};
    
    
	
	 self.pubJSON = ko.observable("");

};



ko.applyBindings(new PubViewModel(initialPubs));