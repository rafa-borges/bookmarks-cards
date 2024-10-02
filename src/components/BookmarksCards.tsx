import React from "react"
import { Card, ListGroup, Image } from "react-bootstrap"
import { BookmarkCard, BookmarkCardItem } from "../types/BookmarkCards.ts"
import "./BookmarksCards.css"

interface BookmarksCardsProps {
    cards: BookmarkCard[];
    clickOnCard: (card: BookmarkCard) => void;
    clickOnCardItem: (item: BookmarkCardItem) => void;
}

const BookmarksCards: React.FC<BookmarksCardsProps> = ({ cards, clickOnCard, clickOnCardItem }) => {
    const keyCards = (cards: BookmarkCard[]) => cards.slice(0, 1);
    const standardCards = (cards: BookmarkCard[]) => cards.slice(1);

    return (
        <div>
            {keyCards(cards).map((card, i) => (
                <Card key={i} className="key-link">
                    <ListGroup horizontal>
                        {card.items.map((item, j) => (
                            <ListGroup.Item key={j} onClick={() => clickOnCardItem(item)} className="flex-fill key-link">
                                {item.icon && <Image src={item.icon} className="item-icon" />}
                                {item.name}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card>
            ))}
            <div style={{ margin: '10px' }} />
            {/* <Card.Group columns> */}
                {standardCards(cards).map((card, i) => (
                    <Card key={i} body={false}>
                        <Card.Header onClick={() => clickOnCard(card)}>{card.name}</Card.Header>
                        <ListGroup>
                            {card.items.map((item, j) => (
                                <ListGroup.Item key={j} onClick={() => clickOnCardItem(item)} className="standard-link">
                                    {item.icon && <Image src={item.icon} className="item-icon" />}
                                    {item.name}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card>
                ))}
            {/* </Card.Group> */}
        </div>
    );
};

export default BookmarksCards;