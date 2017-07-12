angular
  .module('core.users')
  .service("usersService", function ($http) {

    this.getUsers = function () {
      return $http.get("https://demo3790518.mockable.io/users")
    };
  });
