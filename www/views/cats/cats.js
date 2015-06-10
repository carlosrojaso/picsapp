angular.module('App')
.controller('CatController', function ($scope, $http, $ionicLoading) {
  $ionicLoading.show();
  $http.get('https://warm-shore-6746.herokuapp.com/cats').success(function (cats) {
    $scope.cats = cats;
    console.log($scope.cats);
    $ionicLoading.hide();
  }).error(function (err) {
    $ionicLoading.show({
      template: 'Por favor intente mas tarde.',
      duration: 3000
    });
  });

});
