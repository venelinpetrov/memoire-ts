import { Card } from './Card';
import { createBoard } from './Board';
import { createDeck } from './Deck';

export class Game {
    private openedCards: Card[] = [];
    private boardEl: HTMLDivElement;
    private deck: string[];

    constructor(gridSize: number) {
        this.boardEl = createBoard(gridSize);
        this.deck = createDeck(gridSize);
    }

    start() {
        this.deck.forEach(cardName => {
            const card = new Card(cardName);
            card.setOnClick(() => this.handleCardClick(card));
            this.boardEl.appendChild(card.getElement());
        });

        document.querySelector<HTMLDivElement>('#app')!.appendChild(this.boardEl);
    }

    private handleCardClick(card: Card) {
        if (this.openedCards.includes(card)) {
            return;
        }

        this.openedCards.push(card);

        if (this.openedCards.length === 2) {
            const [first, second] = this.openedCards;

            if (first.name === second.name) {
                this.boardEl.classList.add('disabled');
                setTimeout(() => {
                    this.openedCards.forEach(c => c.remove());
                    this.openedCards = [];
                    this.boardEl.classList.remove('disabled');

                }, 500);

            } else {
                this.boardEl.classList.add('disabled');
                setTimeout(() => {
                    this.openedCards.forEach(c => c.close());
                    this.openedCards = [];
                    this.boardEl.classList.remove('disabled');
                }, 1000);
            }
        }
    }
}
