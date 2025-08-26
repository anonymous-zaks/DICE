// document.querySelector("h1").style.color = "blue";
let randomNumber=Math.floor(Math.random()*6)+1;
let randomDice="dice"+randomNumber+".png";
let randomImageSource="images/"+randomDice;
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
let randomNumber2=Math.floor(Math.random()*6)+1;

let randomImageSource2="images/dice"+randomNumber2+".png";
// let image2=document.querySelectorAll("img")[1];
// image2.setAttribute("src",randomImageSource);
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(randomNumber2>randomNumber){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{   
    document.querySelector("h1").innerHTML="It's a Draw!";
}

