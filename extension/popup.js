// Set initial total to 0

var total = 0; // dont need

var input = document.getElementById("name");
var greet = document.getElementById("greet");

var totalSpent = document.getElementById("total");

var limitField = document.getElementById("limit"); // we don't need limit here
var setLimitButton = document.getElementById("setLimit");

var amountField = document.getElementById("amount");
var amountSubmit = document.getElementById("amountSubmit");
var amountResetBtn = document.getElementById("amountReset");

const handleInput = (event) =>{
    console.log(event);
    greet.textContent = "Hello " + event.target.value + "!";
}

const handleSubmit = (e) =>{
     // Get the value of the input field
     var amount = parseFloat(amountField.value);

    // Check if the input is a valid number
    if (!isNaN(amount)) {
        // Add the input value to the total
        total += amount;

        // Update the total spent element
        totalSpent.innerHTML = total;

        // Check if total spent is greater than or equal to the limit
        var limit = parseFloat(limitField.innerHTML);
        if (total >= limit) {
            // Show an alert
            alert("Total spent has reached the limit. Please set a new limit.");
        }
        // Save the new total in chrome storage
        chrome.storage.sync.set({'total': total});
    } else {
        // Display an error message
        alert("Invalid input. Please enter a number.");
    }
}
const setLimit = (e) => {
     // Get the value of the limit input field
     var newLimit = parseFloat(document.getElementById("newLimit").value);

     // Check if the input is a valid number
     if (!isNaN(newLimit)) {
         // Update the limit element
         limitField.innerHTML = newLimit;
         // Save the new limit in chrome storage
         chrome.storage.sync.set({'limit': newLimit});
     } else {
         // Display an error message
         alert("Invalid input. Please enter a number.");
     
     }
}
const getStorageValues = (result) => {
    if(result.total){
        total = result.total;
        totalSpent.innerHTML = total;
    }
    if(result.limit){
        limitField.innerHTML = result.limit;
    }
}
const resetAmount = (e) => {
    total = 0
    totalSpent.innerHTML = total;
    chrome.storage.sync.set({'total': total});
}

chrome.storage.sync.get(['total', 'limit'], getStorageValues);
input.addEventListener("input", handleInput);
amountSubmit.addEventListener("click", handleSubmit);
setLimitButton.addEventListener("click", setLimit);
amountResetBtn.addEventListener("click", resetAmount);



