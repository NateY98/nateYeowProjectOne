// pseudo code
// when the hamburger menu is clicked:
    // reveal the nav below
    // when clicked again, close the nav 


// make a variable to hold my hamburger menu
// target the i in the hamburger class
const burger = document.getElementsByClassName("hamburger")[0];

const mobileNav = document.getElementById('mobile')
// make an event listener to check when burger menu is clicked

burger.addEventListener('click', changeClass)

 // make a function within to toggle between the class ".showNav" and ".hideNav" on the "nav.mobile"
function changeClass(){    
    mobileNav.classList.toggle('hideNav')
    mobileNav.classList.toggle('showNav')

}

