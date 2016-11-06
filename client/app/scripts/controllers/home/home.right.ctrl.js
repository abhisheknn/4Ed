angular.module('home').controller('homeRightCtrl',homeRightCtrl);

homeRightCtrl.inject=['$scope','homeRightService','homeService'];

function homeRightCtrl($scope,homeRightService,homeService){
    
     $scope.openNav=function() {
    document.getElementById("mySidenav").style.width = "250px";
    
}

$scope.viewType="summary";

$scope.$on('viewTypeChanged',function(event,data){
        if(homeService.getViewType()=="summary"){
            $scope.viewType="list";        
        }else{
            $scope.viewType="summary";
            }
    
});
$scope.feeds=[];

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