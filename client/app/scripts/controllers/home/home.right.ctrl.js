angular.module('home').controller('homeRightCtrl',homeRightCtrl);

homeRightCtrl.inject=['$scope']

function homeRightCtrl($scope){
    
     $scope.openNav=function() {
    document.getElementById("mySidenav").style.width = "250px";
    
}


}