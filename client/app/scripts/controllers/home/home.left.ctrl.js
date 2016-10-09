angular.module('home',[]);

angular.module('home').controller('homeLeftCtrl',homeLeftCtrl);

homeLeftCtrl.inject=['$scope']

function homeLeftCtrl($scope){
    
    $scope.toggleMenu=function(){
        
    }
}