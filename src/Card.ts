type Position = [number, number];

export class Card {
    private position: Position;
    private _name: string;
    private opened: boolean = false;
    private el: HTMLDivElement | null = null;
    private callback: (name: string) => void;

    constructor(position: Position, name: string) {
        this.position = position;
        this._name = name;
        this.callback = () => null;
        this.el = document.createElement('div');
        this.el.addEventListener('click', () => this.open(), false);
    }

    onOpen(callback: (name: string) => void) {
        this.callback = callback;
    }

    render() {
        const el = this.el!;
        el.classList.add('card');
        el.innerHTML = [...this.position, this.opened, this.opened ? this._name : 'unknown'].join(',');
        return el;
    }

    close() {
        this.opened = false;
    }

    remove() {
        this.el?.classList.add('removed');
        this.render();
    }

    get name() {
        return this._name;
    }

    private open() {
        if (this.opened) {
            return;
        }
        this.opened = true;
        this.render();
        this.callback(this._name);
    }



}