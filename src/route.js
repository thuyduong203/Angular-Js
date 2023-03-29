var app = angular.module("MyModuleASM", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/home", {
      templateUrl: "pages/trang-chu.html",
      controller: TopSellerController,
    })
    .when("/product", {
      templateUrl: "pages/products.html",
      controller: ProductCategoryController,
    })
    .when("/about-DR", {
      templateUrl: "pages/about-DR.html",
    })
    .when("/blog", {
      templateUrl: "pages/blog.html",
    })
    .when("/product-category/all-products", {
      templateUrl: "pages/products.html",
      controller: ProductCategoryController,
    })
    .when("/product-category/:id", {
      templateUrl: "pages/products.html",
      controller: FilterByCategoryController,
    })
    .when("/login", {
      templateUrl: "pages/login.html",
      controller: LoginController,
    })
    // .when("/btn-login", {
    //   templateUrl: "pages/login.html",
    //   controller: LoginController,
    // })
    .when("/create-acc", {
      templateUrl: "pages/login.html",
      controller: CreateAcc,
    })
    .when("/register", {
      templateUrl: "pages/register.html",
    })
    .when("/detail-topseller/:id", {
      templateUrl: "pages/detail.html",
      controller: DetailTopSeller,
    })
    .when("/products", {
      templateUrl: "pages/product-quan-ly.html",
      controller: ProductCategoryController,
    })
    .when("/account", {
      templateUrl: "pages/account.html",
      controller: account,
      // templateUrl: "pages/login.html",
      // controller: LoginController,
    })
    .when("/userProfile", {
      templateUrl: "pages/userProfile.html",
      controller: DetailProfile,
    })
    .when("/updateProfile", {
      templateUrl: "pages/userProfile.html",
      controller: EditProfile,
    })
    .when("/gio-hang", {
      templateUrl: "pages/gio-hang.html",
      controller: ProductCategoryController,
    })
    .when("/sp-da-mua", {
      templateUrl: "pages/san-pham-da-mua.html",
      controller: ProductCategoryController,
    })
    // .when("/doi-mat-khau", {
    //   templateUrl: "pages/doi-mat-khau.html",
    //   controller: ProductCategoryController,
    // })
    .when("/doi-mat-khau", {
      templateUrl: "pages/doi-mat-khau.html",
      controller: pageDoiMKController,
    })
    .when("/xac-nhan-doi-mk", {
      templateUrl: "pages/doi-mat-khau.html",
      controller: XacNhanDoiMKController,
    })
    .when("/logout", {
      templateUrl: "pages/trang-chu.html",
      controller: LogoutController,
    })
    .otherwise({
      redirectTo: "/home",
    });
});
