import { BookmarkCard, BookmarkCardItem } from "../types/BookmarkCards.ts"
import { getBrowserInstance } from "./browser-instance.ts"

export function cardClicked(card: BookmarkCard) : void {
    const browser = getBrowserInstance()

    const tabsToBeCreated = card.items.length
    const tabsIdsCreated: number[] = [];

    // Is there a better way for this? It's not thread-safe

    card.items.forEach(cardItem => {
        browser.tabs.create({ url: cardItem.url }, tab => {
            tabsIdsCreated.push((tab.id as number))
            if (tabsIdsCreated.length === tabsToBeCreated) {
                browser.tabs.group({  tabIds: tabsIdsCreated })
            }
        })
    })

}

export function cardItemClicked(cardItem: BookmarkCardItem) : void {
    window.location.href = cardItem.url
}