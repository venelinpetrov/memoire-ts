const CARD_NAMES = [
    ...Array.from({ length: 9 }, (_, i) => String(i + 2)),
    'jack', 'queen', 'king', 'ace'
];


const CARD_SUITS = ['clubs', 'diamonds', 'hearts', 'spades'];

const generateDeck = (): string[] => {
    return CARD_NAMES.flatMap(name => CARD_SUITS.map(suit => `${name}_${suit}`));
};

const shuffle =<T,>(arr: T[]): T[] => {
    return arr
        .map(name => ({ name, rand: Math.random() }))
        .toSorted((a, b) => a.rand - b.rand)
        .map(card => card.name);
}

export const createDeck = (gridSize: number) => {
    if (gridSize % 2 != 0) {
        throw new Error("Only even numbers are allowed");
    }

    const numPairs = gridSize * gridSize / 2;
    const shuffled = shuffle(generateDeck()).slice(0, numPairs);
    const shuffled2 = shuffle(shuffled);

    return [...shuffled, ...shuffled2];
}