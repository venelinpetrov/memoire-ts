export const createBoard = (size: number): HTMLDivElement => {
    const el = document.querySelector<HTMLDivElement>('.board')!;

    el.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    el.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    return el;
};