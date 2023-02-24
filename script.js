gsap.from(".square", {rotation: 80,   scale: 2.2, 
    duration: 2.5,
    backgroundColor: '#006008',
    yoyo: true, 
    repeat: -1})

gsap.to(".square", { 
    scale: 2.4, 
    duration: 2.5, 
    // backgroundColor:  '#6d3dae' ,
    yoyo: true,
    repeat: -1,
    })

gsap.from(".square2", {   
    scale: 2.2, 
    duration: 2.6,
    backgroundColor: '#006008',
    yoyo: true, 
    repeat: -1})

gsap.to(".square2", { 
    scale: 2.4,
    duration: 2.5, 
    yoyo: true,
    repeat: -1,
    
})


    gsap.from(".circle", {rotation: 80,   scale: 1.2, 
        duration: 2.5,
      })
    
      gsap.from(".circle", { 
        scale: 2.3,
        delay:0.5,})

    gsap.to(".circle", { 
        scale: 2.5, 
        duration: 4.5,
        delay: 1,
        yoyo: true,
        repeat: -1,})