//* First progress bar


//* Second progress bar


//* Third progress bar

let items = document.querySelectorAll(".link")

items.forEach((item, index) => {
    item.addEventListener("click", ()=> {
        for(let i = 0; i <= index; i++) {
            items[i].classList.add("active")
        }
        
        for(let j = index + 1; j < items.length; j++) {
            items[j].classList.remove("active")
        }
    })
})