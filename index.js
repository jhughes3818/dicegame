var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var dice1String = "images/dice" + randomNumber1 + ".png"

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", dice1String)


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dice2String = "images/dice" + randomNumber2 + ".png"

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", dice2String)

var winner = "Refresh Me"

if (randomNumber1 > randomNumber2) {
  winner = "Player 1 Wins"
} else if (randomNumber2 > randomNumber1) {
  winner = "Player 2 Wins"
} else {
  winner = "Tie!"
}

var title = document.querySelector("h1");

title.innerHTML = winner;
