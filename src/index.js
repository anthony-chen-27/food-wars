import "./styles/index.scss";
import Game from './scripts/game'

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  game.createCanvas();
  document.addEventListener('keypress', (e) => {if (e.code === 'Space') { game.launch()}});
  document.addEventListener('keydown', (e) => {if (e.code === 'ArrowLeft') { game.moveLeft(true)}});
  document.addEventListener('keyup', (e) => {if (e.code === 'ArrowLeft') { game.moveLeft(false)}});
});