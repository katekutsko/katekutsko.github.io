export class Category {
    private _name : string;

    constructor(name : string) {
        this.name = name;
    }

    set name(name : string) {
        this._name = name.trim();
    }

    get name() : string {
        return this._name;
    }
}