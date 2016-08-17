  app.controller('MainCtrl', function($scope, gameService) {

    $scope.hp = 100;
    $scope.money = 500;
    $scope.itemPrice = 0;
    $scope.shopSee = false;
    $scope.weapons = [];
    $scope.startSee = true;
    $scope.boxIt = true;

    /* ATTACKKKKKKKKKKKKK */
    $scope.attackers = [];
    
    $scope.playerPower = 10;
    $scope.show1 = true;
    $scope.show2 = true;
    $scope.show3 = true;
    $scope.show4 = true;


    $scope.startGame = function(){
      $scope.startSee = !$scope.startSee
      // starts game here 
    $scope.hp = 100;
    $scope.money = 500;
    $scope.itemPrice = 0;
    $scope.shopSee = false;
    $scope.weapons = [];
    $scope.boxIt = true;
      
    }

    $scope.dArcher = function(){
      if($scope.money >= 350){
        $scope.money -= 350
        $scope.playerPower += 10;
        $scope.show1 = !$scope.show1
        console.log(money)
        $scope.$apply();
      }
      
    }

    $scope.tArcher = function(){
      if($scope.money >= 2500){
        $scope.money -= 2500
        $scope.playerPower += 10;
        $scope.show2 = !$scope.show2
        $scope.$apply();
      }
    }

    $scope.machineGun = function(){
      if($scope.money >= 7000){
        $scope.money -= 7000
        $scope.playerPower += 50;
        $scope.show3 = !$scope.show3
        $scope.$apply();
      }
    }

    $scope.dragon = function(){
      if($scope.money >= 123456){
        $scope.money -= 123456
        $scope.playerPower += 1000;
        $scope.show4 = !$scope.show4
        $scope.$apply();
      }
    }

    $scope.moneyBox = function(){
      var earnMoney = $scope.earnMoney
      setInterval(function(){ earnMoney(); }, 1000);
      $scope.$apply();
    }


    $scope.earnMoney = function(){
     $scope.money += 1
      console.log($scope.money)
      $scope.$apply();

    }

    $scope.hitMe = function(){
      $scope.hp -= 1;
      console.log($scope.hp)
      if($scope.hp <= 0){
        alert('You Lose');
        $scope.startSee = true;
        $scope.$apply();
      }
    }

    $scope.shop = function(){
       $scope.shopSee = !$scope.shopSee
    }

    $scope.buyItem = function(item){
      var money = $scope.money
      var itemPrice = $scope.itemPrice
      var weapons = $scope.weapons
      if(money >= itemPrice){
        money -= itemPrice
        weapons.push(item);
        $scope.$apply();
      }
    }



$scope.init = function(){
$scope.attackers = gameService.attackers;
var pos = gameService.attackers[0].margin;
var speed = gameService.attackers[0].speed;
var id = setInterval(frame, speed);
function frame() {
if (pos == 900) {
clearInterval(id);
var hit = $scope.hitMe
hit();
$scope.$apply();
} 
else {
pos++;
$scope.attackers[0].style['margin-right'] = pos + 'px';
console.log($scope.attackers[0].style['margin-right'])
$scope.$apply();
}
}
}

$scope.kill = function(){
var zombie = document.getElementById("soldier");
$scope.money += gameService.attackers[0].money;
zombie.remove(zombie);
$scope.$apply();
}

  });