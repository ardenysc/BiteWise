let contextMenuItem = {
    "id": "productName",
    "title": "BiteWise It!",
    "contexts": ["selection"]
}

chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(() => {
    browser.browserAction.openPopup();
  });