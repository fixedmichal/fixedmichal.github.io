
const navigationList = document.querySelector(".navbar__navigation-links-list")
const hamburger = document.querySelector(".hamburger");
const navigationListItemsArray = [...document.querySelectorAll(".navbar__navigation-links-list__item")];


hamburger.addEventListener("click", ()=> {
    navigationList.classList.toggle("nav-sliding")
})

//  CLICKING ANY OF NAVIGATION ELEMENT WILL MAKE NAVIGATION TO SLIDE AWAY
navigationListItemsArray.forEach( value => {
    value.addEventListener("click", ()=> {
        navigationList.classList.toggle("nav-sliding");
    })
});
