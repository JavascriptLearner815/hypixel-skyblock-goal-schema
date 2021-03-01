const defaultToggle = document.getElementById("default-toggle")
const defaultSchema = document.getElementById("default-schema")
const pumpkinMinionToggle = document.getElementById("pumpkin-minion-toggle")
const pumpkinMinionSchema = document.getElementById("pumpkin-minion-schema")
const gettingStartedToggle = document.getElementById("getting-started-toggle")
const gettingStartedSchema = document.getElementById("getting-started-schema")
const jotterTextarea = document.getElementById("jotter")
const jotButton = document.getElementById("jot")
const jotterSave = localStorage.getItem("jotter")

if (jotterSave) {
  jotterTextarea.value = jotterSave
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
  localStorage.setItem("jotter", jotterTextarea.value)
  alert("Jotter has been jotted!")
  console.log("Jotter was successfully jotted.")
}, false)
