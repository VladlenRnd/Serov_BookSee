"use strict";

app.controller('AdminCtrl', function ($scope, $location, $http) {


    if (AllProduct === null) {
        $http.get(GetProductPath).then(function (response) {
            AllProduct = $scope.Boocks = response.data;
            setTimeout(function () {

                INIT_GRID();

            }, 100)
        });
    }
    else {
        $scope.Boocks = AllProduct;
        setTimeout(function () {

            INIT_GRID();

        }, 100)
    }


    $scope.CountLenght = function (Ganre)
    {
        let res = 0;
        angular.forEach($scope.Boocks, function (item) {

            if (item.Genre === Ganre)
                res++;


        });

        return res;
    }


    $scope.CheckOrder = function (order)
    {
        alert('show order');
    }

    $scope.DeletePromo = function (Promo)
    {
        alert("Delete promo")
    }

    $scope.GoTo = function (path) {
        $location.path(path);
    }


    $scope.CreateProduct = function()
    {

        var req = {
            method: 'POST',
            url: UploadPath,
            headers: {
                'Content-Type': 'application/json'
            },
            data: { name: 'test' }
        }


        $http(req).then(function (data) {
            console.log(data);

        }, function (error) {

            });
    }

})
