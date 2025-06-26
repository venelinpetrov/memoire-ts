export class Card {
    private opened = false;
    private removed = false;
    private el: HTMLDivElement;
    private onClick: () => void = () => { };

    constructor(public readonly name: string) {
        this.el = document.createElement('div');
        this.el.classList.add('card');
        this.el.addEventListener('click', () => this.handleClick());
        this.update();
    }

    private handleClick() {
        if (!this.opened && !this.removed) {
            this.opened = true;
            this.update();
            this.onClick();
        }
    }

    setOnClick(fn: () => void) {
        this.onClick = fn;
    }

    getElement(): HTMLDivElement {
        return this.el;
    }

    update() {
        this.el.textContent = this.opened ? this.name : '';
        this.el.classList.toggle('removed', this.removed);
    }

    close() {
        this.opened = false;
        this.update();
    }

    remove() {
        this.removed = true;
        this.update();
    }

    isOpened(): boolean {
        return this.opened;
    }
}