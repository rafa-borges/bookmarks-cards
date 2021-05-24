import {
  Card,
  CardItem
} from '@/types/Cards'

const cardItems = new Array<CardItem>()
cardItems.push(new CardItem("Mail", "https://gmail.com", "https://www.google.com/s2/favicons?domain=https://www.gmail.com/" ))
cardItems.push(new CardItem("Jira", "https://jira.com", "https://www.google.com/s2/favicons?domain=https://www.jira.com" ))
cardItems.push(new CardItem("Stackoverflow", "https://stackoverflow.com", "https://www.google.com/s2/favicons?domain=https://www.stackoverflow.com" ))
cardItems.push(new CardItem("Looker", "https://looker.com", "https://www.google.com/s2/favicons?domain=https://looker.com" ))

const cards = new Array<Card>();
cards.push(new Card("Key Links", cardItems))

for (let i = 0; i < 9; i++) {
  cards.push(new Card(`Some More Links ${i + 1}`, cardItems))
}

export default cards