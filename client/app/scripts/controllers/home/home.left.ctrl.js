angular.module('home').controller('homeLeftCtrl',homeLeftCtrl);

homeLeftCtrl.inject=['$scope'];

function homeLeftCtrl($scope){
    

    $scope.toggleMenu=function(){
        
    }
 $scope.closeNav=function() {
    document.getElementById("mySidenav").style.width = "0";
   
}
}