let isFirstClick = true;

let isBottleAnimationRunning = false;
let bottleTimeoutId = null;

const initialMessage = "Watch out for overfishing!";

const gulfMessages = [
    //Low Prices 0-2
    "U.S. Fish Market: Plentiful Supply, Low Prices.",
    "Gulf Overfishing Floods Markets: Seafood Prices Plunge To Record Lows.",
    "Oceans Overflow, Wallets Rejoice: Seafood Prices Dip Amid Gulf Overfishing.",

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

function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * gulfMessages.length);
    alert(gulfMessages[randomIndex]);
}
function showBottleAtRandom() {
    if (!isBottleAnimationRunning) return;

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
            if (isBottleAnimationRunning) {
                scheduleNextBottle();
            }
        }
    }, animationDuration);
}

function scheduleNextBottle() {
    if (!isBottleAnimationRunning) return;
    const nextAppearance = Math.random() * 10000 + 2000;
    bottleTimeoutId = setTimeout(showBottleAtRandom, nextAppearance);
}

function getMessageAdjustment(messages) {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const selectedMessage = messages[randomIndex];

    if(randomIndex <= 2) {
        priceAdjustment -= 0.2;
    }
    else {
        priceAdjustment += 0.2;
    }

    priceAdjustment = Math.max(0.5, Math.min(2.0, priceAdjustment));

    return selectedMessage;
}

bottleButton.addEventListener("click", () => {
    let message;
    if (isFirstClick) {
        message = initialMessage;
        isFirstClick = false;
    } else {
        message = getMessageAdjustment(gulfMessages);
    }

    alert(message);
    bottleButton.style.transition = "none";
    bottleButton.style.display = "none";
    scheduleNextBottle();

});



setTimeout(() => {
    showBottleAtRandom();
}, 4000);

function stopBottleAnimation(){
    isBottleAnimationRunning = false;
    clearTimeout(bottleTimeoutId);
    bottleButton.style.transition = "none";
    bottleButton.style.display = "none";
}

isBottleAnimationRunning = true;
setTimeout(() => {
    showBottleAtRandom();
}, 4000);

