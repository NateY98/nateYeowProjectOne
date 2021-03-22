// pseudo code
// when the hamburger menu is clicked:
    // reveal the nav below
    // when clicked again, close the nav 


// make a variable to hold my hamburger menu
// target the i in the hamburger class
const burger = document.getElementsByClassName("hamburger")[0];

const mobileNav = document.getElementById('mobile')
// make an event listener to check when burger menu is clicked

 // make a function within to toggle between the class ".showNav" on the "nav.mobile"
burger.addEventListener('click', function(e){
    mobileNav.classList.toggle('showNav')
})





