window.DetailTopSeller = function ($scope, $http, $routeParams) {
  let id = $routeParams.id;
  $http.get(`${topSellerURL}/${id}`).then(function (response) {
    if (response.statusText === "OK") {
      $scope.DetailTopSeller = response.data;
    }
  }),
    function (e) {
      console.log(e);
    };
};
