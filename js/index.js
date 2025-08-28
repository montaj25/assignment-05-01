console.log('js file is connected')
// love life btn
const lifeButtons = document.getElementsByClassName("life")
for (const lifeButton of lifeButtons) {
    lifeButton.addEventListener("click", function(){ 
        const loveNumber = parseInt(document.getElementById("love-number").innerText)
        const newLoveNumber = loveNumber + 1;
        document.getElementById("love-number").innerText = newLoveNumber;
    })
}

// coin btn
const coinBtns = document.getElementsByClassName("coin-btn ")
for (const coinBtn of coinBtns) {
    coinBtn.addEventListener("click", function(){
        const coinNumber = parseInt(document.getElementById("coin-number").innerText)
        const newCoinNumber = coinNumber - 20;
        document.getElementById("coin-number").innerText = newCoinNumber;
    })
} 