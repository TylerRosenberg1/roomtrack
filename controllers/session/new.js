"use strict";

(function() {
  angular
  .module("roomtrack")
  .controller("sessionNewController", [
    "$http",
    "$window",
    sessionNewControllerFunction
  ])

  function sessionNewControllerFunction($http, $window) {
    var vm = this;
    vm.createSession = function() {
      $http({
        method: 'POST',
        url: "http://localhost:7000/session/new",
        data: {user: vm.user}
      }).then(function success(response) {
        console.log(response);
        if (response.data.error) {
          vm.error = response.data.error;
        } else {
          $window.sessionStorage.token = response.data.token;
          //redirect to blah blah response.data._id
        }
      }, function error(error) {
          delete $window.sessionStorage.token;
      })
    }
  }
}());
