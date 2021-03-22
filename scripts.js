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
    // mobileNav.classList.toggle('hideNav')
    // mobileNav.classList.toggle('showNav')


    if (mobileNav.style.display === "block"){
        mobileNav.style.display = "none";
    }else{
        mobileNav.style.display = "block"
    }
}

// I tired to make this work by using toggle styling however I was unable to figure out how to make the nav start opened. I decided to go with an if else statement to toggle the display style of the nav. I have left my failed attempt as a reference. 

