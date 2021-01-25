const defaultToggle = document.getElementById("default-toggle")
const defaultSchema = document.getElementById("default-schema")
const pumpkinMinionToggle = document.getElementById("pumpkin-minion-toggle")
const pumpkinMinionSchema = document.getElementById("pumpkin-minion-schema")

defaultToggle.addEventListener("click", () => {
  defaultSchema.style.display = "block"
  pumpkinMinionSchema.style.display = "none"
})

pumpkinMinionToggle.addEventListener("click", () => {
  defaultSchema.style.display = "none"
  pumpkinMinionSchema.style.display = "block"
})
