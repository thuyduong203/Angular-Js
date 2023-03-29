window.DeleteCategoryController = function (
  $scope,
  $http,
  $routeParams,
  $location
) {
  let id = $routeParams.id;
  $http.delete(`${categoryURL}/${id}`).then(function (response) {
    $scope.listCategory = response.data;
    $location.path("categorys");
    alert("Xoa thanh cong");
  });
};
window.QLCategoryController = function ($scope, $http, $location, $rootScope) {
  $scope.listCategory = [];
  $rootScope.luuTruCategories = [];
  $rootScope.index = -1;
  $rootScope.form_category = {
    name: "",
  };
  $http.get(categoryURL).then(function (response) {
    if (response.statusText === "OK") {
      console.log(response);
      $scope.listCategory = response.data;
      $rootScope.luuTruCategories = response.data;
    }
  }),
    function (e) {
      console.log(e);
    };
};
window.AddCategoryController = function ($scope, $http, $location, $rootScope) {
  $scope.cateNew = $rootScope.form_category;
  $http.post(categoryURL, $scope.cateNew).then(function (response) {
    $location.path("detail");
  });
};
window.DetailCategoryController = function (
  $scope,
  $http,
  $location,
  $rootScope,
  $routeParams
) {
  let id = $routeParams.id;
  $http.get(`${categoryURL}/${id}`).then(function (response) {
    if (response.statusText === "OK") {
      $scope.DetailCategory = response.data;
    }
    $scope.form_category.name = $scope.DetailCategory.name;
    $scope.category_id = $scope.DetailCategory.id;
    $scope.listCategory = $rootScope.luuTruCategories;
    var sz = $rootScope.luuTruCategories.length;
    for (var i = 0; i < sz; i++) {
      if ($scope.category_id == $rootScope.luuTruCategories[i].id) {
        $rootScope.index = i;
      }
    }
    console.log("thuyduong dang met");
    console.log($rootScope.index);
  }),
    function (e) {
      console.log(e);
    };
};
window.UpdateCategoryController = function (
  $scope,
  $http,
  $location,
  $rootScope
) {
  console.log("update met moi");
  console.log($rootScope.luuTruCategories);
  if ($rootScope.index > -1) {
    let category = $rootScope.luuTruCategories[$rootScope.index];
    let id = category.id;
    console.log("met moi");
    console.log(id);
    let api = categoryURL + "/" + id;
    $scope.cateNew = $rootScope.form_category;
    $http.put(api, $scope.cateNew).then(function (response) {
      $location.path("/categorys");
    });
  } else {
    alert("?");
    $location.path("/categorys");
  }
};
