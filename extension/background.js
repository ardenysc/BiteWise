let code, co2, nova, productName, nutriScore; 

let contextMenuItem= {
    "id": "BiteWise",
    "title": "BiteWise",
    "contexts": ["selection"]
}

function handleData(result){
    if(!code){
        console.log("code does not exist");
        return;
    }
    let newData = {
        "co2": co2,
        "nova": nova,
        "productName": productName,
        "nutriScore": nutriScore,
        "count": 1
    };
    console.log(code);
    if(!result.bitewise){
        let initialData = {'bitewise': {code : newData}};
        console.log(initialData);
        chrome.storage.sync.set(initialData);
        return;
    }

    console.log(result);
    let newBitwise = result.bitewise;

    if(!newBitwise[code]){
        newBitwise[code] = newData;
    } else {
        newBitwise[code]["count"] += 1;
    }

    chrome.storage.sync.set({'bitewise': newBitwise});
    console.log("data stored:" + newBitwise );
}
function storeData(data){
    code, co2, nova, productName, nutriScore = null;
    code = data["code"];

    // co2
    if (data["product"] &&
        data["product"]["ecoscore_data"] && 
        data["product"]["ecoscore_data"]["agribalyse"] &&
        data["product"]["ecoscore_data"]["agribalyse"]["co2_total"])
    {
        co2 = data["product"]["ecoscore_data"]["agribalyse"]["co2_total"];
        co2 = co2.toFixed(2);
    } 
    // nova
    if (data["product"]["nova_group"]) {
        nova = data["product"]["nova_group"];
    }

    // nutri_grade

    if (data["product"]["nutriscore_grade"]){
        nutriScore = data["product"]["nutriscore_grade"];
    }

    // name
    if (data["product"]["product_name"]){
        productName = data["product"]["product_name"];
        if(productName.length > 15){
            productName = productName.slice(0,14) + "..."
        }
    }



    console.log(code,"  " ,co2,"  ", nova ,"  ", productName, " ", nutriScore);
    chrome.storage.sync.get(["bitewise"], handleData);
}

async function handleContextClick(clickData) {
    if (clickData.menuItemId == "BiteWise" && clickData.selectionText){
        let barcode = clickData.selectionText;
        const url = "https://world.openfoodfacts.org/api/v0/product/"+barcode;
       
        try{
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        const tabs = await chrome.tabs.query({active: true, currentWindow: true});
        const res = await chrome.tabs.sendMessage((tabs[0].id), {
            "hi": "hi"
        });
        } catch(error) {
            console.log(error);
        }
    }
}

chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(handleContextClick);

