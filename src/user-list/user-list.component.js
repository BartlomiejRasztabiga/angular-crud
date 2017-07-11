angular
  .module('userList', [])
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

      this.user = {};

      this.editing = false;

      this.nextId = 3;

      this.elementContent = 'add';

      this.addUser = function () {
        if (this.editing) {
          var index = this.users.indexOf(this.user);
          if (index !== -1) {
            this.users[index] = this.user;
            this.editing = false;
          }
        } else {
          this.user.id = this.nextId++;
          this.users.push(this.user);
        }
        this.elementContent = 'add';
        this.user = {};
      };

      this.editUser = function (user) {
        this.editing = true;
        this.elementContent = 'edit';
        this.user = user;
      };

      this.deleteUser = function (user) {
        var index = this.users.indexOf(user);
        if (index !== -1) {
          this.users.splice(index, 1);
        }
      };
    }
  });
