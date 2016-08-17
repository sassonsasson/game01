  app.controller('MainCtrl', function($scope, gameService) {

    $scope.hp = 100;
    $scope.money = 500;
    $scope.itemPrice = 0;
    $scope.shopSee = false;
    $scope.weapons = [];
    $scope.startSee = true;
    $scope.boxIt = false;
    $scope.round = 1;

    /* ATTACKKKKKKKKKKKKK */
    $scope.attackers = [];
    $scope.playerPower = 5;

    $scope.show0 = false;
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
    $scope.boxIt = false;
    $scope.show0 = true;
      
    }

    $scope.wep1 = function(){
      if($scope.money >= 350){
        $scope.money -= 350
        $scope.playerPower += 3;
        $scope.show1 = !$scope.show1
        console.log(money)
        $scope.$apply();
      }
      
    }

    $scope.wep2 = function(){
      if($scope.money >= 2500){
        $scope.money -= 2500
        $scope.playerPower += 6;
        $scope.show2 = !$scope.show2
        $scope.$apply();
      }
    }

    $scope.wep3 = function(){
      if($scope.money >= 7000){
        $scope.money -= 7000
        $scope.playerPower += 20;
        $scope.show3 = !$scope.show3
        $scope.$apply();
      }
    }

    $scope.wep4 = function(){
      if($scope.money >= 123456){
        $scope.money -= 123456
        $scope.playerPower += 500;
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
      $scope.$apply();
      if($scope.hp <= 0){
        $scope.startSee = true;
        $scope.show0 = false;
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

  var interval = null;

$scope.init = function(){

  $scope.attackers = gameService.attackers;
  var pos = gameService.attackers[0].margin;
  var speed = gameService.attackers[0].speed;
  var id = setInterval(frame, speed);
  function frame() {
    if (pos == 900) {
    clearInterval(id);
    var hit = $scope.hitMe
    interval = setInterval(function(){ hit(); }, 1000);
    
      }
      else if(gameService.attackers[0].hp <= 0){
        clearInterval(id);
      } else {
      pos++;
    $scope.attackers[0].style['margin-right'] = pos + 'px';
    $scope.$apply();
    }
  }
}

$scope.kill = function(){
var zombie = document.getElementById("soldier");
gameService.attackers[0].hp -= $scope.playerPower
if(gameService.attackers[0].hp <= 0){
  clearInterval(interval);
$scope.money += gameService.attackers[0].money;
  zombie.remove(zombie);
}

$scope.$apply();
}

  });