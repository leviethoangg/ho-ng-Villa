var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
    console.log("My controller.....");

    $scope.users = [
        {name: "Hùng Vinacon", email: "Hung@gmail.com", fullname: "Lê Quý Hùng"},
        {name: "Hà Villa", email: "Ha@gmail.com", fullname: "Trần Mạnh Hà"},
        {name: "Hiếu Vinacon", email: "Vinacon.tvth2207070@fpt.edu.vn", fullname: "Huỳnh Trung Hiếu"},
    ];

    $scope.addUser = function(){
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "New User Added successfully";
    };

    $scope.selectUser = function(user) {
        console.log(user);
        $scope.clickedUser = user;
    };

    $scope.editUser = function(){
        $scope.message = "User Edited successfully";
    };

    $scope.deleteUser = function(){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
        $scope.message = "User Deleted successfully";
    };

    $scope.clearMessage = function(){
        $scope.message ="";
    };
});