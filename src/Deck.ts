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

function shuffle<T,>(arr: T[]): T[] {
    return arr
        .map(name => ({ name, rand: Math.random() }))
        .toSorted((a, b) => a.rand - b.rand)
        .map(card => card.name);
}

export const createDeck = (n: number) => {
    if (n % 2 != 0) {
        throw new Error("Only even numbers are allowed");
    }

    const N = n * n / 2;
    const shuffled = shuffle(DECK).slice(0, N);
    const shuffled2 = shuffle(shuffled);

    return [...shuffled, ...shuffled2];
}