

const callHistoryData = [];


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

            const title = coinBtn.parentNode.parentNode.parentNode.childNodes[1].innerText
            const subTitle = coinBtn.parentNode.parentNode.parentNode.childNodes[3].innerText
            const subTitleNumber = coinBtn.parentNode.parentNode.parentNode.childNodes[5].innerText
            alert("📞" + " " + subTitle + " " + subTitleNumber + "..........");

            const data = {
                name: title,
                number: subTitleNumber,
                date: new Date().toLocaleTimeString()
            }
            callHistoryData.push(data)
            // call history
            const callHistoryContainer = document.getElementById("call-history-container")
            // callHistoryContainer.innerText = " "
            for (const data of callHistoryData) {
                const div = document.createElement("div")
                div.innerHTML = `
                    <div class="flex justify-between items-center bg-[#FAFAFA] p-4 m-8 rounded-xl">
                        <div>
                            <h2 class="font-semibold text-xl">${data.name}</h2>
                            <p class="text-gray-500 text-xl">${data.number}</p>
                        </div>
                        <div>
                            <p>${data.date}</p>
                        </div>
                    </div>

    `
                callHistoryContainer.appendChild(div)

            }
        }
        else {
            alert("❌ You don't have sufficient coin. It will take at least twenty coins to make a call.")
        }


    })

}
// copy number

const copyBtns = document.getElementsByClassName("copy-btn")
for (const copyBtn of copyBtns) {
    copyBtn.addEventListener("click", function () {
        const copyNumber = parseInt(document.getElementById("copy-number").innerText)
        const newCopyNumber = copyNumber + 1;
        document.getElementById("copy-number").innerText = newCopyNumber;
    })
}


// Clear button
document.getElementById("clear")
.addEventListener("click", function(){ 
    const callHistoryContainer = document.getElementById("call-history-container")
    callHistoryContainer.innerText = " "    
})
// copy text

