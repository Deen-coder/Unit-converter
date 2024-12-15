const conversionFactors = {
    length: {
        cm: { cm: 1, m: 0.01, in: 0.393701, ft: 0.0328084 },
        m: { cm: 100, m: 1, in: 39.3701, ft: 3.28084 },
        in: { cm: 2.54, m: 0.0254, in: 1, ft: 0.0833333 },
        ft: { cm: 30.48, m: 0.3048, in: 12, ft: 1 }
    },
    temperature: {
        celsius: { celsius: (val) => val, fahrenheit: (val) => (val * 9 / 5) + 32, kelvin: (val) => val + 273.15 },
        fahrenheit: { celsius: (val) => (val - 32) * 5 / 9, fahrenheit: (val) => val, kelvin: (val) => (val - 32) * 5 / 9 + 273.15 },
        kelvin: { celsius: (val) => val - 273.15, fahrenheit: (val) => (val - 273.15) * 9 / 5 + 32, kelvin: (val) => val }
    },
    weight: {
        kg: { kg: 1, lb: 2.2046, g: 1000, oz: 35.274 },
        lb: { kg: 0.453592, lb: 1, g: 453.592, oz: 16 },
        g: { kg: 0.001, lb: 0.0022046, g: 1, oz: 0.035274 },
        oz: { kg: 0.0283495, lb: 0.0625, g: 28.3495, oz: 1 }
    }
};

function convert() {
    const inputValue = parseFloat(document.getElementById('input').value);
    const conversionType = document.getElementById('conversionType').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document

 
