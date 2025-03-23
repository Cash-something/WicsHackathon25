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

function createPopup(message) {
    let popup = document.createElement("div");
    popup.className = "popup-message";
    popup.innerHTML = `<p>${message}</p><button class="popup-close">Close</button>`;
    document.body.appendChild(popup);
    popup.querySelector(".popup-close").addEventListener("click", () => popup.remove());
}

function closePopup(button) {
    document.body.removeChild(button.parentElement);
}

function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * gulfMessages.length);
    createPopup(gulfMessages[randomIndex]);
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

    createPopup(message);
    bottleButton.style.transition = "none";
    bottleButton.style.display = "none";
    scheduleNextBottle();

});

function scheduleNextBottle() {
    const nextAppearance = Math.random() * 5000 + 2000;
    setTimeout(showBottleAtRandom, nextAppearance);
}

setTimeout(() => {
    showBottleAtRandom();
}, 2000);

document.head.insertAdjacentHTML("beforeend", `
    <style>
    .popup-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        z-index: 1000;
    }
    .popup-message button {
        margin-top: 10px;
        padding: 5px 10px;
        background: #007BFF;
        color: white;
        border: none;
        cursor: pointer;
    }
    .popup-message button:hover {
        background: #0056b3;
    }
    </style>
    `);
    