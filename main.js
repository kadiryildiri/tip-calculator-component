const bill = document.querySelector("#bill")
const form = document.querySelector("#form")
const fivePercent = document.querySelector("#fivePercent")
const tenPercent = document.querySelector("#tenPercent")
const fifteenPercent = document.querySelector("#fifteenPercent")
const twentyfivePercent = document.querySelector("#twentyfivePercent")
const fiftyPercent = document.querySelector("#fiftyPercent")
const costumPercent = document.querySelector("#customPercent")
const peopleCount = document.querySelector("#peopleCount")
const tipPerson = document.querySelector("#tipPerson")
const totalPerson = document.querySelector("#totalPerson")
const resetBtn = document.querySelector("#resetBtn")
const errorMessage = document.querySelector("#errorMessage")

let billValue = 0
let people = 1

bill.addEventListener("change", (e) => {
    billValue = parseFloat(e.target.value)
})

peopleCount.addEventListener("change", (e) => {
    people = parseFloat(e.target.value)
})

const calculate = (percent) => {
    if (people === 0 || people < 0) {
        errorMessage.style.display = "inline-block"
        errorMessage.innerHTML = "Can't be zero or <br/> Can't be less than zero"
        peopleCount.classList.add("md:outline-rose-700")
    } else {
        const tipAmount = (billValue * (percent / 100)) / people
        tipPerson.innerHTML = tipAmount.toFixed(2)
        const totalBill = billValue / people + tipAmount
        totalPerson.innerHTML = totalBill.toFixed(2)
    }
}

resetBtn.addEventListener("click", (e) => {
    bill.value = ""
    peopleCount.value = ""
    tipPerson.innerHTML = "0.00"
    totalPerson.innerHTML = "0.00"
    errorMessage.style.display = "none"
})

fivePercent.addEventListener("click", () => calculate(5))
tenPercent.addEventListener("click", () => calculate(10))
fifteenPercent.addEventListener("click", () => calculate(15))
twentyfivePercent.addEventListener("click", () => calculate(25))
fiftyPercent.addEventListener("click", () => calculate(50))
costumPercent.addEventListener("change", (e) => calculate(e.target.value))
