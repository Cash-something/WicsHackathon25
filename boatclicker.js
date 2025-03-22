let quantity = 0;
const employee = 2;

const quantityText = document.getElementById("quantityText");
const incrementButton = document.getElementById("incrementButton");
const bottleButton = document.getElementById("bottleButton");

//QUANTITY INCREASE ON CLICK
incrementButton.addEventListener("click", () => {
    quantity += employee ;
    quantityText.textContent = `Quantity: ${quantity}`;
});

//QUANTITY INCREASE EVERY SECOND
setInterval(() => {
    quantity += 1;
    quantityText.textContent = `Quantity: ${quantity}`;
}, 1000);

function showBottleAtRandom(){
    bottleButton.style.display = "block";
    bottleButton.style.left = "100";
    bottleButton.style.top = '${Math.random() * 80 + 10}%';
    bottleButton.style.animation = "move-across 5s linear infinite";

    setTimeout(() => {
        if(parseFloat(bottleButton.style.left) <= -10){
            bottleButton.style.display = "none";
        }
    }, 5000);

    const nextAppearance = Math.random() * 40000 + 5000;
    setTimeout(showBottleAtRandom, nextAppearance);
}

//BOTTLE CLICK AND STOP
bottleButton.addEventListener("click", () => {
    bottleButton.style.animation = "none";
    alert("STIOPPPPPPPP");
    bottleButton.style.display = "none";

});

setTimeout(showBottleAtRandom, 20000);