

function addFunc(firstNumber: string, secondNumber: string) {
    return Number(firstNumber)+Number(secondNumber);
}

function subFunc(firstNumber: string, secondNumber: string) {
    return Number(firstNumber) - Number(secondNumber);
}

function multFunc(firstNumber: string, secondNumber: string) {
    return Number(firstNumber) * Number(secondNumber);
}

function divFunc(firstNumber: string, secondNumber: string) {
    return Number(firstNumber) / Number(secondNumber);
}


function powFunc(firstNumber: string, secondNumber: string) {
    let temp = Number(firstNumber);
    for (let i = 1; i < Number(secondNumber); i++)
        temp *= Number(firstNumber);
    return temp;

}

export default function Calculator(operator: string, firstNumber: string, secondNumber: string) {
    if (operator === "+") {
        return String(addFunc(firstNumber, secondNumber));
    }
    else if (operator === "-") {
        return String(subFunc(firstNumber, secondNumber));
    }
    else if (operator === "*") {
        return String(multFunc(firstNumber, secondNumber));
    }
    else if (operator === "/") {
        return String(divFunc(firstNumber, secondNumber));
    }
    else if (operator === "**") {
        return String(powFunc(firstNumber, secondNumber));
    }
    else {
        return "";
    }
}

