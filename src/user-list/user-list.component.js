angular
  .module('userList')
  .component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    styleUrl: 'user-list/user-list.component.css',
    controller: function (usersService) {
      this.users = {};
      var that = this;

      usersService.getUsers().then(function (response) {
        console.log(response.data);
        that.users = JSON.parse(response.data);
        console.log(that.users);
      }).catch(function (response) {
        console.error("response error " + response.status);
        that.users = {};
      });

      this.newUser = {};

      this.editedUser = {};

      this.addUser = function () {
        var lastId = this.users[this.users.length - 1].id; //TODO Zamienic zeby szukalo ostatniego ID
        this.newUser.id = ++lastId;
        this.newUser.password = this.makeId();
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

      this.makeId = function() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 40; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
      }
    }
  });
