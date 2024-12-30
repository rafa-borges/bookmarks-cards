import { BookmarkCard, BookmarkCardItem } from "../types/BookmarkCards.ts"

const cardItems = new Array<BookmarkCardItem>()
cardItems.push(new BookmarkCardItem("Mail", "https://gmail.com", "https://www.google.com/s2/favicons?domain=https://www.gmail.com/" ))
cardItems.push(new BookmarkCardItem("Jira", "https://jira.com", "https://www.google.com/s2/favicons?domain=https://www.jira.com" ))
cardItems.push(new BookmarkCardItem("Stackoverflow", "https://stackoverflow.com", "https://www.google.com/s2/favicons?domain=https://www.stackoverflow.com" ))
cardItems.push(new BookmarkCardItem("Looker", "https://looker.com", "https://www.google.com/s2/favicons?domain=https://looker.com" ))

const cards = new Array<BookmarkCard>();
cards.push(new BookmarkCard("Key Links", cardItems))

for (let i = 0; i < 15; i++) {
  cards.push(new BookmarkCard(`Some More Links ${i + 1}`, cardItems, i % 2 === 0))
}

export default cards