//(function () {
    var app = angular.module('login', ['jcs-autoValidate']);

    app.controller('MinMaxCtrl', function ($scope) {

        $scope.formModel = {};

        $scope.onSubmit = function () {

            console.log("Successfully registered");
            alert("Submitted");
            console.log($scope.formModel);


            //$http.post('', $scope.formModel).success(function (data) {

              //  console.log("Success.")
            //});

            //$http.post('', $scope.formModel).error(function (data) {
              //  console.log("Failed.")
            //});
        };

    });
//});

