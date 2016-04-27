

var ListViewModel=function(courses){
    var self=this;
    self.courses=ko.observableArray(courses);
    self.newCourse=ko.observable("");
    self.addNewCourse=function(){
        if(self.newCourse()){
            self.courses.push(self.newCourse())
            self.newCourse("");
        }
    }
}

ko.applyBindings(new ListViewModel(['js','java','node']));