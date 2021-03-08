import NumberAsPlacement from "./number-as-placement.js"

export default class ParsedDay {
  constructor(day, month, year) {
    /**
     * see comments in ../../../../update.js (Update) and ../../update-aria-label.js (UpdateAriaLabel) class-files
     * helper classes: ParsedDay (this), ParsedMonth (../parsed-month/parsed-month.js)
    **/
    this.day = day
    this.month = month
    this.year = year
    if (this.day === 1) {
      this.parsed = "opening"
    } else {
      // if january (1), march (3), may (5), july (7), august (8), october (10), or december (12), the ending day is the 31st
      if (this.month === 1 || this.month === 3 || this.month === 5 || this.month === 7 || this.month === 8 || this.month === 10 || this.month === 12) {
        if (this.day === 31) {
          this.parsed = "ending"
        } else {
          const numberAsPlacement = new NumberAsPlacement(this.day)
          this.parsed = numberAsPlacement.parsed
        }
        // as long as not february (not 2), for all other months, the ending day is the 30th
      } else if (this.month !== 2) {
        if (this.day === 30) {
          this.parsed = "ending"
        } else {
          const numberAsPlacement = new NumberAsPlacement(this.day)
          this.parsed = numberAsPlacement.parsed
        }
        // if february (2), the ending day is defined by the year
      } else {
        // if not a leap year (this.year / 4 has a remainder, 0 is falsy and other numbers are truthy), the ending day is the 28th
        if (this.year % 4) {
          if (this.day === 28) {
            this.parsed = "ending"
          } else {
            const numberAsPlacement = new NumberAsPlacement(this.day)
            this.parsed = numberAsPlacement.parsed
          }
        // if a leap year (this.year / 4 has a remainder is not true, 0 is falsy and other numbers are truthy), the ending day is the 29th
        } else {
          if (this.day === 29) {
            this.parsed = "ending"
          } else {
            const numberAsPlacement = new NumberAsPlacement(this.day)
            this.parsed = numberAsPlacement.parsed
          }
        }
      }
    }
  }
}
