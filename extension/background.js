let contextMenuItem= {
    "id": "BiteWise",
    "title": "BiteWise",
    "contexts": ["selection"]
}

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

async function handleContextClick(info) {
    let currentTab = getCurrentTab();
    chrome.tabs.sendMessage(currentTab.id,{
        data: "hi"
    });
    //await chrome.runtime.sendMessage("asdasd")
    // var barcode = info.selectionText;
    // let currentTab = getCurrentTab();
    // chrome.tabs.sendMessage(currentTab.id, {
    //     clientX: info.clientX,
    //     clientY: info.clientY,
    //     data: barcode
    //     });

        // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        //     chrome.tabs.sendMessage(tabs[0].id, {
        //         clientX: info.clientX,
        //         clientY: info.clientY,
        //         //barcode: data.barcode,
        //         // productName: data.productName,
        //         // brand: data.brand,
        //         // price: data.price
        //     }, function(response) {});
        // })
}

chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(handleContextClick);

