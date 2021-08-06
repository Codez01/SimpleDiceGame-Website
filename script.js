
console.info(performance.navigation.type);//detect page refreshing
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
var player1  = parseInt( Math.random() * (7 - 1) + 1);
var player2  = parseInt( Math.random() * (7 - 1) + 1);
document.querySelector(".img1").src = "images/dice"+player1+".png";
document.querySelector(".img2").src = "images/dice"+player2+".png"; 
if(player1>player2){
document.querySelector("h1").innerText = "Player1 won!"


}
if(player1 == player2){
document.querySelector("h1").innerText = "Draw!"


}

else{
  document.querySelector("h1").innerText = "Player2 won!"
 

}
} else {


}