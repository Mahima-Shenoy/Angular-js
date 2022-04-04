(function() {
  "use strict";

  angular.module("LunchCheck", []).controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.item = "";
    $scope.nbOfItems = 0;
    $scope.result;
    $scope.resultOk = null;

    $scope.checkItems = function() {
      if($scope.item.length > 0) {
        console.log("Items entered: " + $scope.item);
        var itemArray = $scope.item.split(",");
        console.log("Items as array: " + itemArray);

        $scope.result = checkItemCount(itemArray);
        $scope.resultOk = true;
      }
      else
      {
        $scope.result = "Please enter data first";
        $scope.resultOk = false;
      }
    };
  }

  function checkItemCount(items) {
    var itemCount = items.length;
    console.log("Number of items entered: " + itemCount);

    if(itemCount < 4)
      return "Enjoy!";
    else
      return "Too much!";
  }
})();
