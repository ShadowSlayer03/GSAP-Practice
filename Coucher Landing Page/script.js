let tl = gsap.timeline();


tl.from("nav",{
    duration: 1,
    delay: 1,
    opacity: 0,
    y: -30,
})

tl.from("#left h1",{
    duration: 1,
    opacity: 0,
    x: -40,
    stagger: 0.5,
})
tl.from("#left .details",{
    duration: 1,
    opacity: 0,
    x: -40,
    stagger: 0.5,
})

tl.from("#right img",{
    duration: 1.5,
    opacity: 0,
    scale: 0.5,
    x: 40,
})

tl.from("#right h2",{
    duration: 1,
    opacity: 0,
    x: 50,
})

tl.from("#book-demo-call",{
    duration: 1,
    opacity: 0,
    x: 50,
})

tl.from(".short-info",{
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.5,
    scrollTrigger: {
        scroller: "body",
        trigger: ".short-info",
        scrub: 3,
    }
})

tl.from(".info-items",{
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.5,
    scrollTrigger: {
        scroller: "body",
        trigger: ".info-items",
        scrub: 3,
    }
})

ScrollTrigger.create({
    trigger: ".folders", // Use an appropriate container as the trigger.
    start: "top center", // Adjust the start position as needed.
    end: "bottom center", // Adjust the end position as needed.
    onEnter: () => {
      // Play the timeline when the trigger container enters the viewport.
      folderTl.play();
    },
    onLeaveBack: () => {
      // Reverse the timeline when the trigger container exits the viewport.
      folderTl.reverse();
    },
  });

let folderTl = gsap.timeline();

folderTl.from(".folders",{
    duration: 1,
    opacity: 0,
    stagger: 0.5,
})
folderTl.from("#box1 i",{
    duration: 1,
    opacity: 0,
    x: -70,
    stagger: 0.5,
})
folderTl.from("#box1 h2",{
    duration: 1,
    opacity: 0,
    x: -70,
    
})
folderTl.from("#box1 span img",{
    duration: 1,
    opacity: 0,
    x: 80,
})
folderTl.from("#box2 i",{
    duration: 1,
    opacity: 0,
    x: -70,
    }
)
folderTl.from("#box2 h1",{
    duration: 1,
    opacity: 0,
    x: 80,
    
})

folderTl.from("#box3 i",{
    duration: 1,
    opacity: 0,
    x: -70,
})
folderTl.from("#box3 h2",{
    duration: 1,
    opacity: 0,
    x: 80,
    
})
folderTl.from("#box3 h1",{
    duration: 1,
    opacity: 0,
    x: 80,
})

folderTl.pause();



