const defaultToggle = document.getElementById("default-toggle")
const defaultSchema = document.getElementById("default-schema")
const pumpkinMinionToggle = document.getElementById("pumpkin-minion-toggle")
const pumpkinMinionSchema = document.getElementById("pumpkin-minion-schema")

defaultToggle.addEventListener("click", () => {
  pumpkinMinionSchema.style.display = "none"
  defaultSchema.style.display = "block"
})

pumpkinMinionToggle.addEventListener("click", () => {
  defaultSchema.style.display = "none"
  pumpkinMinionSchema.style.display = "block"
})
