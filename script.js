const convertToRoman = num => {
    const romanNumeralValues = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let romanNumeral = ''

    for (let key in romanNumeralValues) {
        while (num >= romanNumeralValues[key]) {
            romanNumeral += key
            num -= romanNumeralValues[key]
        }
    }

    return romanNumeral
}

const check = () => {
    const number = document.getElementById('number').value.trim()
    if (number === '') {
        document.getElementById('output').textContent = 'Please enter a valid number'
        return
    }

    if (isNaN(number) || number < 1) {
        document.getElementById('output').textContent = 'Please enter a number greater than or equal to 1'
    } else if (number >= 4000) {
        document.getElementById('output').textContent = 'Please enter a number less than or equal to 3999'
    } else {
        document.getElementById('output').textContent = convertToRoman(number)
}}

document.getElementById('convert-btn').addEventListener('click', check)
