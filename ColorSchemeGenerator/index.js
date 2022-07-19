const colorMode = document.getElementById("colorMode")
const button = document.getElementById("getButton")
let colorDisplay = document.getElementsByClassName("colorDisplay")
let colorCodes = document.getElementsByClassName("colorCode")

const numberOfColors = 6


getColor()



button.addEventListener("click", () => {
    getColor()
})



function getColor () {
    
    
    
    
    
const seedColor = document.getElementById("seedColor").value
let currentSeedColor = seedColor.slice(1,seedColor.length)
let currentMode = colorMode.options[colorMode.selectedIndex].value


  fetch(`https://www.thecolorapi.com/scheme?hex=${currentSeedColor}&mode=${currentMode}&count=${numberOfColors}`)

    .then(res => res.json())
    .then(data => {
        for( let i = 0; i<numberOfColors; i++) {
            colorCodes[i].textContent = data.colors[i].hex.value
            colorDisplay[i].style.backgroundColor = colorCodes[i].textContent
        }
    })
}

