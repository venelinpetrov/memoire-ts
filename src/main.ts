import './styles.css'
import { Card } from './Card';

document.addEventListener('DOMContentLoaded', main);

function main () {
    const cards = ['heart', 'leaf', 'heart', 'leaf'];
    const openedCards: Card[] = [];
    const cardsContainer = cards.reduce((container, name) => {
        const card = new Card([0, 0], name);

        card.onOpen(() => {
            openedCards.push(card);
            if (openedCards.length == 2) {
                if (openedCards[0].name == openedCards[1].name) {
                    openedCards.forEach(card => card.remove());
                } else {
                    openedCards.forEach(card => card.close());
                }
                openedCards.length = 0;
            }
        });
        container.appendChild(card.render());
        return container;
    }, document.createElement('div'));

    document.querySelector<HTMLDivElement>('#app')!.appendChild(cardsContainer)
}



