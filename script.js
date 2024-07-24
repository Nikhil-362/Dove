window.onload = () => {
    console.log("object");


    // product Animation - s

    const items = document.querySelectorAll("#bg li");

    gsap.registerPlugin(ScrollTrigger);

    const animateIn = (element) => {
        gsap.to(element, {
            fontSize: "10vw",
            textDecoration: "underline",
            textTransform: "uppercase",
            opacity: 1, // Set the opacity to fully visible
            duration: 2, // Duration for the opacity animation
            ease: "power1.inOut"
        });
    };

    const animateOut = (element) => {
        gsap.to(element, {
            fontSize: "xx-large",
            textDecoration: "none",
            textTransform: "lowercase",
            opacity: 1, // Set the opacity to fully invisible
            duration: 2, // Duration for the opacity animation
            ease: "power1.inOut"
        });
    };

    items.forEach((item) => {
        ScrollTrigger.create({
            trigger: item,
            scroller: "body",
            // markers: true,
            start: "top 60%",  // Adjusted to trigger earlier
            end: "top 40%",   // Adjusted to trigger later
            // scrub: 2,
            onEnter: () => animateIn(item),
            onLeave: () => animateOut(item),
            onEnterBack: () => animateIn(item),
            onLeaveBack: () => animateOut(item)
        });
    });

    
    // product Animation - E


    // Burger Menu Aninmation -S

    const bm = document.querySelector("#ico .bx-menu")
    const close = document.querySelector('#burgerMenu .bx-sm');
    
    const menu = document.querySelector('#burgerMenu');
    const menulink = document.querySelectorAll('#burgerMenu a');
 
    bm.addEventListener("click",()=>{
        gsap.to(menu, {
            right:"0vw",
        });

        gsap.to(menulink,{
            y:-40,
            opacity:1,
            stagger:1,
        })
        
    })

    close.addEventListener("click",()=>{
        gsap.to(menu, {
            right:"-80vw"
       });
    
    })


    // Burger Menu Aninmation -E


    //Menus animation _S
    
    gsap.from("nav",{
        y:10,
        opacity:0,
    })
    
    //Menus animation _E

    //backTitle _s

    gsap.from(["#backTitle"],{
        y:10,
        opacity:0,
        delay:.5
    })

    gsap.from(["#page1 img"],{
        y:10,
        opacity:0,
    })


    //backTitle _E
};



