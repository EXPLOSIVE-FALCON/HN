angular.module('stories', ['storedData'])
  .controller('StoriesController', function ($scope, CurrentData) {
    $scope.stories = CurrentData.stories;
  });
