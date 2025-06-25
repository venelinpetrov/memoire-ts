import './styles.css'
import { Card } from './Card';

const CARD_NAMES = [
    ...Array.from({ length: 9 }, (_, i) => String(i + 2)),
    'jack', 'queen', 'king', 'ace'
];

const CARD_SUITS = [
    'clubs',
    'diamonds',
    'hearts',
    'spades'
];

const DECK = CARD_NAMES.reduce<string[]>((deck, cardName) => {
    return deck.concat(CARD_SUITS.map(suit => `${cardName}_${suit}`));
}, []);


document.addEventListener('DOMContentLoaded', main);

function shuffle<T,>(arr: T[]): T[] {
    return arr
        .map(name => ({ name, rand: Math.random() }))
        .toSorted((a, b) => a.rand - b.rand)
        .map(card => card.name);
}

function createDeck(n: number, deck: string[]) {
    if (n % 2 != 0) {
        throw new Error("Only even numbers are allowed");
    }

    const N = n * n / 2;
    const shuffled = shuffle(deck).slice(0, N);
    const shuffled2 = shuffle(shuffled);

    return [...shuffled, ...shuffled2];
}

console.log(createDeck(4, DECK))

function main () {
    const level = 3;
    const gridSize = level * 2;
    const openedCards: Card[] = [];
    const boardEl = document.createElement('div');
    boardEl.classList.add('board');
    boardEl.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    boardEl.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    const deck = createDeck(gridSize, DECK);
    const board = deck.reduce((board, name) => {
        const card = new Card(name);

        card.onOpen(() => {
            openedCards.push(card);
            if (openedCards.length > 2) {
                return;
            }
            if (openedCards.length == 2) {
                if (openedCards[0].name == openedCards[1].name) {
                    openedCards.forEach(card => card.remove());
                    openedCards.length = 0;
                } else {
                    board.classList.add('disabled');
                    setTimeout(() => {
                        openedCards.forEach(card => card.close());
                        openedCards.length = 0;
                        board.classList.remove('disabled');
                    }, 1000);
                }
            }
        });
        board.appendChild(card.render());
        return board;
    }, boardEl);

    document.querySelector<HTMLDivElement>('#app')!.appendChild(board)
}



