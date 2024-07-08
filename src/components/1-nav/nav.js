// -------------------------------------- Standard Nav ------------------------------------



// -------------------------------------- Responsive Nav ------------------------------------

const mobileNav = {
    burgerBtn : document.querySelector("#mobile-nav-logo-btn"),
    linksContainer : document.querySelector(".mobile-nav-links"),
    openNav: false
};

// toggles mobile nav open or closed
mobileNav.burgerBtn.addEventListener('click', (e) => {
    
    mobileNav.openNav = !mobileNav.openNav;
    console.log(mobileNav.openNav)

    mobileNav.openNav ? mobileNav.linksContainer.classList.add("mobile-links-active") : mobileNav.linksContainer.classList.remove("mobile-links-active") 
})