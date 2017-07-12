angular
  .module('userList')
  .component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: function () {
      this.users = [
        {
          id: 1,
          username: 'test',
          password: 'password'
        },
        {
          id: 2,
          username: 'test2',
          password: 'password'
        }
      ];

      this.newUser = {};

      this.editedUser = {};

      this.nextId = 3;

      this.addUser = function () {
        this.newUser.id = this.nextId++;
        this.users.push(this.newUser);
        this.newUser = {};
      };

      this.editUser = function (user) {
        this.editedUser = user;
      };

      this.deleteUser = function (user) {
        var index = this.users.indexOf(user);
        if (index !== -1) {
          this.users.splice(index, 1);
        }
      };
    }
  });
