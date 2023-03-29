window.ProductCategoryController = function ($scope, $http, $rootScope) {
  $scope.listCategory = [];
  $scope.listProduct = [];
  $http.get(categoryURL).then(function (response) {
    if (response.statusText === "OK") {
      console.log(response);
      $scope.listCategory = response.data;
    }
  }),
    function (e) {
      console.log(e);
    };
  $http.get(topSellerURL).then(function (response) {
    if (response.statusText === "OK") {
      console.log(response);
      $scope.listProduct = response.data;
    }
  }),
    function (e) {
      console.log(e);
    };
};
window.FilterByCategoryController = function ($scope, $http, $routeParams) {
  $scope.listCategory = [];
  $http.get(categoryURL).then(function (response) {
    if (response.statusText === "OK") {
      console.log(response);
      $scope.listCategory = response.data;
    }
  }),
    function (e) {
      console.log(e);
    };
  $scope.listProduct = [];
  $http.get(topSellerURL).then(function (response) {
    for (let i = 0; i < $scope.listCategory.length; i++) {
      if ($routeParams.id === $scope.listCategory[i].id) {
        var category = $scope.listCategory[i].name;
      }
    }
    console.log("list product");
    console.log($scope.listProduct);
    if (response.status === 200) {
      for (let i = 0; i < response.data.length; i++) {
        if (category === response.data[i].category) {
          $scope.listProduct.push(response.data[i]);
          console.log($scope.listProduct);
        }
      }
    }
  }),
    function (e) {
      console.log(e);
    };
};
