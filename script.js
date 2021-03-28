import Update from "./classes/update/update.js"

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
const updatesID = "updates"

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
    for (const element of document.querySelectorAll("summary")) {
      element.style.backgroundColor = "#333"
      element.style.color = "darkgray"
    }
    for (const element of document.querySelectorAll("div")) {
      element.style.backgroundColor = "#333"
      element.style.color = "darkgray"
    }
    for (const element of document.querySelectorAll("a")) {
      element.style.backgroundColor = "#333"
    }
  } else {
    document.body.style.backgroundColor = "darkgray"
    document.body.style.color = "#333"
    for (const element of document.querySelectorAll("details")) {
      element.style.backgroundColor = "darkgray"
      element.style.color = "#333"
    }
    for (const element of document.querySelectorAll("summary")) {
      element.style.backgroundColor = "darkgray"
      element.style.color = "#333"
    }
    for (const element of document.querySelectorAll("div")) {
      element.style.backgroundColor = "darkgray"
      element.style.color = "#333"
    }
    for (const element of document.querySelectorAll("a")) {
      element.style.backgroundColor = "darkgray"
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
    for (const element of document.querySelectorAll("summary")) {
      element.style.backgroundColor = "#333"
      element.style.color = "darkgray"
    }
    for (const element of document.querySelectorAll("div")) {
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
    for (const element of document.querySelectorAll("summary")) {
      element.style.backgroundColor = "darkgray"
      element.style.color = "#333"
    }
    for (const element of document.querySelectorAll("div")) {
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

const updates = [
  new Update(updatesID, 1, 24, 2021, "Created the barebones Hypixel SkyBlock Goal Schema website with... Nothing."),
  new Update(updatesID, 1, 24, 2021, "Used some of my own CSS code."),
  new Update(updatesID, 1, 24, 2021, "Added prompt on home screen and edited it."),
  new Update(updatesID, 1, 24, 2021, "Added incomplete Pumpkin Minion goal schema and added a Reset button, which all work with script and more CSS."),
  new Update(updatesID, 1, 31, 2021, "Added Pumpkin Farm mixed into the Pumpkin Minion goal schema and tweaked other crucial enhancements related to usage and links turning purple."),
  new Update(updatesID, 2, 27, 2021, "[v0.0.1] Added a version counter at the bottom."),
  new Update(updatesID, 2, 27, 2021, "[v0.0.2] Added a pretty-detailed Getting Started goal schema, with getting to Jerry (which initially had a typo of \"arond\" instead of \"around\") and talking to the villagers that can be accessed with even more script."),
  new Update(updatesID, 2, 27, 2021, "Made the actual thread, put its link on there, and added a link to the now-open Discussions page on GitHub."),
  new Update(updatesID, 2, 28, 2021, "Added enhancements suggested via the Hypixel Forums thread, tweaked those suggestions slightly, and did more styling changes. Not worthy of a version number as it does <em>not</em> majorly tweak or add a goal schema."),
  new Update(updatesID, 3, 1, 2021, "Added a Code link to go to the GitHub repo itself, so you don't have to click Code from the Discussions link anymore."),
  new Update(updatesID, 3, 1, 2021, "Changed the website colors to be websafe."),
  new Update(updatesID, 3, 1, 2021, "Added an Updates details section and added some styling for the details element that is added. Not worthy of a version number as it does <em>not</em> majorly tweak or add a goal schema."),
  new Update(updatesID, 3, 1, 2021, "Tweaked the Updates details section."),
  new Update(updatesID, 3, 1, 2021, "Added a Jotter textarea that saves to your browser window's <code>localStorage</code> API once you press the \"Jot!\" button with script."),
  new Update(updatesID, 3, 1, 2021, "Added <code>aria-label</code>s to most elements to enhance assistive tech (just kidding, I'm just tryna flaunt myself) and refactored the website to utilize its aforementioned-here terminology."),
  new Update(updatesID, 3, 1, 2021, "Added a Preferences fieldset that saves to your browser window's <code>localStorage</code> API once you press the \"Prefer!\" button and applies those changes with script."),
  new Update(updatesID, 3, 2, 2021, "Added an Issues link so other developers and constructive critics can help the website."),
  new Update(updatesID, 3, 7, 2021, "Changed the Updates details section to use classes in order to add its updates."),
  new Update(updatesID, 3, 7, 2021, "Added a Pull Requests link so other developers and constructive critics can <em>really</em> help the website.")
];
