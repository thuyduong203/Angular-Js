var myApp = angular.module("myModule", ["ngRoute"]);
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/products", {
      templateUrl: "pages/product-quan-ly.html",
      controller: GetProductController,
    })
    .when("/categorys", {
      templateUrl: "pages/category.html",
      controller: QLCategoryController,
    })
    .when("/categorys/delete/:id", {
      templateUrl: "pages/category.html",
      controller: DeleteCategoryController,
    })
    .when("/categorys/add-category", {
      templateUrl: "pages/category.html",
      controller: AddCategoryController,
    })
    .when("/categorys/detail/:id", {
      templateUrl: "pages/category.html",
      controller: DetailCategoryController,
    })
    .when("/categorys/update-category", {
      templateUrl: "pages/category.html",
      controller: UpdateCategoryController,
    })
    .when("/products/detail/:id", {
      templateUrl: "pages/product-quan-ly.html",
      controller: DetailProductController,
    })
    .when("/products/add-product", {
      templateUrl: "pages/product-quan-ly.html",
      controller: AddProductController,
    })
    .when("/products/update-product", {
      templateUrl: "pages/product-quan-ly.html",
      controller: UpdateProductController,
    })
    .when("/products/delete/:id", {
      templateUrl: "pages/product-quan-ly.html",
      controller: DeleteController,
    })
    .when("/admin", {
      templateUrl: "pages/admin.html",
      controller: LoginController,
    })
    .when("/logout", {
      templateUrl: "pages/trang-chu.html",
      controller: LogoutAdminController,
    })
    .otherwise({ redirectTo: "/products" });
});
angular.module("myModule").directive("selectNgFiles", function () {
  return {
    require: "ngModel",
    link: function postLink(scope, elem, attrs, ngModel) {
      elem.on("change", function (e) {
        var files = elem[0].files;
        ngModel.$setViewValue(files);
      });
    },
  };
});
