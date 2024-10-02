import { BookmarkCard, BookmarkCardItem } from "../types/BookmarkCards.ts"
import { cardItemTitle } from "./card-item-title.ts"

export function sessionsToCards(sessionsRecentlyClosed: typeof chrome.sessions.getRecentlyClosed, cards: Array<BookmarkCard>): void {

    sessionsRecentlyClosed(sessions => {
        const cardItems = sessions
            .filter(sessionItem => sessionItem.tab != undefined)
            .filter(sessionItem => !sessionItem.tab?.url?.startsWith("chrome"))
            .slice(0, 3)
            .map(sessionItem => new BookmarkCardItem(cardItemTitle(sessionItem.tab?.title), sessionItem.tab?.url))
        cards.push(new BookmarkCard("Recently Closed", cardItems))
    })

}
