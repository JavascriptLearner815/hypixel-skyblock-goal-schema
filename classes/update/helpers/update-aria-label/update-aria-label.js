import ParsedDay from "./parsed-day.js"
import ParsedMonth from "./parsed-month.js"

export default class UpdateAriaLabel {
  constructor(month, day, year, content) {
    /**
     * see comments in ../../update.js (Update) class-file
     * helper classes: UpdateAriaLabel (this), UpdateInnerHTML (../update-inner-html/update-inner-html.js)
    **/
    this.month = month
    this.day = day
    this.year = year
    this.content = content
    this.parsedYear = this.year
    this.parsedContent = this.content
    const parsedDay = new ParsedDay(this.day, this.month, this.year)
    this.parsedDay = parsedDay.parsed
    const parsedMonth = new ParsedMonth(this.month)
    this.parsedMonth = parsedMonth.parsed
    this.parsed = `On the ${this.parsedDay} of ${this.parsedMonth} in ${this.parsedYear}: ${this.parsedContent}`
  }
}
