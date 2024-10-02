import './App.css'

function App({ version, cards }: { version: string, cards: string }) {

    return (
        <>
            <p className="version">{version}</p>
            <p className="version">{cards}</p>
        </>
    )
}

export default App
