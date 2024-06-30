let inputEl = document.getElementById('unitConverterInput')
const btnEl = document.getElementById('unitConverterBtn')
let length = document.getElementById('meterToFeet')
let volume = document.getElementById('literToGallon')
let mass = document.getElementById('kilogramsToPounds')

lengthConverter()
volumeConverter()
massConverter()

btnEl.addEventListener('click', function() {
    lengthConverter()
    volumeConverter()
    massConverter()
})

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// toFixed
function lengthConverter() {
    let inputValue = inputEl.value
    let feetValue = inputValue * 3.281
    let meterValue = inputValue / 3.281
    length.textContent = `${inputValue} meters = ${feetValue.toFixed(3)} feet | ${inputValue} feet = ${meterValue.toFixed(3)} meters`
}

function volumeConverter() {
    let inputValue = inputEl.value
    let gallonsValue = inputValue * 0.264
    let litersValue = inputValue / 0.264
    volume.textContent = `${inputValue} liters = ${gallonsValue.toFixed(3)} gallons | ${inputValue} gallons = ${litersValue.toFixed(3)} liters`
}

function massConverter() {
    let inputValue = inputEl.value
    let poundsValue = inputValue * 2.204
    let kilosValue = inputValue / 2.204
    mass.textContent = `${inputValue} kilos = ${poundsValue.toFixed(3)} pounds | ${inputValue} pounds = ${kilosValue.toFixed(3)} kilos`
}