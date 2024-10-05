import "bootstrap/dist/css/bootstrap.css"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"

import { BookmarkCard } from "./types/BookmarkCards.ts"
import { getBrowserInstance } from "./helpers/browser-instance.ts"
import { bookmarksToCards } from "./helpers/bookmarks-to-cards.ts"
import { sessionsToCards } from "./helpers/sessions-to-cards.ts"
import sample from "./data/sample-cards.ts"

const cards:Array<BookmarkCard> = []
try {
    const browser = getBrowserInstance()
    bookmarksToCards(browser.bookmarks.getTree, cards)
    sessionsToCards(browser.sessions.getRecentlyClosed, cards)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (error) {
    cards.push(...sample)
}

// @ts-expect-error __* are replaced by Webpack
const version = __BOOKMARKS_CARDS_VERSION__ + " [" + __BOOKMARKS_CARDS_DATE__ + "]"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App cards={cards} version={version} />
    </StrictMode>,
)
