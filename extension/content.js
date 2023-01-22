console.log("contents.js");

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
        popup.style.border = '1px solid gray';
        popup.innerHTML = '<b>Barcode:</b> <br><b>Product Name:</b> <br><b>Brand:</b> <br><b>Price:</b> ';
        document.body.appendChild(popup);

        console.log(message);
})