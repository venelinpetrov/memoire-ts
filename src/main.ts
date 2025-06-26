import './styles.css'
import { Card } from './Card';
import { createBoard } from './Board';
import { createDeck } from './Deck';

document.addEventListener('DOMContentLoaded', main);

function main () {
    const level = 2;
    const gridSize = level * 2;
    const openedCards: Card[] = [];
    const boardEl = createBoard(gridSize);
    const deck = createDeck(gridSize);

    deck.forEach((name) => {
        const card = new Card(name);

        card.onOpen(() => {
            openedCards.push(card);

            if (openedCards.length == 2) {
                if (openedCards[0].name == openedCards[1].name) {
                    openedCards.forEach(card => card.remove());
                    openedCards.length = 0;
                } else {
                    boardEl.classList.add('disabled');
                    setTimeout(() => {
                        openedCards.forEach(card => card.close());
                        openedCards.length = 0;
                        boardEl.classList.remove('disabled');
                    }, 1000);
                }
            }
        });
        boardEl.appendChild(card.render());
    });

    document.querySelector<HTMLDivElement>('#app')!.appendChild(boardEl);
}



