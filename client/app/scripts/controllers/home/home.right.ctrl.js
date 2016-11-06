angular.module('home').controller('homeRightCtrl',homeRightCtrl);

homeRightCtrl.inject=['$scope','homeRightService'];

function homeRightCtrl($scope,homeRightService){
    
     $scope.openNav=function() {
    document.getElementById("mySidenav").style.width = "250px";
    
}

$scope.viewType="summary";

$scope.feeds=[];

// for(var i=0;i<10;i++)
// $scope.feeds.push({desc:"desx",currentTab:"tab1",
// link:"http://localhost:9000/#/home/college"});
homeRightService.getFeeds().then(function(response){
$scope.feeds=response.data;
for(var i=0;i<$scope.feeds.length;i++){
    $scope.feeds[i].currentTab="tab1";
}
});



$scope.tab1="About";
$scope.tab2="Professors";
$scope.tab3="Students";

$scope.toggle=function(feed,tab){
feed.currentTab=tab;
switch(tab){
    case 'tab1':
    case 'tab2':
            $scope.professors=[{professor:"chu1"},{professor:"chu2"},{professor:"chu3"},{professor:"chu4"},{professor:"chu5"}]
    case 'tab3':
            $scope.students=[{students:"chu1"},{students:"chu2"},{students:"chu3"},{students:"chu4"},{students:"chu5"}]
}
}

}