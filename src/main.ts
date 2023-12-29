import { createApp } from 'vue'
import BootstrapVueNext from 'bootstrap-vue-next'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import { getBrowserInstance } from "@/helpers/browser-instance"
import { bookmarksToCards } from "@/helpers/bookmarks-to-cards"
import { sessionsToCards } from "@/helpers/sessions-to-cards"
import sample from '@/data/sample-cards.ts'

// Really ugly way of doing it - I could not find a better way for doing it on Vue3

const cards = []
var bookmarksReady = false
var sessionsReady = false

try {
  const browser = getBrowserInstance()
  bookmarksToCards(browser.bookmarks.getTree, cards, onCompletionOfBookmarks)
  sessionsToCards(browser.sessions.getRecentlyClosed, cards, onCompletionOfSessions)
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
        const app = createApp(App)
        app.use(BootstrapVueNext)
        app.config.globalProperties.cards = cards
        app.config.globalProperties.version = __BOOKMARKS_CARDS_VERSION__ + " [" + __BOOKMARKS_CARDS_DATE__ + "]"
        app.mount('#app')
    }
}
