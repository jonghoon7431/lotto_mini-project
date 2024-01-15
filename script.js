const numbersDiv = document.querySelector(".number")
const drawButton= document.getElementById("draw")
const resetButton= document.getElementById("reset")

const lottoNumbers = []
const colors = ["yello", "blue", "red", "grey", "green",]

function paintNumber(number){
    const eachNumDiv = document.createElement("div")
    let colorIndex = Math.floor(number / 10)
    eachNumDiv.classList.add('eachNum')
    eachNumDiv.style.backgroundColor = colors[colorIndex]
    eachNumDiv.textContent = number
    numbersDiv.appendChild(eachNumDiv)
}

drawButton.addEventListener("click", function(){
    while(lottoNumbers.length < 6){
        let random = Math.floor(Math.random()*45) + 1
        
        if(lottoNumbers.indexOf(random) === -1){
            lottoNumbers.push(random)
            paintNumber(random)
        } 
        
    }
})

resetButton.addEventListener('click',function(){
    lottoNumbers.splice(0,6)
    numbersDiv.innerHTML = ""
})