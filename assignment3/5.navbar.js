var navbar = document.getElementById("container")

navbar.addEventListener("mouseover", e => {
    if (e.target.className === 'icon-container') {
        console.log(e.target.id);
        e.target.style.backgroundColor = 'green'
    }

})
navbar.addEventListener("mouseout", e => {
    if (e.target.className === 'icon-container') {
        console.log(e.target.id);
        e.target.style.backgroundColor = 'grey'
    }

})