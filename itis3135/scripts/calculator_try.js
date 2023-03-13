class Calculator {
    constructor(previousText, currentText) {
        this.previousText = previousText
        this.currentText = currentText
        this.clear()
    }

    clear() {
        this.cOperand = ""
        this.pOperand = ""
        this.operation = undefined
    }

    delete() {
        this.cOperand = this.cOperand.toString().slice(0, -1)
    }

    appendNumber(num) {
        if (num === "." && this.cOperand.includes(".")) return
        this.cOperand = this.cOperand.toString() + num.toString()
    }

    chooseOperation(operation) {
        if (this.cOperand === "") return
        if (this.pOperand !== "") {
            this.compute()
        }
        this.operation = operation
        this.pOperand = this.cOperand
        this.cOperand = ""
    }

    compute() {
        let computation
        const prev = parseFloat(this.pOperand)
        const current = parseFloat(this.cOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case "+":
                computation = prev + current
                break
            case "-":
                computation = prev - current
                break
            case "*":
                computation = prev * current
                break
            case "÷":
                computation = prev / current
                break
            default:
                return
        }
        this.cOperand = computation
        this.operation = undefined
        this.pOperand = ""
    }

    getDisplayNumber(num) {
        const sNumber = num.toString()
        const iDigits = parseFloat(sNumber.split(".")[0])
        const dDigits = sNumber.split(".")[1]
        let iDisplay
        if (isNaN(iDigits)) {
            iDisplay = ""
        } 
        else {
            iDisplay = iDigits.toLocaleString("en", { maximumFractionDigits: 1 })
        }
        if (dDigits != null) {
            return `${iDisplay}.${dDigits}`
        } 
        else {
            return iDisplay
        }
    }

    updateDisplay() {
        this.currentText.innerText =
            this.getDisplayNumber(this.cOperand)
        if (this.operation != null) {
            this.previousText.innerText = `${this.getDisplayNumber(this.pOperand)} ${this.operation}`
        } else {
            this.previousText.innerText = ""
        }
    }
}


const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelector("[data-delete]")
const allClearButton = document.querySelector("[data-all-clear]")
const previousText = document.querySelector("[data-previous-operand]")
const currentText = document.querySelector("[data-current-operand]")

const calculator = new Calculator(previousText, currentText)

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener("click", button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener("click", button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener("click", button => {
    calculator.delete()
    calculator.updateDisplay()
})