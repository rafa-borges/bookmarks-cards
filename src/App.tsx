import "./App.css"

import BookmarksCards from "./components/BookmarksCards.tsx"
import { BookmarkCard } from "./types/BookmarkCards.ts"
import { cardClicked, cardItemClicked } from "./helpers/card-handlers.ts"

function App({ version, cards }: { version: string, cards: Array<BookmarkCard> }) {
  const helpPage = "https://github.com/rafa-borges/bookmarks-cards/blob/master/docs/getting-started.md"
  return (
      <>
          <BookmarksCards cards={cards} clickOnCard={cardClicked} clickOnCardItem={cardItemClicked} />
          <p className="version">
            {version}
            &nbsp;
            <a className="version" href={helpPage} target="_blank">ℹ️</a>
          </p>
      </>
  )
}

export default App
