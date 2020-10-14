export class Coupon {
    private _title: string;
    private _description: string;
    private _expiresIn: number;
    private _price: number;

    constructor(title: string, description: string, expiresIn: number, price: number) {
        this.title = title;
        this.description = description;
        this.expiresIn = expiresIn;
        this.price = price;
    }

    get title() : string {
        return this._title;
    }

    set title(title: string) {
        this._title = title.trim();
    }

    get description() : string {
        return this._description;
    }

    set description(description: string)  {
        this._description = description;
    }

    get expiresIn() : number {
        return this._expiresIn;
    }

    set expiresIn(exp: number) {
        if (exp > 0) {
            this._expiresIn = exp;
        }
    }

    get price() : number {
        return this._price;
    }

    set price(price: number)  {
        if (price > 0) {
            this._price = price;
        }
    }

}