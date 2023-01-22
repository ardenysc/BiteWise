var percents = document.querySelectorAll("div.pie");

for (let i=0; i<percents.length; i++) {
    // console.log(percents[i]);
    percents[i].style.setProperty('--p', String(i*10));
    percents[i].innerText = String(i*10) + "%";
}

var items = document.getElementsByClassName("list-group-item");

for (let i=0; i<items.length; i++) {
    // console.log(items[i]);
    // items[i].innerText = String(i);
    items[i].innerHTML = String(i) + " <span class=\"badge bg-secondary\">" + i + "</span>"
}

var scores = document.getElementsByClassName("number-this");

scores[0].innerHTML = 1 + "<span style=\"font-size: medium;\">/4</span>";
scores[1].innerText = 100 + "g";

var scoreChange = [-10, 10];
var descriptions = document.getElementsByClassName("description");
let novaScore = document.getElementById("change-nova");
let carbonScore = document.getElementById("change-carbon");
let good = "<div><img src=\"https://img.icons8.com/ios/100/40C057/happy--v1.png\"></div><span style=\"color:#00c348\";>less </span>";
let bad = "<div><img src=\"https://img.icons8.com/ios/100/FA5252/sad.png\"/></div><span style=\"color:#e73212\";>more </span>";
// nova score
if (scoreChange[0] < 0) {
    novaScore.className = "number-compare-good";
    novaScore.innerText = "↓ " + String(scoreChange[0]*(-1)) + "%";
    descriptions[0].innerHTML = good + "processed food in your diet";
} else if (scoreChange[0] > 0) {
    novaScore.className = "number-compare-bad";
    novaScore.innerText = "↑ " + String(scoreChange[0]) + "%";
    descriptions[0].innerHTML = bad + "processed food in your diet";
} else {

}
// carbon score
if (scoreChange[1] < 0) {
    carbonScore.className = "number-compare-good";
    carbonScore.innerText = "↓ " + String(scoreChange[1]*(-1)) + "%";
    descriptions[1].innerHTML = good + "carbon footprint emitted";
} else if (scoreChange[1] > 0) {
    carbonScore.className = "number-compare-bad";
    carbonScore.innerText = "↑ " + String(scoreChange[1]) + "%";
    descriptions[1].innerHTML = bad + "carbon footprint emitted";
} else {

}