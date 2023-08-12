document.querySelector(".Bot").addEventListener("click", randomize);
function randomize() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDice1 = "dice" + randomNumber1 + ".png";
  var randomFol1 = "./images/" + randomDice1;
  document.querySelector(".img1").setAttribute("src", randomFol1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDice2 = "dice" + randomNumber2 + ".png";
  var randomFol2 = "./images/" + randomDice2;
  document.querySelector(".img2").setAttribute("src", randomFol2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = " Player 2 Wins 🚩";
  } else {
    document.querySelector("h1").textContent = "🚩 Draw 🚩";
  }
}
