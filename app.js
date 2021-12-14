const navbar = document.querySelector(".navbar");
const navigationList = document.querySelector(".navbar__navigation-links-list");
const hamburger = document.querySelector(".hamburger");
const navigationListItemsArray = [...document.querySelectorAll(".navbar__navigation-links-list__item")];
const closeNavbarButton = document.querySelector(".close-navbar-button");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("invert-color");
    navigationList.classList.toggle("nav-sliding");
    hamburger.classList.toggle("hamburger--disappearing");
    setTimeout( () => {
        closeNavbarButton.classList.toggle("first-item");
        closeNavbarButton.classList.toggle("display-zero-opacity");
    }, 600);
    
    setTimeout( () => {
        closeNavbarButton.classList.toggle("full-opacity");

    }, 500);


})

closeNavbarButton.addEventListener("click", () => {
    navbar.classList.toggle("invert-color");
    navigationList.classList.toggle("nav-sliding");
    closeNavbarButton.classList.toggle("display-zero-opacity");
    hamburger.classList.toggle("hamburger--disappearing");
    hamburger.classList.toggle("display");
    closeNavbarButton.classList.toggle("first-item");
    closeNavbarButton.classList.toggle("full-opacity");


})


//  CLICKING ANY OF NAVIGATION ELEMENT WILL MAKE NAVIGATION TO SLIDE AWAY
navigationListItemsArray.forEach( value => {
    value.addEventListener("click", ()=> {
        navigationList.classList.toggle("nav-sliding");
        navbar.classList.toggle("invert-color");
        closeNavbarButton.classList.toggle("display-zero-opacity");
        hamburger.classList.toggle("hamburger--disappearing");
        hamburger.classList.toggle("display");
        closeNavbarButton.classList.toggle("first-item");
        closeNavbarButton.classList.toggle("full-opacity");

    })
});
