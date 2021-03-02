const defaultToggle = document.getElementById("default-toggle")
const defaultSchema = document.getElementById("default-schema")
const pumpkinMinionToggle = document.getElementById("pumpkin-minion-toggle")
const pumpkinMinionSchema = document.getElementById("pumpkin-minion-schema")
const gettingStartedToggle = document.getElementById("getting-started-toggle")
const gettingStartedSchema = document.getElementById("getting-started-schema")
const jotterName = "jotter"
const invertName = "invert"
const jotterTextarea = document.getElementById("jotter")
const jotButton = document.getElementById("jot")
const jotterSave = localStorage.getItem(jotterName)
const invert = document.getElementById("invert")
const invertSave = localStorage.getItem(invertName)
const savePreferences = document.getElementById("save-preferences")

if (jotterSave) {
  jotterTextarea.value = jotterSave
}

if (invertSave !== null && invertSave !== undefined) {
  invert.checked = invertSave
  if (invert.checked) {
    document.body.style.backgroundColor = "#333"
    document.body.style.color = "darkgray"
    for (const element of document.querySelectorAll("details")) {
      element.style.backgroundColor = "#333"
      element.style.color = "darkgray"
    }
    for (const element2 of document.querSelectorAll("summary")) {
      element.style.backgroundColor = "#333"
      element.style.color = "darkgray"
    }
  } else {
    document.body.style.backgroundColor = "darkgray"
    document.body.style.color = "#333"
    for (const element of document.querySelectorAll("details")) {
      element.style.backgroundColor = "darkgray"
      element.style.color = "#333"
    }
    for (const element2 of document.querSelectorAll("summary")) {
      element.style.backgroundColor = "darkgray"
      element.style.color = "#333"
    }
  }
}

defaultToggle.addEventListener("click", () => {
  pumpkinMinionSchema.style.display = "none"
  gettingStartedSchema.style.display = "none"
  defaultSchema.style.display = "block"
})

pumpkinMinionToggle.addEventListener("click", () => {
  defaultSchema.style.display = "none"
  gettingStartedSchema.style.display = "none"
  pumpkinMinionSchema.style.display = "block"
})

gettingStartedToggle.addEventListener("click", () => {
  defaultSchema.style.display = "none"
  pumpkinMinionSchema.style.display = "none"
  gettingStartedSchema.style.display = "block"
})

jotButton.addEventListener("click", () => {
  localStorage.setItem(jotterName, jotterTextarea.value)
  alert("Jotter has been jotted!")
  console.log("Jotter was successfully jotted.")
}, false)

savePreferences.addEventListener("click", () => {
  if (invert.checked) {
    document.body.style.backgroundColor = "#333"
    document.body.style.color = "darkgray"
    for (const element of document.querySelectorAll("details")) {
      element.style.backgroundColor = "#333"
      element.style.color = "darkgray"
    }
    for (const element2 of document.querSelectorAll("summary")) {
      element.style.backgroundColor = "#333"
      element.style.color = "darkgray"
    }
  } else {
    document.body.style.backgroundColor = "darkgray"
    document.body.style.color = "#333"
    for (const element of document.querySelectorAll("details")) {
      element.style.backgroundColor = "darkgray"
      element.style.color = "#333"
    }
    for (const element2 of document.querSelectorAll("summary")) {
      element.style.backgroundColor = "darkgray"
      element.style.color = "#333"
    }
  }
  alert("Preferences have been applied!")
  console.log("Preferences were fully loaded and applied.")
  localStorage.setItem(invertName, invert.checked)
  alert("Preferences have been saved!")
  console.log("Preferences were fully loaded, applied, and saved.")
}, false)
