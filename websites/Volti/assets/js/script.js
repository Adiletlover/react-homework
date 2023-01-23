'use strict';



const loadEl = document.querySelector("[data-preloader]")

window.addEventListener("load", function(){
    loadEl.classList.add("loaded")
})


// MOBILE NAVBAR TOGGLE

const navbar = document.querySelector("[data-navbar]")
const navToggler = document.querySelector("[data-nav-toggle]")

const toggleNav = function () {
    navbar.classList.toggle("active")
    navToggler .classList.toggle("active")
}

navToggler.addEventListener('click', toggleNav)

// FOR HEADER

const header = document.querySelector("[data-header]")
const backTopBtn = document.querySelector("[data-go-top-btn]")

window.addEventListener('scroll', function () {
    if(window.scrollY >= 100){
        header.classList.add("active")
        backTopBtn.classList.add("active")
    }
    else{
        header.classList.remove("active")
        backTopBtn.classList.remove("active")
    }
})


// SCROLL REVEAL

const revealEl = document.querySelectorAll("[data-reveal]")

const scrollReveal = function () {
    for(let i =0, x = revealEl.length; i < x; i++){
        if(revealEl[i].getBoundingClientRect().top < window.innerHeight / 1.2){
            revealEl[i].classList.add("revealed")
        }
        else{
            revealEl[i].classList.remove("revealed")
        }
    }
}

window.addEventListener("scroll", scrollReveal)
window.addEventListener("load", scrollReveal)