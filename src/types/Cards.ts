export class Card {
    readonly name: string;
    readonly items: Array<CardItem>;

    constructor(name: string, items: Array<CardItem>) {
        this.name = name;
        this.items = items;
    }

}

export class CardItem {
    readonly name: string;
    readonly url: string;
    readonly icon: string;

    constructor(name: string, url: string = "", icon: string = "") {
        this.name = name;
        this.url = url;
        this.icon = icon;
    }
}