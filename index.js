/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const feetInMeters = 3.281;
const gallonsInLiter = 0.264;
const poundsInKilograms = 2.204;
const convertBtn = document.getElementById("convert-btn");
const unitsEl = document.getElementById("units");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

convertBtn.addEventListener("click", function() {
    lengthEl.textContent = convertLength(unitsEl.value);
    volumeEl.textContent = convertVolume(unitsEl.value);
    massEl.textContent = convertMass(unitsEl.value);
});

unitsEl.addEventListener('input', resizeInputField);

function convertLength(length) {

    if (!Number(length)) {
        return `'${length}' is not a valid length`;
    }

    return buildConversionString (length, "meters", convertMetersToFeet(length), "feet", convertFeetToMeters(length));
}

function convertVolume(volume) {

    if (!Number(volume)) {
        return `'${volume}' is not a valid volume`;
    }

    return buildConversionString (volume, "litres", convertLitersToGallons(volume), "gallons", convertGallonsToLiters(volume));
}

function convertMass(mass) {

    if (!Number(mass)) {
        return `'${mass}' is not a valid mass`;
    }
    return buildConversionString (mass, "kilos", convertKilosToPounds(mass), "pounds", convertPoundsToKilos(mass));
}

function convertMetersToFeet(length) {
    return length * feetInMeters;
}

function convertFeetToMeters (length) {
    return length / feetInMeters;
}

function convertLitersToGallons(volume) {
    return volume * gallonsInLiter;
}

function convertGallonsToLiters(volume) {
    return volume / gallonsInLiter;
}

function convertKilosToPounds(mass) {
    return mass * poundsInKilograms;
}

function convertPoundsToKilos(mass) {
    return mass / poundsInKilograms;
}

function buildConversionString(units, metric, metricvalue, imperial, imperialvalue) {
    return `${units} ${metric} = ${metricvalue.toFixed(3)} ${imperial} | ${units} ${imperial} = ${imperialvalue.toFixed(3)} ${metric}`;
}

function resizeInputField() {
    if (unitsEl.value.length < 7) {
        this.style.width = ++unitsEl.value.length + 'ch'  
    }
}