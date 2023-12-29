import { Card, CardItem } from '@/types/Cards'
import { cardItemTitle } from "@/helpers/card-item-title";

export function sessionsToCards(sessionsRecentlyClosed: typeof chrome.sessions.getRecentlyClosed, cards: Array<Card>, completionCallback: Function): void {

    sessionsRecentlyClosed(sessions => {
        const cardItems = sessions
            .filter(sessionItem => sessionItem.tab != undefined)
            .filter(sessionItem => !sessionItem.tab?.url?.startsWith("chrome"))
            .slice(0, 3)
            .map(sessionItem => new CardItem(cardItemTitle(sessionItem.tab?.title), sessionItem.tab?.url))
        cards.push(new Card("Recently Closed", cardItems))
        completionCallback()
    })

}
