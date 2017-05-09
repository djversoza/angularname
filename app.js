const app = angular.module('nameApp', []);

app.component('posting', {
  template: `
  <p>{{vm.message}}</p>
  <p>First Name: <input ng-model="vm.name" id="textbox" type="text" /></p>
  <p>Nick Name: <input ng-model="vm.middle" id="textbox2" type="text" /></p>
  <p>Last Name: <input ng-model="vm.last" id="textbox3" type="text" /></p>
  <button ng-click="vm.showDetails()">Submit</button>
  <p id="ans">{{vm.printName}} {{vm.printMid}} {{vm.printLast}}</p>
  <p>{{vm.error}}</p>
  `,
  controller: function() {
    const vm = this;

    vm.$onInit = function() {
      vm.message = "enter something"
    }

      vm.showDetails = function() {
        if(vm.name && vm.last) {
        vm.message = "";
        vm.error = "";
        vm.printName = "first name: " + vm.name + " | ";
        vm.printLast = "last name " + vm.last ;
        vm.printMid = ""
        if (vm.middle) {
          vm.printMid = "nick name " + "'" +  vm.middle + "'" + " | ";
        }
      } else {
        vm.error = "fill out all fields"
        vm.printName = ""
        vm.printMid = ""
        vm.printLast = ""
        }
      }

  },
  controllerAs: "vm"
})
