window.DetailProfile = function ($scope, $rootScope) {
  console.log("HMMMMMMMMMMMMMMMMMMMMM");
  $rootScope.form_acc = {
    matKhau: "",
    email: "",
    role: 2,
    name: "",
    diaChi: "",
    gioiTinh: "Secret",
  };
  $scope.form_acc.name = $rootScope.account.name;
  $scope.form_acc.email = $rootScope.account.email;
  $scope.form_acc.role = $rootScope.account.role;
  $scope.form_acc.diaChi = $rootScope.account.diaChi;
  $scope.form_acc.gioiTinh = $rootScope.account.gioiTinh;
  $scope.form_acc.matKhau = $rootScope.account.matKhau;
};
window.EditProfile = function ($scope, $rootScope, $http, $location) {
  // alert("edit profile");
  // console.log("HMMMMMMMMMMMMMMMMMMMMM");
  // console.log($rootScope.account);
  let id = $rootScope.account.id;
  let api = accountURL + "/" + id;
  $scope.updateAcc = $rootScope.form_acc;
  $rootScope.account = $scope.updateAcc;
  console.log("HMMMMMMMMMMMMMMMM");
  console.log($rootScope.account);
  $http.put(api, $scope.updateAcc).then(function (response) {
    if (response.status === 200) {
      console.log("HMMMMMMMMMMMMMMMMMMMMM");
      console.log(response.data);
      alert("Cap nhat thanh cong");
      // $rootScope.account = $scope.updateAcc;
      // $location.path("/userProfile");

      // console.log($rootScope.account);
    }
  }),
    function (e) {
      console.log(e);
    };
};
window.LoginController = function (
  $rootScope,
  $scope,
  $http,
  $location,
  $window
) {
  $rootScope.form_acc = {
    matKhau: "",
    email: "",
    role: 2,
    name: "",
    diaChi: "",
    gioiTinh: "Secret",
  };
  $rootScope.listAcc = [];
  $rootScope.getAccount = function () {
    $scope.dem = 0;
    // vào list account
    $http.get(accountURL).then(function (response) {
      $rootScope.role = null;
      if (response.status == 200) {
        $rootScope.listAcc = response.data;
        for (let i = 0; i < $rootScope.listAcc.length; i++) {
          console.log("Role: " + $rootScope.role);
          console.log("email: " + $scope.accName);
          if (
            $scope.accName === $rootScope.listAcc[i].email &&
            $scope.password === $rootScope.listAcc[i].matKhau
          ) {
            $rootScope.account = $rootScope.listAcc[i];
            $rootScope.role = $rootScope.listAcc[i].role;
            console.log("Role: " + $rootScope.role);
            if ($rootScope.role === 1) {
              // $location.path("/products");
              // $window.close();
              alert("Đăng nhập thành công");
              $window.open("/src/ChuShop.html", "_self");
            } else {
              swal("Dang nhap thanh cong!", "", "success");
              $location.path("/home");
            }
          } else {
            $scope.dem = $scope.dem + 1;
          }
        }
        //if()
      }
      console.log($scope.dem);
      if ($scope.dem >= $rootScope.listAcc.length) {
        // alert("Dang nhap khong  thanh cong!");
        swal("Vui long nhap email & password!", "", "error");
        // xacNhan = -1;
        if ($scope.accName === "") {
          swal("Vui long nhap email & password!", "", "error");
        } else if ($scope.password === "") {
          swal("Vui long nhap email & password!", "", "error");
        } else {
          alert("Bạn đã nhập email hoặc mật khẩu không đúng");
        }
        $location.path("/login");
      }
    });
  };
};
window.CreateAcc = function ($scope, $rootScope, $http, $location) {
  var kq = false;
  $scope.newAcc = $scope.form_acc;
  $scope.listAcc = [];
  if ($scope.form_acc.email === undefined || $scope.form_acc === undefined) {
    swal("Vui long nhap email va password!", "", "error");
    $location.path("/register");
  } else {
    $http.get(accountURL).then(function (response) {
      if (response.status === 200) {
        $scope.listAcc = response.data;
        for (var i = 0; i < $scope.listAcc.length; i++) {
          if ($scope.newAcc.email === $scope.listAcc[i].email) {
            kq = true;
          }
        }
        if (kq === false) {
          $http.post(accountURL, $scope.newAcc).then(function (response) {
            swal("Dang ki thanh cong!", "", "success");
            if (response.status === 200) {
              swal("Dang ki thanh cong!", "", "success");
            }
            $location.path("/login");
          }),
            function (e) {
              swal("Dang ki ko thanh cong!", "", "error");
              $location.path("/login");
            };
        } else {
          swal("Email da ton tai!", "", "error");
          $location.path("/login");
        }
      }
    });
  }
};
window.pageDoiMKController = function ($rootScope) {
  $rootScope.form_doiMK = {
    matKhau: "",
    email: "",
    role: 2,
    name: "",
    diaChi: "",
    gioiTinh: "Secret",
  };
};
window.XacNhanDoiMKController = function (
  $scope,
  $rootScope,
  $location,
  $http
) {
  // $scope.updateMk = $rootScope.form_doiMK;
  let api = accountURL + "/" + $rootScope.account.id;
  console.log("Duong daxn:");
  console.log(api);
  $scope.update = $rootScope.form_doiMK;
  console.log("Mk o day ne");
  console.log($scope.update.matKhau);
  $scope.update.matKhau = $rootScope.form_doiMK.matKhau;
  $scope.update.email = $rootScope.account.email;
  //role, name, diaChi, gioiTinh
  $scope.update.role = $rootScope.account.role;
  $scope.update.name = $rootScope.account.name;
  $scope.update.diaChi = $rootScope.account.diaChi;
  $scope.update.gioiTinh = $rootScope.account.gioiTinh;
  $http.put(api, $scope.update).then(function (response) {
    // $location.path("/account");
    if (response.status === 200) {
      alert("Doi mk thanh cong");
    }
  });
};
// window.DoiMatKhauController = function ($scope, $rootScope, $location) {
//   console.log("Logggggggg");
//   console.log($rootScope.account);
//   var acc = $rootScope.account;
//   console.log($scope.mkMoi);
//   if ($scope.mkMoi === "" || $scope.xacNhanMKMoi === "") {
//     alert("Vui lòng nhập mk mới và xác nhận lại");
//     // $location.path("/home");
//     $rootScope.account = acc;
//     $location.path("/doi-mat-khau");
//   } else if ($scope.xacNhanMK != $scope.mkMoi) {
//     alert("Mật khẩu bạn nhập không trùng khớp");
//     $rootScope.account = acc;
//     $location.path("/doi-mat-khau");
//   } else {
//     alert("Done");
//     $rootScope.account = acc;
//     $location.path("/home");
//   }
// };
//page account:
window.account = function ($rootScope, $scope) {
  $rootScope.account = $rootScope.account;
  console.log("HMMMMMMMMMMMMMMMMMMMMM");
  $rootScope.form_acc = {
    matKhau: "",
    email: "",
    role: 2,
    name: "",
    diaChi: "",
    gioiTinh: "Secret",
  };
  $scope.form_acc.name = $rootScope.account.name;
  $scope.form_acc.email = $rootScope.account.email;
  $scope.form_acc.role = $rootScope.account.role;
  $scope.form_acc.diaChi = $rootScope.account.diaChi;
  $scope.form_acc.gioiTinh = $rootScope.account.gioiTinh;
  $scope.form_acc.matKhau = $rootScope.account.matKhau;
};
window.LogoutController = function ($location, $rootScope) {
  alert("Dang xuat?");
  $rootScope.account = null;
  $rootScope.role = null;
  $location.path("/home");
  alert("Da dang xuat");
};
window.LogoutAdminController = function ($location, $rootScope) {
  alert("Dang xuat?");
  $rootScope.account = null;
  $rootScope.role = null;
  $window.open("/src/AssignmentFE_DuongNTT_PH25958.html", "_self");
  // $location.path("/home");
  alert("Da dang xuat");
};
//
