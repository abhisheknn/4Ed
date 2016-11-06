angular.module('home').factory('homeService',homeService);


homeService.inject=['$rootScope'];

function homeService($rootScope){
var viewType="summary";
    var service={
        setHomeType:setHomeType,
        getHomeType:getHomeType,
        setViewType:setViewType,
        getViewType:getViewType,
        viewType:viewType
        };
     
     function setViewType(type){
        service.viewType=type;
        $rootScope.$broadcast('viewTypeChanged',type);
     }
     function getViewType(){
         return service.viewType;
     }
     
     function setHomeType(homeType){
         service.homeType=homeType;
     }

     function getHomeType(){
         if(service.homeType)
         return service.homeType;
         else 
            return 'feed';
     }
     

    return service;

}