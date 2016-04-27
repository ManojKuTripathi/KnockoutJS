

// using DOM API  ( plain-JS )

// document.addEventListener('DOMContentLoaded',function(){
    
//     console.log('DOM Ready');

//     var nameInpField=document.querySelector('#nameInpField');
//     var greetSpan=document.querySelector('#greetSpan');

//     nameInpField.addEventListener('blur',function() {
//     var name=this.value; 
//     if(name){
//         greetSpan.innerHTML=name;    // data-binding
//     }
//     });
    
// });


/*

  Limitations/comlexities using plain-js in browser envi
  
  -> browser compatibility
  -> too much script even for simple oprn.
  -> performance & memory management..

  soln
  
    use JS libraries
    
    -> jQuery   ( most popular )
    

*/


// using DOM API  ( jQuery )

//$(document).ready(function(){});

$(function(){
    var greetSpan=$('#greetSpan');
    $("#nameInpField").on('blur',function(e){
        var name=$(this).val();
        if(name){
        greetSpan.text(name);
        }
    });
});

/*

    Limitations with JQuery
    
    --> too low-level with DOM API
    --> no Templating support.
    
    Soln:
    
    Higher-level JS Libray
    
    --> Knockout  based on MVVM design pattern
    
    
    ---------------------------------------------
    
    for large-scale browser-side JS-appln
    
    JS Frameworks
    
       wat f.w provide
       
       --> support for code organization
       --> routing support for SPA
      
      
      some F.W
      
      
      --> backbone
      --> Angular
      --> ember
      
      --> DOJO
      --> EXTJS
      
      ............
      
      

*/








