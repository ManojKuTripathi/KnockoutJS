 
// var ViewModel=function(course,trainer){
    
//     this.course=ko.observable(course);
//     this.trainer=ko.observable(trainer);
    
//     var self=this;
    
//     this.courseDet=ko.computed(function(){
//         return "the course - "+self.course() +" by "+self.trainer();
//     });
    
// };

//ko.applyBindings(new ViewModel('ko','nag'));



var ItemViewModel=function(price,quantity){
    this.itemPrice=ko.observable(price);
    this.quantity=ko.observable(quantity);
    this.totalPrice=ko.computed({
        read:function(){
            return "$" +(this.itemPrice()*this.quantity()).toFixed(2);
        },
        write:function(value){
            // do validation
            value=parseFloat(value);
            var tempPrice=value/this.quantity();
            this.itemPrice(tempPrice);
        },
        owner:this
    });
}

ko.applyBindings(new ItemViewModel(100,10));