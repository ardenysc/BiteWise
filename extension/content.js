console.log("contents.js");

let xCoord;
let yCoord;

document.addEventListener("contextmenu", function(event) {
    // Get the x and y position of the mouse
    xCoord = event.clientX;
    yCoord = event.clientY;
  
    // Log the x and y position of the mouse
    console.log("Mouse clicked at: (" + xCoord + ", " + yCoord + ")");
  });

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        console.log("here")

        var popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.left =  xCoord + 'px';
        popup.style.top =  yCoord + 'px';
        popup.style.padding = '10px';
        popup.style.zIndex = '9999';
        popup.style.background = 'white';
        popup.className = "popup";
        popup.style.border = '1px solid gray';
        popup.innerHTML = '<b>Barcode:</b> <br><b>Product Name:</b> <br><b>Brand:</b> <br><b>Price:</b> ';
        document.body.appendChild(popup);

        console.log(message);
})