"use strict";

app.controller('ProductCtrl', function ($scope, $http, $location, $routeParams) {

    $scope.allBooks;


    if (AllProduct === null) {
        $http.get(GetProductPath).then(function (response) {
            $scope.allBooks= AllProduct = response.data;

            for (var i = 0; i < AllProduct.length; i++) {
                if (AllProduct[i].Id === $routeParams.id) {
                    $scope.Product = AllProduct[i];
                }
            }
        });
    }
    else
    {
        for (var i = 0; i < AllProduct.length; i++) {
            $scope.allBooks = AllProduct;
            if (AllProduct[i].Id === $routeParams.id) {
                $scope.Product = AllProduct[i];
            }
        }
    }


    setTimeout(function () {
        INIT_GRID();
    }, 500)



    //cart
    $scope.CartElemnts = GetCookie();

    $scope.PlusInp = function (Book) {
        $scope.ModalElementCart = Book;

        $scope.CartElemnts = AddToCookie(Book);
    }


    $scope.Ccount = 1;

    $scope.AddToCart = function (Book,ct) {
        $scope.ModalElementCart = Book;

        for (let i = 0; i < ct; ++i) {
            $scope.CartElemnts = AddToCookie(Book);
        }

        $("#AddToCartModal").modal();
        setTimeout(function () { $("#AddToCartModal").modal('hide'); }, 1500);


    }

    $scope.DeleteInCart = function (elementIndex) {

        $scope.CartElemnts.splice(elementIndex, 1);
        localStorage.Cart = JSON.stringify($scope.CartElemnts);
    }




    $scope.GoTo = function (path) {
        $location.path(path);
    }

    $scope.GetCurrentPrice = function (price, disc) {
        let res = 0;
        if (disc !== 0) {

            res = price - (price / 100 * disc);
        }
        else
        {
            res = price;
        }


        return res;
    }


    $scope.FilterElm = function (book)
    {
        let res = false;
        if ($scope.Product !== undefined) {
            if (book.Genre === $scope.Product.Genre) res = true;
        }

        return res;
    }


})

