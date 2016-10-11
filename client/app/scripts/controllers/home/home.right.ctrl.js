angular.module('home').controller('homeRightCtrl',homeRightCtrl);

homeRightCtrl.inject=['$scope']

function homeRightCtrl($scope){
    
     $scope.openNav=function() {
    document.getElementById("mySidenav").style.width = "250px";
    
}

$scope.feeds=[];

for(var i=0;i<10;i++)
$scope.feeds.push({desc:"desx",currentTab:"tab1",
link:"http://localhost:9000/#/home/college"});

$scope.tab1="About";
$scope.tab2="Professors";
$scope.tab3="Students";

$scope.toggle=function(feed,tab){
feed.currentTab=tab;
}

}