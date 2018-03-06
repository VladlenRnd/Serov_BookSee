"use strict";

app.controller('CartCtrl', function ($scope, $location) {


    setTimeout(function () {
        INIT_GRID();
    }, 500)


    $scope.GoTo = function (path)
    {
        $location.path(path);
    }


    $scope.GetCurrentPrice = function (price, disc) {
        let res = 0;

        if(disc!==0)
            res = price - (price / 100 * disc);
        else
            res = price;

        return res;
    }






    //cart
    $scope.CartElemnts = GetCookie();

    $scope.cPlusInp = function (Book) {
        $scope.ModalElementCart = Book;

        $scope.CartElemnts = AddToCookie(Book);
    }

    $scope.AddToCart = function (Book) {
        $scope.ModalElementCart = Book;

        $scope.CartElemnts = AddToCookie(Book);

        $("#AddToCartModal").modal();
        setTimeout(function () { $("#AddToCartModal").modal('hide'); }, 1500);


    }

    $scope.DeleteInCart = function (elementIndex) {

        $scope.CartElemnts.splice(elementIndex, 1);
        localStorage.Cart = JSON.stringify($scope.CartElemnts);
    }

    $scope.totalCart = function ()
    {
        let res = 0;

        $scope.CartElemnts.forEach(function (elm) {

            res += $scope.GetCurrentPrice(elm.Prise, elm.Discount) * elm.Count

        });

      

        return res;
    }






})