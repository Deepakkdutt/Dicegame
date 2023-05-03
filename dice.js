var Random_values = Math.floor(Math.random()*6 + 1)

var dice_1 = "dice"+Random_values+".png";


var d1  = document.querySelectorAll("img")[0];
d1.setAttribute("src",dice_1);


var Random_values2 = Math.floor(Math.random()*6 + 1)

var dice_2 = "dice"+Random_values2+".png";


var d2  = document.querySelectorAll("img")[1];
d2.setAttribute("src",dice_2);


//logic//

if(Random_values > Random_values2){
    document.querySelector(".play").innerHTML = "Player 1 Won"
}   
else if(Random_values < Random_values2){
    document.querySelector(".play").innerHTML = "Player 2 Won"
}
else{
    document.querySelector(".play").innerHTML = "Draw"
}