const defaultSchema = document.getElementById("default-schema")
const pumpkinMinionToggle = document.getElementById("pumpkin-minion-toggle")
const pumpkinMinionSchema = document.getElementById("pumpkin-minion-schema")

pumpkinMinionToggle.addEventListener("click", () => {
  defaultSchema.style.display = "none"
  pumpkinMinionSchema.style.display = "block"
})
