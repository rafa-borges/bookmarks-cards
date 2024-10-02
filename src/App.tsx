import BookmarksCards from "./components/BookmarksCards.tsx"
import "./App.css"
import { BookmarkCard } from "./types/BookmarkCards.ts"
import { cardClicked, cardItemClicked } from "./helpers/card-handlers.ts"

function App({ version, cards }: { version: string, cards: Array<BookmarkCard> }) {

    return (
        <>
            <BookmarksCards cards={cards} clickOnCard={cardClicked} clickOnCardItem={cardItemClicked} />
            <p className="version">{version}</p>
        </>
    )
}

export default App
