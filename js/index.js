console.log('js file is connected')
// love life btn
const lifeButtons = document.getElementsByClassName("life")
for (const lifeButton of lifeButtons) {
    lifeButton.addEventListener("click", function () {
        const loveNumber = parseInt(document.getElementById("love-number").innerText)
        const newLoveNumber = loveNumber + 1;
        document.getElementById("love-number").innerText = newLoveNumber;
    })
}

// coin btn
const coinBtns = document.getElementsByClassName("coin-btn")
for (const coinBtn of coinBtns) {
    coinBtn.addEventListener("click", function () {
        const coinNumber = parseInt(document.getElementById("coin-number").innerText)
        if (coinNumber >= 20) {
            const newCoinNumber = coinNumber - 20;
            document.getElementById("coin-number").innerText = newCoinNumber;

            const subTitle = coinBtn.parentNode.parentNode.parentNode.childNodes[3].innerText
            const subTitleNumber = coinBtn.parentNode.parentNode.parentNode.childNodes[5].innerText
            alert("📞"+" "+subTitle+" "+ subTitleNumber+"..........");
        }
        else{
            alert("❌ You don't have sufficient coin. It will take at least twenty coins to make a call.")
        }
    })
} 
// copy number

const copyBtns = document.getElementsByClassName("copy-btn")
for (const copyBtn of copyBtns) {
    copyBtn.addEventListener("click", function(){ 
        const copyNumber = parseInt(document.getElementById("copy-number").innerText)
        const newCopyNumber = copyNumber + 1;
        document.getElementById("copy-number").innerText = newCopyNumber;
    })
}