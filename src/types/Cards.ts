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

    constructor(name: string = "", url: string = "", icon: string = CardItem.faviconURL(url)) {
        this.name = name;
        this.url = url;
        this.icon = icon;
    }

    // https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/sample.favicon-cs
    static faviconURL(u:string): string {
      const url = new URL(chrome.runtime.getURL('/_favicon/'));
      url.searchParams.set('pageUrl', u); // this encodes the URL as well
      url.searchParams.set('size', '32');
      return url.toString();
    }

}