import { BookmarkCard, BookmarkCardItem } from "../types/BookmarkCards.ts"
import BookmarkTreeNode = chrome.bookmarks.BookmarkTreeNode;

export function bookmarksToCards(getBookmarksTree: typeof chrome.bookmarks.getTree, cards: Array<BookmarkCard>): void {

    getBookmarksTree(bookmarkTreeNodes => {
        for (const topTreeNode of bookmarkTreeNodes) {
            const children = topTreeNode.children;
            if (children != undefined) {
                for (const categoryTreeNode of children) {
                    bookmarkNodeToCard(categoryTreeNode, "")
                }
            }
        }
    })

    function bookmarkNodeToCard(bookmarkNode: BookmarkTreeNode, prefix: string): void {
        // Direct bookmarks of the node
        const cardItems = new Array<BookmarkCardItem>()
        const children = bookmarkNode.children;
        if (children != undefined) {
            for (const bookmark of children.filter(node => node.url)) {
                cardItems.push(new BookmarkCardItem(bookmark.title, bookmark.url))
            }
            if (cardItems.length > 0) {
                const name = prefix + bookmarkNode.title
                cards.push(new BookmarkCard(name, cardItems))
            }
            // Children that have arrays of bookmarks
            for (const childNode of children.filter(node => node.children)) {
                const name = bookmarkNode.parentId === "0" ? prefix : prefix + bookmarkNode.title + " → "
                bookmarkNodeToCard(childNode, name)
            }
        }
    }
}
