const elements = document.querySelectorAll("#text-div h1");

function addText() {
    let texts = ["Nature", "Morte", "For", "Harper's"];
    let i = 0; // Index for the current text

    function animateText() {
        if (i < elements.length) {
            let j = 0; // Start at the first character
            let element = elements[i];

            let interval = setInterval(() => {
                if (j <= texts[i].length) {
                    let slicedText = texts[i].slice(0, j);
                    j++;
                    element.innerHTML = `<h1>${slicedText}<span></span></h1>`;
                } else {
                    clearInterval(interval);
                    i++; // Move to the next text
                    animateText(); // Call the function recursively for the next text
                }
            }, 200);
        }
    }

    animateText(); // Start the animation
}


let tl = gsap.timeline();

 tl.from('#text-div span',{
     duration: 1.5,
     width: "0%",
     markers:true,
     stagger: 1,
 })

tl.to("#text-div h1",{
    delay: 1,
    onStart: addText,
})

tl.from("#part2,#sec-img-div, #part3",{
    x: -120,
    opacity: 0,
    width: "10%",
    duration: 1.5,
    delay: 0,
})

tl.from("nav",{
    y: 80,
    opacity: 0,
    duration: 1.5,
    delay: 0,
})

tl.from("#vertical-text",{
    duration: 2,
    transform: "translateY(105%)",
    delay: 0,
})
