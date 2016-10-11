angular.module('home').factory('homeService',homeService);


homeService.inject=[];

function homeService(){

    var service={
        setHomeType:setHomeType,
        getHomeType:getHomeType
    };
     
     
     function setHomeType(homeType){
         service.homeType=homeType;
     }

     function getHomeType(){
         if(service.homeType)
         return service.homeType;
         else 
            return 'news';
     }
     

    return service;

}