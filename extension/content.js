console.log("contents.js");

let xCoord;
let yCoord;


const updateCoords = (event) => {
    xCoord = event.clientX;
    yCoord = event.clientY;
} 

const handleOnMessage = async (msg, sender, sendResponse) => {
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
    popup.innerHTML = `<b>Product Name: ${msg['name']}</b><br>\
                        <b>Brand: ${msg['brand']}</b><br>\
                        <b>Grade: ${msg['grade']}</b><br>\
                        <b>Nova Score: ${msg['nova']}</b><br>\
                        <b>Co2 Emission: ${msg['co2']}</b>`;
    document.body.appendChild(popup);
    console.log(msg);
}

document.addEventListener("contextmenu", updateCoords);
chrome.runtime.onMessage.addListener(handleOnMessage);