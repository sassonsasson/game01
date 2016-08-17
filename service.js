
app.factory('gameService', ['$http', function ($http) {
var gameService = {
attackers: [
{margin: 0, speed: 10, money: 10, hp: 10, img: "zombie.gif", style: {"margin-right": "0px", "position": "absolute", "cursor": "pointer","margin-top": "300px"}}
]
}
return gameService;
}]);