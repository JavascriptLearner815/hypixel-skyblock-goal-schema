export default class ParsedMonth {
  constructor(month) {
    /**
     * see comments in ./update.js (Update) and ./update-aria-label.js (UpdateAriaLabel) class-files
     * helper classes: ParsedDay (../parsed-day/parsed-day.js), ParsedMonth (this)
    **/
    this.month = month
    if (this.month === 1) {
      this.parsed = "January"
    } else if (this.month === 2) {
      this.parsed = "February"
    } else if (this.month === 3) {
      this.parsed = "March"
    } else if (this.month === 4) {
      this.parsed = "April"
    } else if (this.month === 5) {
      this.parsed = "May"
    } else if (this.month === 6) {
      this.parsed = "June"
    } else if (this.month === 7) {
      this.parsed = "July"
    } else if (this.month === 8) {
      this.parsed = "August"
    } else if (this.month === 9) {
      this.parsed = "September"
    } else if (this.month === 10) {
      this.parsed = "October"
    } else if (this.month === 11) {
      this.parsed = "November"
    } else if (this.month === 12) {
      this.parsed = "December"
    }
  }
}
