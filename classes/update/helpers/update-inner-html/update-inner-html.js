export default class UpdateInnerHTML {
  constructor(month, day, year, content) {
    /**
     * see comments in ../../update.js (Update) class-file
     * helper classes: UpdateAriaLabel (../update-aria-label/update-aria-label.js), UpdateInnerHTML (this)
    **/
    this.month = month
    this.day = day
    this.year = year
    this.content = content
    this.parsed = `<p><dfn>${this.month}/${this.day}/${this.year}:</dfn> ${this.content}</p>`
  }
}
