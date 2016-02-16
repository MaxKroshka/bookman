angular.module('bookman.links', [])

.controller('LinksController', function($scope, $rootScope, Links) {

  $scope.data = {};
  $scope.data.links = [];

  $scope.initialize = function() {
    Links.getLinks().then(function(data) {
      console.log(data);
      $scope.data.links = data;
    });
  };

  $scope.addUrl = function() {
    Links.addLink({ url: $scope.newUrl, tab: $rootScope.activeTab })
      .then(function(res) {
        console.log(res);
        $scope.data.links.push(res.data);
      });
    $scope.newUrl = '';
  };

  $scope.toggleEvent = function(url, event, toggledOff) {
    Links.toggleEvent({ url: url, event: event }).then(function(res) {
      if (toggledOff) {
        $scope.initialize();
      }
    });
  };

  $scope.removeUrl = function(url){
    Links.removeLink({url: url}).
    then(function(res){
      $scope.initialize();
    });
  };

  $scope.initialize();
});
