import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { getBrowserInstance } from "./helpers/browser-instance"
import { bookmarksToCards } from './helpers/bookmarks-to-cards'
import { sessionsToCards } from "./helpers/sessions-to-cards"
import sample from './data/sample-cards.ts'

// Hideous way of doing it - I could not find a better way for doing it on Vue3

const cards = []
var bookmarksReady = false
var sessionsReady = false

try {
    const browser = getBrowserInstance()
    bookmarksToCards(browser.bookmarks.getTree, cards, onCompletionOfBookmarks)
    sessionsToCards(browser.sessions.getRecentlyClosed, cards, onCompletionOfSessions)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (error) {
    cards.push(...sample)
    onCompletionOfBookmarks()
    onCompletionOfSessions()
}

function onCompletionOfBookmarks() {
    bookmarksReady = true
    completeAppCreation()
}

function onCompletionOfSessions() {
    sessionsReady = true
    completeAppCreation()
}

function completeAppCreation() {
    if (bookmarksReady && sessionsReady) {
        const version = __BOOKMARKS_CARDS_VERSION__ + " [" + __BOOKMARKS_CARDS_DATE__ + "]" // eslint-disable-line

        createRoot(document.getElementById('root')!).render(
            <StrictMode>
                <App version={version} cards={"L " + cards.length }/>
            </StrictMode>,
        )

    }
}
