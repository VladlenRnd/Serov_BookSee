"use strict";

var AllProduct = null;
//var GetProductPath = 'data.json';
var GetProductPath = "https://serov.000webhostapp.com/php/GetProduct.php";
var SetProductPath = "https://serov.000webhostapp.com/php/SetProduct.php";
var DeletePath = "https://serov.000webhostapp.com/php/Delete.php";
var UploadPath = "https://serov.000webhostapp.com/php/UploadImg.php";



function AddToCookie(element)
{


    var storedAry = [];
    let ind = -1;

    if (localStorage.Cart !== undefined) {
        storedAry = $.parseJSON(localStorage.Cart);

        //console.log("GetDate");
        //console.log(storedAry);
    }

    let index = storedAry.findIndex(x => x.Id === element.Id);
    let el = storedAry.find(x => x.Id === element.Id);

    if (index === -1) {
        element.Count = 1;
        storedAry.push(element);
    }
    else
    {
        el.Count++
        storedAry[index] = el;
    }


    localStorage.Cart = JSON.stringify(storedAry);



    //console.log("Affter add");
    //console.log($.parseJSON(localStorage.Cart));

    return storedAry;
}

function GetCookie()
{
    let res = localStorage.Cart;

    if (res !== undefined)
        return JSON.parse(res);
    else
        return [];
}

class SelectItm {

    constructor(Auctor, Genre) {
        this.SelectAuctor = Auctor;
        this.SelectGenre = Genre;
    }
    Add(Auctor, Genre) {
        if (Auctor !== '')
            this.SelectAuctor = Auctor;
        if (Genre !== '')
            this.SelectGenre = Genre;
    }

}



app.controller('MainCtrl', function ($scope, $location, $http) {
    let SelectItenFilter = new SelectItm("Все", "Все");
    //FilterMenu
    $scope.SelectFilter = SelectItenFilter;

    $scope.SelectedFilter = function (Act, Gen) {
        SelectItenFilter.Add(Act, Gen);
        $scope.SelectFilter = SelectItenFilter;

        let ars = [];

        if ($scope.SelectFilter.SelectAuctor !== "Все")
            ars.push("." + $scope.concatAuthor($scope.SelectFilter.SelectAuctor));


        if ($scope.SelectFilter.SelectGenre !== "Все")
            ars.push("." + $scope.SelectFilter.SelectGenre);

        let filterValue = $scope.concatValues(ars);



        $grid.isotope({ filter: filterValue });
    }


    //cart
   $scope.CartElemnts = GetCookie();

   $scope.PlusInp = function (Book)
   {
       $scope.ModalElementCart = Book;

       $scope.CartElemnts = AddToCookie(Book);
   }

    $scope.AddToCart = function (Book)
    {
        $scope.ModalElementCart = Book;

        $scope.CartElemnts = AddToCookie(Book);
      
        $("#AddToCartModal").modal();
        setTimeout(function () { $("#AddToCartModal").modal('hide'); }, 1500);


    }

    $scope.DeleteInCart = function (elementIndex) {

        $scope.CartElemnts.splice(elementIndex, 1);       
        localStorage.Cart = JSON.stringify($scope.CartElemnts);
    }


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

    $scope.GoTo = function (path) {
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



    



    //FilteringMenu
    $scope.concatAuthor = function (act) {
        return act.replace(' ', '-');
    }

    $scope.concatValues = function (obj) {
        var value = '';
        for (var prop in obj) {
            value += obj[prop];
        }
        return value;
    }


    // all Filters

    $scope.FilterDiscount = function (boock) {
        if (boock.Discount > 0) {
            return true;
        }

        return false;
    };

    $scope.FilterNewTime = function (boock) {
        let res = false;

        let myDate = new Date(boock.AddTime);

        let myEpoch = myDate.getTime();
        let curentDate = Date.now();

        let sss = new Date(curentDate - myEpoch);


        if (sss.getDate() < 7 &&
            sss.getMonth() === 0 &&
            sss.getFullYear() === 1970) res = true;


        return res;
    }

})


app.filter('unique', function () {

    return function (collection, keyname) {
        let output = [],
            keys = [];

        angular.forEach(collection, function (item) {
            let key = item[keyname];
            if (keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(item);
            }
        });
        return output;
    };
});