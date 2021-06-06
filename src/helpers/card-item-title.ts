export function cardItemTitle(title: string | undefined) : string {
    if (title === undefined) {
        return ""
    }

    const lastSeparator = Math.max(title.lastIndexOf("-"), title.lastIndexOf("|"))
    if (lastSeparator <= 0) {
        return (title as string)
    }

    return title.substring(0, lastSeparator - 1)
}