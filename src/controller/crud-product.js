window.GetProductController = function ($scope, $rootScope, $http) {
  $scope.listCategory = [];
  $scope.listProduct = [];
  $rootScope.form_product = {
    name: "",
    gia: "",
    moTa: "",
    hinhAnh: "",
    category: "Engagement Ring",
  };
  $rootScope.index = -1;
  $rootScope.listLuuTruProduct = [];
  $rootScope.listLuuTruCategory = [];
  $http.get(categoryURL).then(function (response) {
    if (response.statusText === "OK") {
      console.log(response);
      $scope.listCategory = response.data;
      $rootScope.listLuuTruCategory = response.data;
    }
  }),
    function (e) {
      console.log(e);
    };
  $http.get(topSellerURL).then(function (response) {
    if (response.statusText === "OK") {
      console.log(response);
      $scope.listProduct = response.data;
      $rootScope.listLuuTruProduct = response.data;
    }
  }),
    function (e) {
      console.log(e);
    };
};
window.DetailProductController = function (
  $scope,
  $rootScope,
  $routeParams,
  $http
) {
  let id = $routeParams.id;
  let sz = $rootScope.listLuuTruCategory.length;
  for (let i = 0; i < sz; i++) {
    if (id === $rootScope.listLuuTruCategory[i].id) {
      $rootScope.index = i;
    }
  }
  $http.get(`${topSellerURL}/${id}`).then(function (response) {
    $scope.listCategory = $rootScope.listLuuTruCategory;
    $scope.DetailProduct = response.data;
    $scope.form_product.name = $scope.DetailProduct.name;
    $scope.form_product.moTa = $scope.DetailProduct.moTa;
    $scope.product_id = $scope.DetailProduct.id;
    $scope.form_product.gia = $scope.DetailProduct.gia;
    $scope.form_product.category = $scope.DetailProduct.category;
    console.log("met qua roi");
    console.log($scope.DetailProduct.category);
    console.log($scope.form_product.category);
    $scope.form_product.hinhAnh = $scope.DetailProduct.hinhAnh;
    $scope.listProduct = $rootScope.listLuuTruProduct;
  });
};
window.AddProductController = function ($scope, $rootScope, $http, $location) {
  var imgAdd = "";
  $scope.productNew = $rootScope.form_product;
  // $scope.uploadAnh = function () {
  //   imgAdd = "../assets/image/" + $scope.fileArray[0].name;
  //   $scope.img = imgAdd;
  // };
  $scope.productNew.hinhAnh = $scope.fileArray[0].name;
  $http.post(topSellerURL, $scope.productNew).then(function (response) {
    $location.path("/products");
  });
};
window.UpdateProductController = function (
  $scope,
  $rootScope,
  $http,
  $location
) {
  if ($rootScope.index <= -1) {
    swal("Vui long chon doi tuong can update!", "", "error");
    xacNhan = -1;
    $location.path("/products");
  } else {
    let product = $rootScope.listLuuTruProduct[$rootScope.index];
    let api = topSellerURL + "/" + product.id;
    $http.put(api, $rootScope.form_product).then(function (response) {
      if (response.status === 200) {
        swal("Vui long chon doi tuong can update!", "", "error");
        xacNhan = -1;
        $location.path("/products");
      }
      // $location.path("/products");
    }),
      function (e) {
        console.log(e);
      };
  }
};
window.DeleteController = function (
  $scope,
  $rootScope,
  $http,
  $location,
  $routeParams
) {
  let id = $routeParams.id;
  let api = topSellerURL + "/" + id;
  $http.delete(api).then(function (response) {
    alert("Da xoa");
    $location.path("products");
  });
};
