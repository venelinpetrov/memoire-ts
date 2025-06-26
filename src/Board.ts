export const createBoard = (size: number) => {
    const el = document.createElement('div');
    el.classList.add('board');
    el.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    el.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    return el;
}