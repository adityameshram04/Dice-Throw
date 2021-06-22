var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);
url1 = "images/dice" + randomNumber1 + ".png";
url2 = "images/dice" + randomNumber2 + ".png";
document.querySelector("img").setAttribute("src",url1);
document.querySelectorAll("img")[1].setAttribute("src",url2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent = "Player 1 wins!";
}

else if(randomNumber1 === randomNumber2)
{
    document.querySelector("h1").textContent = "Draw!";
}

else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").textContent = "Player 2 wins!";
}

