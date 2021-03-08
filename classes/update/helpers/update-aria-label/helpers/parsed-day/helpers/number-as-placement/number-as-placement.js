export default class NumberAsPlacement {
  constructor(number) {
    /**
     * see comments in ../../../../../../update.js (Update), ../../../../update-aria-label.js (UpdateAriaLabel), and ../../parsed-day.js class-files
     * helper classes: NumberAsPlacement (this)
    **/
    this.number = number
    this.getLastDigit = (str, num) => {
      return num.toString()
    }
    this.lastDigit = +[...this.getLastDigit`${this.number}`].pop()
    // if last digit is 1, the ending sequence is "st"
    if (this.lastDigit === 1) {
      this.parsed = `${this.number}st`
    // if last digit is 2, the ending sequence is "nd"
    } else if (this.lastDigit === 2) {
      this.parsed = `${this.number}nd`
    // if last digit is 3, the ending sequence is "rd"
    } else if (this.lastDigit === 3) {
      this.parsed = `${this.number}rd`
    // if last digit is not 1, 2, or 3 (4, 5, 6, 7, 8, 9, or 0), the ending sequence is "th"
    } else {
      this.parsed = `${this.number}th`
    }
  }
}
