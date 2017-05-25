angular.module('MngNodesApp.services', []).
  factory('clusterAPIservice', function($http) {

    var urlBase = 'http://127.0.0.1:8000/members'
    var nodesAPI = {};

    nodesAPI.leaveNode = function(node) {      
      return $http({
          method: 'DELETE',
          url: urlBase+"/"+node
        });
    }

    nodesAPI.getNodes = function() {     
      return $http({
      		method: 'GET',
      		url: urlBase
      	});
    }

    nodesAPI.downNode = function(node) {      
      return $http({
          method: 'PUT',
          data: "operation=down",
          url: urlBase+"/"+node,
          headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
         });
    }

    nodesAPI.upNode = function(node) {      
      return $http({
          method: 'PUT',
          data: "operation=leave",
          url: urlBase+"/"+node,
          headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
         });
    }
    

    nodesAPI.joinNode = function(node) {      
      console.log(urlBase);
      return $http({
          method: 'POST',
          data: "address=akka.tcp://ClusterSystem@127.0.0.1:2557",
          url: urlBase,
          headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
         });
        console.log("111111111");
    }
    return nodesAPI;
  });