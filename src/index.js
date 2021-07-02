import "./styles/index.scss";
import Game from './scripts/game'

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  game.createCanvas();
  console.log('hello123234')
  document.addEventListener('keypress', (e) => {if (e.code === 'Space') { game.launch()}});
});