import "./BookmarksCards.css"

import React, { useEffect, useState } from "react"
import { Card, ListGroup, Image, OverlayTrigger } from "react-bootstrap"
import { BookmarkCard, BookmarkCardItem } from "../types/BookmarkCards.ts"

interface BookmarksCardsProps {
    cards: BookmarkCard[];
    clickOnCard: (card: BookmarkCard) => void;
    clickOnCardItem: (item: BookmarkCardItem) => void;
}

const CardHeader: React.FC<{ card: BookmarkCard, isVisible: boolean, onToggle: () => void, onClick: () => void }> = ({ card, isVisible, onToggle, onClick }) => (
  <Card.Header>
    {card.isNested && <span onClick={onToggle}>{isVisible ? " ➖ " : " ➕ "}</span>}
    <span onClick={onClick}>{card.name}</span>
  </Card.Header>
)

const CardItems: React.FC<{ items: BookmarkCardItem[], onClickItem: (item: BookmarkCardItem) => void }> = ({ items, onClickItem }) => (
  <ListGroup>
    {items.map((item, index) => (
      <ListGroup.Item key={index} onClick={() => onClickItem(item)} className="standard-link">
        {item.icon && <Image src={item.icon} className="item-icon" />}
        {item.name}
      </ListGroup.Item>
    ))}
  </ListGroup>
)

const HiddenCardContent: React.FC<{ index: number, items: BookmarkCardItem[], onClickItem: (item: BookmarkCardItem) => void, width: number | null }> = ({ index, items, onClickItem, width }) => (
  <OverlayTrigger
    trigger={['hover','click']}
    placement="bottom"
    delay={{ show: 500, hide: 2500 }}
    overlay={
      <Card key={`ovl-${index}`} body={false} style={{ width: width ?? 'auto' }} className="card-as-overlay">
        <CardItems items={items} onClickItem={onClickItem} />
      </Card>}>
    <ListGroup>
      <ListGroup.Item className="standard-link">
        {items.map((item, index) => item.icon && <Image key={index} src={item.icon} className="item-icon" />)}
      </ListGroup.Item>
    </ListGroup>
  </OverlayTrigger>
)

const BookmarksCards: React.FC<BookmarksCardsProps> = ({ cards, clickOnCard, clickOnCardItem }) => {
    const keyCards = cards.slice(0, 1)
    const standardCards = cards.slice(1)

    const [visibleCardIndices, setVisibleCardIndices] = useState<boolean[]>(standardCards.map(card => !card.isNested))
    const [listGroupItemWidth, setListGroupItemWidth] = useState<number | null>(null)
    const listGroupItemRef = React.useRef<HTMLDivElement>(null)

    const toggleVisibility = (index: number) => {
      setVisibleCardIndices(prevState => {
        const newState = [...prevState]
        newState[index] = !newState[index]
        return newState
      })
    }

    useEffect(() => {
      if (listGroupItemRef.current) {
        setListGroupItemWidth(listGroupItemRef.current.offsetWidth)
      }
    }, [])

    return (
        <div>
            {keyCards.map((card, i) => (
                <Card key={`key-${i}`} className="key-link">
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

            <div className="card-container">
                {standardCards.map((card, i) => (
                  <Card key={`std-${i}`} body={false} ref={listGroupItemRef}>
                    <CardHeader
                      card={card}
                      isVisible={visibleCardIndices[i]}
                      onToggle={() => toggleVisibility(i)}
                      onClick={() => clickOnCard(card)}/>
                    {visibleCardIndices[i] ? (
                      <CardItems items={card.items} onClickItem={clickOnCardItem} />
                    ) : (
                      <HiddenCardContent index={i} items={card.items} onClickItem={clickOnCardItem} width={listGroupItemWidth} />
                    )}
                  </Card>
                ))}
            </div>
        </div>
    );
};

export default BookmarksCards;