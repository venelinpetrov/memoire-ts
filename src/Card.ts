export class Card {
    private opened = false;
    private removed = false;
    private el: HTMLDivElement;
    private innerEl: HTMLDivElement;
    private frontEl: HTMLDivElement;
    private backEl: HTMLDivElement;
    private onClick: () => void = () => { };

    constructor(public readonly name: string) {
        this.el = document.createElement('div');
        this.el.classList.add('card');
        this.el.addEventListener('click', () => this.handleClick());

        this.innerEl = document.createElement('div');
        this.innerEl.classList.add('card-inner');

        this.frontEl = document.createElement('div');
        this.frontEl.classList.add('card-front');
        this.frontEl.style.backgroundImage = "url('../public/cards/back/blue.svg')";

        this.backEl = document.createElement('div');
        this.backEl.classList.add('card-back');
        this.backEl.style.backgroundImage = `url(../public/cards/front/${this.name}.svg)`;

        this.innerEl.appendChild(this.frontEl);
        this.innerEl.appendChild(this.backEl);
        this.el.appendChild(this.innerEl);

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
        this.el.classList.toggle('opened', this.opened);
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
