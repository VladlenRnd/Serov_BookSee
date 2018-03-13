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


    $scope.CountLenght = function (Ganre) {
        let res = 0;
        angular.forEach($scope.Boocks, function (item) {

            if (item.Genre === Ganre)
                res++;


        });

        return res;
    }


    $scope.op = [];

    for (var i = 0; i < 50; i++) {
        var obj = { Name: i };
        $scope.op.push(obj);
    }

    $scope.GetCurrentPrice = function (price, disc) {
        let res = 0;

        if (disc !== 0)
            res = price - (price / 100 * disc);
        else
            res = price;

        return res;
    }

    $scope.DeleteProduct = function (ID)
    {
        var req = {
            method: 'POST',
            url: DeletePath,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {id: ID}
        }


        $http(req).then(function (data) {
            $http.get(GetProductPath).then(function (response) {
                AllProduct = $scope.Boocks = response.data;
            });
                

        }, function (error) {
            console.log(error);
        });

    }


    $scope.ShowAllBooks = function ()
    {
        $("#AllProductList").modal();
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


    $scope.NewProduct = {
        name: "",
        prise: 1,
        auctor: "",
        genre: "",
        img: "",
        hit: false,
        description: "",
        availability: true,
        discont: 0
    }


    $scope.CreateProduct = function()
    {

        console.log($scope.NewProduct);

        var req = {
            method: 'POST',
            url: SetProductPath,
            headers: {
                'Content-Type': 'application/json'
            },
            data: $scope.NewProduct
        }


        $http(req).then(function (data) {
            console.log(data);
            $("#AddFinish").modal();
            setTimeout(function () { $("#AddFinish").modal('hide'); }, 1500);

            $http.get(GetProductPath).then(function (response) {
                AllProduct = $scope.Boocks = response.data;
                setTimeout(function () {

                    INIT_GRID();

                }, 100)
            });


        }, function (error) {
            console.log(error);
            });
    }

    $scope.SelectSearch = "Name";
    $scope.InputSearch = "";

    //Filter

    $scope.FilterN = function (item) {
        let res = false;

        if ($scope.InputSearch === "")
            return true;


        switch ($scope.SelectSearch)
        {
            case 'Name': if (~item.Name.indexOf($scope.InputSearch)) res = true; break;
            case 'Auctor': if (~item.Auctor.indexOf($scope.InputSearch)) res = true; break;
            case 'Genre': if (~item.Genre.indexOf($scope.InputSearch)) res = true; break;
            case 'Prise': if (~item.Prise.indexOf($scope.InputSearch)) res = true; break;
            case 'Discount': if (~item.Discount.indexOf($scope.InputSearch)) res = true; break;

        }



        return res;
    };








})
