window.TopSellerController = function ($scope, $http) {
  $scope.listTopSeller = [];
  $scope.listNewProduct = [];
  $http.get(topSellerURL).then(function (response) {
    console.log(response);
    if (response.statusText === "OK") {
      for (let i = 0; i < 4; i++) {
        $scope.listTopSeller.push(response.data[i]);
      }
      for (let index = 4; index < 8; index++) {
        $scope.listNewProduct.push(response.data[index]);
      }
    }
  });
};
