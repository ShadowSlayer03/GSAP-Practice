let about = document.querySelectorAll("nav h2")[0];
let work = document.querySelectorAll("nav h2")[1];

about.addEventListener('click',()=>{
    about.style.color = "black";
    about.style.borderBottom = "1px solid black";
})

work.addEventListener('click',()=>{
    work.style.color = "black";
    work.style.borderBottom = "1px solid black";
})

let tl = gsap.timeline();

tl.from("nav",{
    y: -50,
    opacity: 0,
    duration: 1,
})

tl.from(".info h1",{
    x: -50,
    opacity: 0,
    duration: 1,
})

tl.from(".info p",{
    x: -50,
    opacity: 0,
    duration: 1,
})

tl.from(".info h4",{
    x: -50,
    opacity: 0,
    duration: 1,
})

tl.from("#upperimg1",{
    x: -50,
    scale: 0.5,
    opacity: 0,
    duration: 1,
})
tl.from("#upperimg2",{
    x: 50,
    scale: 0.5,
    opacity: 0,
    duration: 1,
})
tl.from("#lower-div img",{
    y: 50,
    scale: 0.5,
    opacity: 0,
    duration: 1,
})