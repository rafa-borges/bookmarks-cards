import { BookmarkCard, BookmarkCardItem } from "../types/BookmarkCards.ts"
import { cardItemTitle } from "./card-item-title.ts"

export function historyToCards(historySearch: typeof chrome.history.search, cards: Array<BookmarkCard>): void {

    historySearch({text: ''}, historyItems => {
        const cardItems = historyItems
            .filter(historyItem => historyItem.visitCount != undefined)
            // @ts-expect-error visitCount could be undefined
            .sort((a, b) => b?.visitCount - a?.visitCount)
            .slice(0, 10)
            .map(historyItem => new BookmarkCardItem(cardItemTitle(historyItem.visitCount + " " + historyItem.title), historyItem.url))
        cards.push(new BookmarkCard("Most Visited History", cardItems))
    })

}
