import { BookmarkCard, BookmarkCardItem } from "../types/BookmarkCards.ts"
import { cardItemTitle } from "./card-item-title.ts"
import Session = chrome.sessions.Session;

export async function sessionsToCards(sessionsRecentlyClosed: typeof chrome.sessions.getRecentlyClosed, cards: Array<BookmarkCard>): Promise<void> {

    const sessions:Session[] = await sessionsRecentlyClosed()
    const cardItems = sessions
        .filter(sessionItem => sessionItem.tab != undefined)
        .filter(sessionItem => !sessionItem.tab?.url?.startsWith("chrome"))
        .slice(0, 3)
        .map(sessionItem => new BookmarkCardItem(cardItemTitle(sessionItem.tab?.title), sessionItem.tab?.url))
    cards.push(new BookmarkCard("Recently Closed", cardItems))

}
