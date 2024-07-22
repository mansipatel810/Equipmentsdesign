gsap.to(".book", {
    x: "-1600%",
    scrollTrigger: {
      trigger: '.equipments', 
      scroller: 'body',
      start: "top 0%",
      end: "top -300%", 
      scrub: 3,
     


      pin:".equipments"
    }
  });
   gsap.from(".greaup",{
    x:"-100%",
    scrollTrigger:{
      scroller: 'body',
      start: "top 0%",
      end: "top -100%", 
      scrub: 1,
     
    }
   })