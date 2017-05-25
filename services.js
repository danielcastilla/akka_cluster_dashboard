angular.module('MngNodesApp.services', []).
  factory('clusterAPIservice', function($http) {

    

    var nodesAPI = {};
    alert(1)
    nodesAPI.getNodes = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://127.0.0.1:19999/members/'
      });
    }

    return nodesAPI;
  });