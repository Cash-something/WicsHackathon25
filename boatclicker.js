let quantity = 0;
let fishers = 1;

const quantityText = document.getElementById("quantityText");
const incrementButton = document.getElementById("incrementButton");
const bottleButton = document.getElementById("bottleButton");

let isFirstClick = true;

const initialMessage = "Watch out for overfishing!";

const gulfMessages = [
    //Low Prices 0-2
    "U.S. Fish Market: Plentiful Supply, Low Prices.",
    "Gulf Overfishing Floods Markets: Seafood Prices Plunge To Record Lows.",
    "Oceans Overflow, Wallets Rejoice: Seafood Prices Dip Amid Gulf Fishing Overfishing.",

    //High Prices 3-5
    "Louisiana's Seafood Industry Under Duress After Four Hurricanes In Two Years",
    "Gulf Red Snapper Drought, Fishermen Face Uncertain Future.",
    "Empty Nets in the Gulf Push Seafood Prices Through the Roof"
    
];

const arcticMessages = [
    //Low Prices 0-2
    "Arctic Fishery: Abundant Supply, Low Prices.",
    "Market Saturation: Arctic Overfishing Causes Seafood Price Collapse.",
    "Arctic Fishing Floods Markets, Sending Seafood Prices Plummeting.",

    //High Prices 3-5
    "Less Fishing, Higher Costs: Arctic Seafood Prices Hit All-Time Highs.",
    "Arctic Fisheries Pull Back, Seafood Prices Climb to Record Levels",
    "Arctic Cod Population Booms, Fishermen Rejoice.",
];

const medMessages = [
    //Low Prices 0-2
    "Mediterranean Overfishing Floods Markets, Seafood Prices Dive.",
    "Too Many Nets, Too Much Catch: Overfishing in the Miditerranean Slashes Prices.",
    "Markets Drown in Mediterranean Fish as Overfishing Fuels Cheap Prices.",

    //High Prices 3-5
    "Mediterranean Fisheries Pull Back, Triggering Massive Price Hikes.",
    "Low Fishing Activity in the Mediterranean Sends Prices Through the Roof",
    "Mediterranean Conservation Policies Trigger Seafood Price Surge."

];

function updateQuantity(amount) {
    if (quantity < 10) {
        quantity += amount;
        if (quantity > 10) {
            quantity = 10;
        }
        quantityText.textContent = `Quantity: ${quantity}`;
    }
}

// QUANTITY INCREASE ON CLICK
incrementButton.addEventListener("click", () => {
    updateQuantity(fishers);
});

// QUANTITY INCREASE EVERY SECOND
setInterval(() => {
    updateQuantity(1);
}, 1000);

function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * gulfMessages.length);
    alert(gulfMessages[randomIndex]);
}
function showBottleAtRandom() {
    bottleButton.style.display = "block";
    bottleButton.style.left = "100%";
    bottleButton.style.top = '${Math.random() * 80 + 10}%';

    bottleButton.offsetWidth;

    const animationDuration = 5000;
    bottleButton.style.transition = `left ${animationDuration}ms linear`;
    bottleButton.style.left = "-10%";

    setTimeout(() => {
        const bottleLeft = parseFloat(bottleButton.style.left || "0");
        if (bottleLeft <= -10) {
            bottleButton.style.display = "none";
            scheduleNextBottle();
        }
    }, animationDuration);
}

bottleButton.addEventListener("click", () => {
    let message;
    if (isFirstClick) {
        message = initialMessage;
        isFirstClick = false;
    } else {
        message = gulfMessages[Math.floor(Math.random() * gulfMessages.length)];
    }

    alert(message);
    bottleButton.style.transition = "none";
    bottleButton.style.display = "none";
    scheduleNextBottle();

});

function scheduleNextBottle() {
    const nextAppearance = Math.random() * 40000 + 5000;
    setTimeout(showBottleAtRandom, nextAppearance);
}

setTimeout(() => {
    showBottleAtRandom();
}, 10000);