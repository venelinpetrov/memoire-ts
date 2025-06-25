export class Card {
    private _name: string;
    private opened: boolean = false;
    private el: HTMLDivElement | null = null;
    private callback: (name: string) => void;

    constructor(name: string) {
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
        el.innerHTML = this.opened ? this._name : '';
        return el;
    }

    close() {
        this.opened = false;
        this.render();
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