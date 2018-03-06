"use strict";

app.controller('InfoCtrl', function ($scope, $location, $http) {

    //cart
    $scope.CartElemnts = GetCookie();

    $scope.GoTo = function (path) {
        $location.path(path);
    }

})
