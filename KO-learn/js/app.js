

$(function(){
    
    
    // load data from sever-side  ( Model )
    
    // View Model
    var viewModel={
        course:"knockout",
        trainer:'nag'
    };
    
    ko.applyBindings(viewModel,$('#box1').get(0));
    
    
});







