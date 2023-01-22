chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log(message.data);
    // var popup = document.createElement('div');
    // popup.style.position = 'absolute';
    // popup.style.left = message.clientX + 'px';
    // popup.style.top = message.clientY + 'px';
    // popup.style.padding = '10px';
    // popup.style.background = 'white';
    // popup.style.border = '1px solid gray';
    // // popup.innerHTML = '<b>Barcode:</b> ' + message.barcode + '<br><b>Product Name:</b> ' + message.productName + '<br><b>Brand:</b> ' + message.brand + '<br><b>Price:</b> ' + message.price;
    // popup.innerHTML = "<b>Barcode: </b>" + data;
    // document.body.appendChild(popup);
    // setTimeout(function() {
    //     popup.remove();
    // }, 3000);
})


