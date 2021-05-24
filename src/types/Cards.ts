export class Card {
    readonly name: string;
    readonly cards: Array<CardItem>;
    readonly bookmarks: Array<CardItem>;

    constructor(name: string, cards: Array<CardItem>) {
        this.name = name;
        this.cards = cards;
        this.bookmarks = cards;
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