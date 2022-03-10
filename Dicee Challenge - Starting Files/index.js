var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

randomImg1 = "images/dice" + randomNumber1 + ".png";
randomImg2 = "images/dice" + randomNumber2 + ".png";


document.getElementsByClassName("img1")[0].setAttribute("src", randomImg1);
document.getElementsByClassName("img2")[0].setAttribute("src", randomImg2);

if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].textContent = "🚩 Player 1 Wins !"
}
else if (randomNumber1 < randomNumber2) {
    document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins ! 🚩"
}
else {
    document.getElementsByTagName("h1")[0].textContent = "Draw!"
};