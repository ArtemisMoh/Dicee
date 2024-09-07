var randomNumber1 = Math.round(Math.random() * 6) + 1
var randomNumber2 = Math.round(Math.random() * 6) + 1

switch (randomNumber1) {
    case 1:
        document.querySelector(".img1").setAttribute("src", "images/dice1.png")
        break;

    case 2:
        document.querySelector(".img1").setAttribute("src", "images/dice2.png")
        break;

    case 3:
        document.querySelector(".img1").setAttribute("src", "images/dice3.png")
        break; 
        
    case 4:
        document.querySelector(".img1").setAttribute("src", "images/dice4.png")
        break;

    case 5:
        document.querySelector(".img1").setAttribute("src", "images/dice5.png")
        break;

    case 6:
        document.querySelector(".img1").setAttribute("src", "images/dice6.png")
        break;

    default:
        document.querySelector(".img1").setAttribute("alt", "sorry")
        break;
}

switch (randomNumber2) {
    case 1:
        document.querySelector(".img2").setAttribute("src", "images/dice1.png")
        break;

    case 2:
        document.querySelector(".img2").setAttribute("src", "images/dice2.png")
        break;

    case 3:
        document.querySelector(".img2").setAttribute("src", "images/dice3.png")
        break; 
        
    case 4:
        document.querySelector(".img2").setAttribute("src", "images/dice4.png")
        break;

    case 5:
        document.querySelector(".img2").setAttribute("src", "images/dice5.png")
        break;

    case 6:
        document.querySelector(".img2").setAttribute("src", "images/dice6.png")
        break;

    default:
        document.querySelector(".img2").setAttribute("alt", "sorry")
        break;
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🍁Player 1 won!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 won!🌙";
} else {
    document.querySelector("h1").innerHTML = "It's a draw!";
}