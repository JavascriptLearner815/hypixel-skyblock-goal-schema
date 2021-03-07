import UpdateAriaLabel from "./update-aria-label.js"
import UpdateInnerHTML from "./update-inner-html.js"

export default class Update {
  constructor(updateListID, month, day, year, content) {
    /**
     * month, day, and year must be numbers
     * in UTC time
     * content is the update text
     * updateListID is the ID of the ol/ul to add the update notice to
    **/
    this.updateListID = updateListID
    this.month = month
    this.day = day
    this.year = year
    this.content = content
    const newUpdate = document.createElement("li")
    const ariaLabel = new UpdateAriaLabel(this.month, this.day, this.year, this.content)
    newUpdate.setAttribute("aria-label", ariaLabel.parsed)
    const innerHTML = new UpdateInnerHTML(this.month, this.day, this.year, this.content)
    newUpdate.innerHTML = innerHTML.parsed
    updateListID.appendChild(newUpdate)
    this.element = newUpdate
  }
}
