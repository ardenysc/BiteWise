var scores = ["E", 1];

let items = document.getElementsByClassName("col");

if (scores[0]=="A") {
    items[0].style.setProperty("background-color", "#00803d");
    items[0].innerText = "A";
} else if (scores[0]=="B") {
    items[0].style.setProperty("background-color", "#87bd25");
    items[0].innerText = "B";
} else if (scores[0]=="C") {
    items[0].style.setProperty("background-color", "#ffcc02");
    items[0].innerText = "C";
} else if (scores[0]=="D") {
    items[0].style.setProperty("background-color", "#ef7d00");
    items[0].innerText = "D";
} else if (scores[0]=="E") {
    items[0].style.setProperty("background-color", "#e73212");
    items[0].innerText = "E";
}


if (scores[1]==1) {
    items[1].style.setProperty("background-color", "#00803d");
    items[1].innerText = "1";
} else if (scores[1]==2) {
    items[1].style.setProperty("background-color", "#87bd25");
    items[1].innerText = "2";
} else if (scores[1]==3) {
    items[1].style.setProperty("background-color", "#ef7d00");
    items[1].innerText = "3";
} else if (scores[1]==4) {
    items[1].style.setProperty("background-color", "#e73212");
    items[1].innerText = "4";
}


var productName = "Product"
let name = document.getElementById("product");
name.innerText = productName;