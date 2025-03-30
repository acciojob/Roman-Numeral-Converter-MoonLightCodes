// script.js
function convertToRoman(num) {
    const romanSymbols = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    
    let result = '';
    for (let [symbol, value] of romanSymbols) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
}

function convert() {
    const input = document.getElementById("numberInput").value;
    const resultElement = document.getElementById("result");
    
    if (input === "" || input < 0 || input > 100000) {
        resultElement.textContent = "Please enter a valid number (0 - 100,000).";
        resultElement.style.color = "red";
    } else {
        const romanNumeral = convertToRoman(Number(input));
        resultElement.textContent = `Roman Numeral: ${romanNumeral}`;
        resultElement.style.color = "black";
    }
}
