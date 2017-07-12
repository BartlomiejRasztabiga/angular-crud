angular
  .module('userList')
  .component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    styleUrl: 'user-list/user-list.component.css',
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

      this.startEditingUser = function (user) {
        this.editedUser = jQuery.extend(true, {}, user);
      };

      this.editUser = function () {
        //Find user with id
        var index = -1;
        for (var i = 0; i < this.users.length; i++) {
          if (this.users[i].id === this.editedUser.id) {
            index = i;
          }
        }

        //If found, replace
        if (index !== -1) {
          this.users[index] = this.editedUser;
        }

        this.editedUser = {};
      };

      this.deleteUser = function (user) {
        var index = this.users.indexOf(user);
        if (index !== -1) {
          this.users.splice(index, 1);
        }
      };
    }
  });
