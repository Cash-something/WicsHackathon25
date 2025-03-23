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

function createPopup(message) {
    let popup = document.createElement("div");
    popup.className = "popup-message";
    popup.innerHTML = `<p>${message}</p><button class="popup-close">Close</button>`;
    document.body.appendChild(popup);

    const closeButton = popup.querySelector(".popup-close");
    closeButton.addEventListener("click", () => {
        button.play(); // Play the button sound
        popup.remove(); // Remove the popup
    });
}


function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * gulfMessages.length);
    createPopup(gulfMessages[randomIndex]);
}
function showBottleAtRandom() {
    if (!isBottleAnimationRunning) return;

    bottleButton.style.display = "block";
    bottleButton.style.left = "100%";
    bottleButton.style.top = `${60}%`;

    bottleButton.offsetWidth;

    const animationDuration = 10000;
    bottleButton.style.transition = `left ${animationDuration}ms linear`;
    bottleButton.style.left = "-10%";

    const onTransitionEnd = () => {
        bottleButton.style.display = "none";
        if (isBottleAnimationRunning) {
            scheduleNextBottle(); // Schedule the next appearance
        }
        bottleButton.removeEventListener("transitionend", onTransitionEnd); // Clean up the event listener
    };

    bottleButton.addEventListener("transitionend", onTransitionEnd);
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
    bottle.play();
    if (isFirstClick) {
        message = initialMessage;
        isFirstClick = false;
    } else {
        message = getMessageAdjustment(gulfMessages);
    }

    createPopup(message);
    bottleButton.style.transition = "none";
    bottleButton.style.display = "none";
    scheduleNextBottle();

});

isBottleAnimationRunning = true;
setTimeout(() => {
    showBottleAtRandom();
}, 4000);



isBottleAnimationRunning = true;
setTimeout(() => {
    showBottleAtRandom();

}, 4000);

function stopBottleAnimation(){
    isBottleAnimationRunning = false;
    clearTimeout(bottleTimeoutId);
    bottleButton.style.transition = "none";
    bottleButton.style.display = "none";
}

document.head.insertAdjacentHTML("beforeend", `
    <style>
    .popup-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: url('scroll.png'); /* Set the background image */
        background-size: cover; /* Ensure the image covers the entire popup */
        background-position: center; /* Center the image */
        padding: 20px;
        z-index: 1000;
        width: 500px; /* Adjust width as needed */
        height: 210px; /* Adjust height as needed */
        color: black; /* Set text color to contrast with the background */
        text-align: center; /* Center the text */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .popup-message button {
        margin: 0; /* Remove margin */
        padding: 0; /* Remove padding */
        background-image: url('blackbutton.png'); /* Set the button background image */
        background-size: contain; /* Ensure the image fits within the button */
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Prevent the image from repeating */
        color: white; /* Set text color to contrast with the button */
        border: none; /* Remove border */
        cursor: pointer;
        width: 90px; /* Set width to match the PNG image */
        height: 38px; /* Set height to match the PNG image */
        font-size: 16px; /* Adjust font size as needed */
        display: flex;
        background-color: transparent;
        justify-content: center;
        align-items: center;
    }
    .popup-message button:hover {
        opacity: 0.8; /* Slightly fade the button on hover */
    }
    </style>
`);
