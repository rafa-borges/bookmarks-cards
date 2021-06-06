import { Card, CardItem } from '@/types/Cards'
import { cardItemTitle } from "@/helpers/card-item-title";

export function historyToCards(historySearch: typeof chrome.history.search, cards: Array<Card>): void {

    historySearch({text: ''}, historyItems => {
        const cardItems = historyItems
            .filter(historyItem => historyItem.visitCount != undefined)
            // @ts-ignore
            .sort((a, b) => b?.visitCount - a?.visitCount)
            .slice(0, 10)
            .map(historyItem => new CardItem(cardItemTitle(historyItem.visitCount + " " + historyItem.title), historyItem.url))
        cards.push(new Card("Most Visited History", cardItems))
    })

}
