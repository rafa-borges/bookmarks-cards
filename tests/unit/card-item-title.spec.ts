import { cardItemTitle } from "@/helpers/card-item-title";

describe('cardItemTitle', () => {
  it('should handle undefined properly', () => {
    expect(cardItemTitle(undefined)).toBe("")
  })

  it('should ignore everything after -', () => {
    expect(cardItemTitle("Something - more")).toBe("Something")
  })

  it('should ignore last - only', () => {
    expect(cardItemTitle("Something - more - yes")).toBe("Something - more")
  })

})

