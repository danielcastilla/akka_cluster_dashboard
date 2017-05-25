  var ctrModule = angular.module('MngNodesApp.controllers', []);



  ctrModule.controller('nodesController', function($scope, clusterAPIservice) {
        $scope.nameFilter = null;
        $scope.nodesList = [];
        $scope.selfNode = null;
        $scope.head=["node","nodeUid","status","roles"];
        clusterAPIservice.getNodes().success(function (response) {
          $scope.nodesList = response.members;
          $scope.selNode = response.selfNode;
          console.log($scope.selNode);
        });

  });
  
  ctrModule.controller('leaveNodeControler', [
    "$scope", "$routeParams","clusterAPIservice","$location",
    function($scope, $routeParams, clusterAPIservice, $location){
        $scope.node=$routeParams.node;
        clusterAPIservice.leaveNode($scope.node).success(function (response){
          $location.path("/");
        })

  }]);

  ctrModule.controller('downNodeController', [
    "$scope", "$routeParams","clusterAPIservice","$location",
    function($scope, $routeParams, clusterAPIservice, $location){
        console.log( "location " + $location  );
        $scope.node=$routeParams.node;
        clusterAPIservice.downNode($scope.node).success(function (response){
        $location.path("/");
    })

  }]);

  ctrModule.controller('upNodeController', [
    "$scope", "$routeParams","clusterAPIservice","$location",
    function($scope, $routeParams, clusterAPIservice, $location){
        $scope.node=$routeParams.node;
        clusterAPIservice.upNode($scope.node).success(function (response){
          $scope.nodesList = $routeParams.nodesList;        
          $location.path("/");
        })

  }]);
  
  ctrModule.controller('joinNodeController', [
    "$scope", "$routeParams","clusterAPIservice","$location",
    function($scope, $routeParams, clusterAPIservice, $location){
        $scope.node=$routeParams.node;
        clusterAPIservice.joinNode($scope.node).success(function (response){
          $scope.nodesList = $routeParams.nodesList; 
          $location.path("/");
        })
  }]);