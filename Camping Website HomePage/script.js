const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");
const navMenu = document.querySelector("#nav-menu");

if(navToggle)
{
    navToggle.addEventListener('click',()=>{
        navMenu.classList.toggle("show-menu");
    })
}

if(navClose)
{
    navClose.addEventListener('click',()=>{
        navMenu.classList.toggle("show-menu");
    })
}

const navLink = document.querySelectorAll(".nav__link");
function linkAction()
{
    const navMenu = document.querySelector("#nav-menu");
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n)=>{
    n.addEventListener('click',linkAction);
})

const bgHeader = ()=>{
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('bg-header'):header.classList.remove('bg-header')
}

window.addEventListener('scroll',bgHeader);


// ANIMATIONS

gsap.from(".home__img-2",1.2,{
    opacity: 0,
    y: 200,
    delay: 0.1,
})

gsap.from(".home__img-3",1.2,{
    opacity: 0,
    y: 200,
    delay: 0.5,
})
gsap.from(".home__data",1.2,{
    opacity: 0,
    y: -60,
    delay: 1,
})
gsap.from(".home__bird-1",1.2,{
    opacity: 0,
    x: -80,
    delay: 1.1,
})
gsap.from(".home__bird-2",1.2,{
    opacity: 0,
    x: 80,
    delay: 1.2,
})
gsap.from(".home__img-1",1.2,{
    opacity: 0,
    y: 200,
    delay: 1.2,
})
gsap.from(".home__img-4",1.2,{
    opacity: 0,
    x: 200,
    delay: 1.3,
})