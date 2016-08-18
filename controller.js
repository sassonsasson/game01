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
        $scope.playerPower += 5;
        $scope.show1 = !$scope.show1
        console.log(money)
        $scope.$apply();
      }
      
    }

    $scope.wep2 = function(){
      if($scope.money >= 2500){
        $scope.money -= 2500
        $scope.playerPower += 10;
        $scope.show2 = !$scope.show2
        $scope.$apply();
      }
    }

    $scope.wep3 = function(){
      if($scope.money >= 7000){
        $scope.money -= 7000
        $scope.playerPower += 40;
        $scope.show3 = !$scope.show3
        $scope.$apply();
      }
    }

    $scope.playMusic = function(){
       var audio = document.getElementById("audio");
       var play = $scope.playMusic;
       audio.play();
                 
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

  $scope.count = 0;

  $scope.counter = function(){
    $scope.count += 1;

  }
      var speed = gameService.attackers[0].speed;

$scope.init = function(){
  $scope.shopSee = false;
    $scope.attackers.push([{margin: 0, speed: 12, money: 10, hp: 10, img: "zombie.gif", 
          style: {"margin-right": "-50px", "position": "absolute", "cursor": "pointer", "margin-top": "265px"}}]);
    console.log($scope.attackers)
    /*for (i=0; i<gameService.attackers.length; i++){*/
      var pos = gameService.attackers[0].margin;
      var id = setInterval(frame, speed);
      frame();
    /*}*/
      function frame() {
    if (pos == 920) {
    clearInterval(id);
    var hit = $scope.hitMe
    interval = setInterval(function(){ hit(); }, 1000);
      }
      else if($scope.attackers[0].hp <= 0){
        clearInterval(id);
      } else {
        pos++;
        $scope.attackers[0][0].style['margin-right'] = pos + 'px';

        // console.log($scope.attackers[0][0].style['margin-right'])
       }
      $scope.$apply();
    }
  
}


  $scope.kill = function($index){

    // var zombie = document.getElementById("soldier");
    var zombie = $scope.attackers[$index]
      for(var i = 0; i < $scope.attackers[$index].length ; i++){
      $scope.attackers[$index][i].hp -= $scope.playerPower
      console.log($scope.attackers[$index][i].hp)
      console.log(i)

      if($scope.attackers[$index][i].hp <= 0){
        clearInterval(interval);
      $scope.money += gameService.attackers[0].money;
        // zombie.remove(zombie);
        $scope.attackers.splice($index, 1);

        var id = setInterval(frame, speed);

        $scope.playMusic();

          function frame() {
           clearInterval(id);
    }
    frame()

    }
    }

  $scope.$apply();
  }

  });