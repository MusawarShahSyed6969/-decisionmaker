var number1 = Math.floor(Math.random() * 6 + 1);

var img1 = document.querySelectorAll("img")[0];

var images = "images/dice"+number1+".png"

img1.setAttribute("src",images);



var number2 = Math.floor(Math.random()*6+1);

var img2 = document.querySelectorAll("img")[1];

var image2 = "images/dice"+number2+".png"

img2.setAttribute("src",image2);

wintext = document.querySelector("h1");
if(number1 > number2){
    wintext.innerHTML = "Player 1 Win"
}
else if(number2 > number1)
{
    wintext.innerHTML = "Player 2 Win"
}
else{
    wintext.innerHTML = "Draw!"
}












