"use strict"

var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider,$locationProvider) {

    $locationProvider.html5Mode(true)

    $routeProvider
     .when('/', {
         templateUrl: 'pages/home.html',
         controller: 'MainCtrl'
     }).when('/Cart', {
         templateUrl: 'pages/cart.html',
         controller: 'CartCtrl'
     }).when('/Checkout', {
         templateUrl: 'pages/checkout.html',
         controller: 'CheckoutCtrl'
     }).when('/Product/:id', {
         templateUrl: 'pages/product.html',
         controller: 'ProductCtrl'
     }).when('/about-us', {
         templateUrl: 'pages/about-us.html',
         controller: 'InfoCtrl'
     }).when('/contact-us', {
         templateUrl: 'pages/contact-us.html',
         controller: 'InfoCtrl'
     }).when('/admin', {
         templateUrl: 'pages/admin.html',
         controller: 'AdminCtrl'
     })
     .otherwise({
         redirectTo: '/'
     }); 
});
