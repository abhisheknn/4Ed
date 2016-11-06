angular.module('shared').factory('wslayer',wsLayer);


wsLayer.inject=['$http','$q'];

function wsLayer($http,$q){
    var getConfig={};
    var putConfig={};
    var postonfig={};
    var delConfig={};


    var service={
        get:get,
        put:put,
        post:post,
        delete:deleteRes,
         getGetConfig:getGetConfig,
         setGetConfig:setGetConfig
        //  getPutConfig:getPutConfig,
        //  setPutConfig:setPutConfig,
        //  getPostConfig:getPostConfig,
        //  setPostConfig:setPostConfig,
        //  getDelConfig:getDelConfig,
        //  setDelConfig:setDelConfig,

    };





    function formUrl(url,matrixParams,queryParams){
      if(matrixParams)
      if(matrixParams.length>0){
            for(var i=0;i<matrixParams.length;i++){
              url=url+';'+matrixParams[0].key+'='+matrixParams[0].value;
            }
      }   
        if(queryParams)
            if(queryParams.length>0){
              url=url+'?';
            for(var j=0;j<queryParams.length;j++){
               url=url+queryParams[0].key+'='+queryParams[0].value+'&';
            }
            url=url.slice(0,-1);
            }
            return url;
    }
     
     function get(url,matrixParams,queryParams){

           var deferred = $q.defer(); 
        
         var config={};
            config=getGetConfig();
            formUrl(url,matrixParams,queryParams);
            $http.get(url,config).then(function success(response){
              deferred.resolve(response);
            },function error(response){
              deferred.reject(response);
            });
            
            return deferred.promise;

     }

     function getGetConfig(){
       
       return {
         timeout:2000
          }
     }

      function setGetConfig(config){
       
     }


       function put(){

     }
   
       function post (){

     }
     
       function deleteRes(){

     }
   

    return service;

}