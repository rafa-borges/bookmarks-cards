import { BookmarkCard, BookmarkCardItem } from "../types/BookmarkCards.ts"
import BookmarkTreeNode = chrome.bookmarks.BookmarkTreeNode;

export async function bookmarksToCards(getBookmarksTree: typeof chrome.bookmarks.getTree, cards: Array<BookmarkCard>): Promise<void> {

    const bookmarkTreeNodes:BookmarkTreeNode[] = await getBookmarksTree()
    for (const topTreeNode of bookmarkTreeNodes) {
        const children = topTreeNode.children
        if (children != undefined) {
            for (const categoryTreeNode of children) {
                bookmarkNodeToCard(categoryTreeNode, "", false)
            }
        }
    }

    function bookmarkNodeToCard(bookmarkNode: BookmarkTreeNode, prefix: string, isNested: boolean): void {
        // Direct bookmarks of the node
        const cardItems = new Array<BookmarkCardItem>()
        const children = bookmarkNode.children
        if (children != undefined) {
            for (const bookmark of children.filter(node => node.url)) {
                cardItems.push(new BookmarkCardItem(bookmark.title, bookmark.url))
            }
            if (cardItems.length > 0) {
                const name = prefix + bookmarkNode.title
                cards.push(new BookmarkCard(name, cardItems, isNested))
            }
            // Children that have arrays of bookmarks
            for (const childNode of children.filter(node => node.children)) {
                const infoForChild = bookmarkNode.parentId === "0" ?
                  { prefix: prefix, isNested: false }
                  :
                  { prefix: prefix + bookmarkNode.title + " → ", isNested: true }
                bookmarkNodeToCard(childNode, infoForChild.prefix, infoForChild.isNested)
            }
        }
    }
}
