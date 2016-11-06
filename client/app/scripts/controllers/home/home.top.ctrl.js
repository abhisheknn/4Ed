angular.module('home').controller('homeTopCtrl',homeTopCtrl);

homeTopCtrl.inject=['$scope','homeService']

function homeTopCtrl($scope,homeService){
    
    $scope.toggleMenu=function(){
        
    }

    $scope.viewType="summary"
    
    $scope.toggleViewType=function(type){
        homeService.setViewType(type);
        if(type=="summary"){
            $scope.viewType="list";
        }
        else if(type=="list"){
            $scope.viewType="summary";
        }
    }
}