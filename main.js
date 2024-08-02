// Import input value
let BDate = document.querySelector("#BDate");

// Current date
let currentDate = new Date();

// Calculate the difference function 
const ageCalc = () => {
    const BDateArray = BDate.value.split("-");
    const BDateConvert = new Date(BDateArray[0], BDateArray[1] - 1, BDateArray[2]); // month index beggin with 0
    const age = Math.trunc((currentDate - BDateConvert) / 1000 / 60 / 60 / 24 / 365);
    // Display the result
    let result = document.querySelector(".result");
    result.textContent = age;
}

// Reset
const resetForm = () => {
    document.querySelector("#BDate").value = "";
    let result = document.querySelector(".result");
    result.textContent = "";
}
