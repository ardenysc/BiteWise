let contextMenuItem= {
    "id": "BiteWise",
    "title": "BiteWise",
    "contexts": ["selection"]
}

function handleContextClick(info) {
    var barcode = info.selectionText;
    fetch('https://world.openfoodfacts.org/api/v0/product/' + barcode)
    .then(response => response.json())
    .then(data => {
        createProductPopup(data) 
    })
    .catch(error => {
        console.error(error);
    });
}

function createProductPopup(data) {
    var popup = document.createElement('div');
        popup.style.position = 'absolute';
        popup.style.left = info.clientX + 'px';
        popup.style.top = info.clientY + 'px';
        popup.style.padding = '10px';
        popup.style.background = 'white';
        popup.style.border = '1px solid gray';
        popup.innerHTML = '<b>Barcode:</b> ' + data;
        //popup.innerHTML = '<b>Barcode:</b> ' + barcode + '<br><b>Product Name:</b> ' + data.productName + '<br><b>Brand:</b> ' + data.brand + '<br><b>Price:</b> ' + data.price;
        document.body.appendChild(popup);
        setTimeout(function() {
            popup.remove();
        }, 3000);
}

chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(handleContextClick);

