import './styles.css';
import { Game } from './Game';

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game(4); // 4x4 grid
    game.start();
});
