
app.factory('gameService', ['$http', function ($http) {
  var gameService = {
    attackers: [
          {margin: 0, speed: 12, money: 10, hp: 10, img: "zombie.gif", 
          style: {"margin-right": "-50px", "position": "absolute", "cursor": "pointer", "margin-top": "265px"}}/*,
          {margin: 0, speed: 10, money: 15, hp: 15, img: "smallbat_360.gif", 
            style: {"margin-right": "-130px", "position": "absolute", "cursor": "pointer", "margin-top": "100px"}}*/
           ]
}
return gameService;
}]);