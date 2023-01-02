var carDiv=document.getElementById("car-container")
var carImage=document.getElementById("car-image")
var goButton=document.getElementById("go-button")
goButton.addEventListener("click",()=>{
    // add animation on carDiv
    carDiv.style.animation='move-forward 2s'
})