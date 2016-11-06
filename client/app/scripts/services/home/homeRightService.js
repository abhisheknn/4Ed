angular.module('home').service('homeRightService',homeRightService);


homeRightService.inject=['wslayer','$q'];

function homeRightService(wslayer,$q){

    this.getFeeds=function(){
        var deferred = $q.defer(); 
           
        wslayer.get("http://localhost:8080/ConnectEd/rest/college/getAllCollegesAboutInfo").then(function(response){
           deferred.resolve(response); 
           
        });
        return deferred.promise;
}    

return this;
}