var myApp = angular.module("myApp", []);
myApp.controller("myController", function ($scope) {
    console.log("In my log..")
    $scope.newUser = {};
    $scope.clickedUser = {};
    $scope.message = "";
    $scope.users = [{
            username: "rahul",
            fullName: "Rahul Singh Bhadhoriya",
            email: "rahulbhadhoriya302@gmail.com"
        },
        {
            username: "robin",
            fullName: "Robin sharma",
            email: "robinsharma@gmail.com"
        },
        {
            username: "jatin",
            fullName: "jatin panchal",
            email: "jatinpanchal@gmail.com"
        }
    ];

    $scope.saveUser = function () {
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "New User added sucessfully!";

    };
    $scope.selectUser = function (user) {
        console.log(user);
        $scope.clickedUser = user;
    };
    $scope.updateUser = function () {
        $scope.message = "User Updated sucessfully!";
        

    };
    $scope.deleteUser = function () {
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
        $scope.message = "User Deleted sucessfully!";
        
    };
    $scope.clearMessage = function(){
        $scope.message = "";
    };
});