console.log("contents.js");

document.addEventListener("contextmenu", function(event) {
    // Get the x and y position of the mouse
    var x = event.clientX;
    var y = event.clientY;
  
    // Log the x and y position of the mouse
    console.log("Mouse clicked at: (" + x + ", " + y + ")");
  });

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        console.log("here")

        var popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.left =  + '50%';
        popup.style.top = '50%';
        popup.style.padding = '10px';
        popup.style.zIndex = '9999';
        popup.style.background = 'white';
        popup.className = "popup";
        popup.style.border = '1px solid gray';
        popup.innerHTML = '<b>Barcode:</b> <br><b>Product Name:</b> <br><b>Brand:</b> <br><b>Price:</b> ';
        document.body.appendChild(popup);

        console.log(message);
})