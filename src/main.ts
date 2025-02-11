import Game from "./Game";

const game = new Game();

const $startButton = document.getElementById("start-game");

if ($startButton) {
  $startButton.addEventListener("click", game?.gameStart);
}
