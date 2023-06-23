/* import { gsap } from "./node_modules/gsap/index.js";
import { ScrollTrigger } from "./node_modules/gsap/ScrollTrigger.js";
import { Draggable } from "./node_modules/gsap/Draggable.js";
import SplitType from "./node_modules/split-type/dist/index.js";
 */
  //* to copy for webflow
  ScrollTrigger.defaults({
    markers: false
  });

  function createScrollTrigger (triggerElement, timeline) {    
    ScrollTrigger.create({
    trigger: triggerElement,
    start: "top bottom",
    onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
    },
});
    ScrollTrigger.create({
    trigger: triggerElement,
    start: "top 80%",
    onEnter: () => timeline.play()
});
}

//Text Animations Begin
$('.hero-heading').each(function(){
    let targetText = $(this);
    const heroText = new SplitType($(this),{
        types: 'words, lines',
        tagName: "hero-split"
    });
    
    gsap.set([heroText.words, heroText.lines],{
        overflow: 'hidden',
    });
    
    let tl = gsap.timeline({ paused: true });
    tl.from(heroText.words,{
        opacity: 1,
        y: "100%",
        duration:0.7,
        stagger: 0.15,
        ease: "expo"
    });
    createScrollTrigger(".div-hero-msg", tl);
});

$('.text-hero').each(function(){
    let targetText = $(this);
    const heroText = new SplitType($(this),{
        types: 'lines, words',
        tagName: "hero-split"
    });
    
    gsap.set([heroText.lines, heroText.words],{
        overflow: 'hidden',
    });
    
    let tl = gsap.timeline({ paused: true });
    tl.from(heroText.lines,{
        opacity: 0,
        y: "100%",
        rotationY: 20,
        duration:1,
        stagger: 0.2,
        ease: "expo"
    });
    createScrollTrigger(".div-hero-msg", tl);
});

$('.heading-3').each(function(){
    let targetText = $(this);
    const heroText = new SplitType($(this),{
        types: 'words, lines',
        tagName: "hero-split"
    });
    
    gsap.set([heroText.words, heroText.lines],{
        overflow: 'hidden',
        marginTop: "-2",
    });
    
    let tl = gsap.timeline({ paused: true });
    tl.from(heroText.words,{
        opacity: 0,
      	scale: 0.8,
        rotationY: 20,
        y: "100%",
        duration:0.7,
        stagger: {amount : 0.5},
        ease: "expo"
    });
    createScrollTrigger(".div-text-content", tl);
});

$('.heading-long').each(function(){
    let targetText = $(this);
    const heroText = new SplitType($(this),{
        types: 'words, lines',
        tagName: "hero-split"
    });
    
    gsap.set([heroText.lines, heroText.words],{
        overflow: 'hidden',
        marginTop: "-2",
    });
    
    let tl = gsap.timeline({ paused: true });
    tl.from(heroText.lines,{
        opacity: 0,
        x: "-3rem",
        duration:1.5,
        stagger: {amount : 0.5},
        ease: "expo",
    }) 
        .from(heroText.words,{
            y: -50,
            ease: "back",
        },"<10%")
        
        ;
    createScrollTrigger('#point', tl);
});

$('.heading-gallery').each(function(){
    let targetText = $(this);
    const heroText = new SplitType($(this),{
        types: 'chars, lines',
        tagName: "hero-split"
    });
    
    gsap.set([heroText.lines, heroText.chars],{
        overflow: 'hidden',
    });
    
    let tl = gsap.timeline({ paused: true });
    tl.from(heroText.lines,{
        x: "-20%",
        duration:3,
        stagger: {amount : 0.5},
        ease: "expo",
    }) 
        .from(heroText.chars,{
            opacity: 0,
            ease: "expo",
            duration: 2,
            stagger: 0.1
        },"<0%");
    createScrollTrigger('.diiv-gallery-heading', tl);
});

$('#sleep').each(function(){
    let targetText = $(this);
    const heroText = new SplitType($(this),{
        types: 'words, lines',
        tagName: "hero-split"
    });
    
    gsap.set([heroText.lines, heroText.words],{
        overflow: 'hidden',
        marginTop: '-2'
    });
    
    let tl = gsap.timeline({ paused: true });
    tl.from(heroText.words,{
        y: "100%",
        opacity: 0,
        duration:2,
        stagger: {amount : 0.5},
        ease: "expo",
    });
    createScrollTrigger('#div-sleep', tl);
});

$('#focus').each(function(){
    let targetText = $(this);
    const heroText = new SplitType($(this),{
        types: 'words, lines',
        tagName: "hero-split"
    });
    
    gsap.set([heroText.lines, heroText.words],{
        overflow: 'hidden',
        marginTop: '-2'
    });
    
    let tl = gsap.timeline({ paused: true });
    tl.from(heroText.words,{
        y: "100%",
        opacity: 0,
        duration:2,
        stagger: {amount : 0.5},
        ease: "expo",
    });
    createScrollTrigger('#div-focus', tl);
});

$('#mood').each(function(){
    let targetText = $(this);
    const heroText = new SplitType($(this),{
        types: 'words, lines',
        tagName: "hero-split"
    });
    
    gsap.set([heroText.lines, heroText.words],{
        overflow: 'hidden',
        marginTop: '-2'
    });
    
    let tl = gsap.timeline({ paused: true });
    tl.from(heroText.words,{
        y: "100%",
        opacity: 0,
        duration:2,
        stagger: {amount : 0.5},
        ease: "expo",
    });
    createScrollTrigger('#div-mood', tl);
});

//* draggable
$('.div-drag').each(function(){
    let tl = gsap.timeline({ paused: true });
    let boundX = $('#drag-div').width();
    let insetX = 0.5*boundX;
    tl.to(".div-drag",{
        x: 0.5*boundX,
        duration: 1,
        ease: "back.out(4)"
    }).to('.div-after',{
        clipPath: `inset(0px 0px 0px ${insetX}px)`,
        duration: 1,
        ease: "back.out(4)"
    },"<0");
    createScrollTrigger('#drag-div', tl);
});

//text animations end

Draggable.create(".div-drag", {
    type: "x",

    bounds: document.getElementById("drag-div"),
    onDrag: function() {
        let x = gsap.getProperty(this.target, "x");
        let pX = 100*(x/this.maxX);
        gsap.set(".div-after", { clipPath: `inset(0px 0px 0px ${pX}%)` });
    }
});

//* padding animation and locomotive scrolls
$(".div-section.hero").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".div-wrapper");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "100% bottom",
        markers: false,
        scrub: 0.8
      }
    });
    tl.from(targetElement, {
           padding: "0",
      duration: 1
    },"+=99%")
      .from("#hero-sticky",{
        padding: 0,
      duration: 1
    }, "<0")
    .from(".div-navbar",{
        y: "-100%",
      duration: 1
    },"<25%");
  });
  
  // Animate to
  $(".div-section.gallery").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".div-gallery-images");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "95% bottom",
        markers: false,
        scrub: 0.8
      }
    });
  
    if (isMobileDevice()) {
      // Mobile animation
      tl.to(targetElement, {
        x: "-75%",
        duration: 1
      }, "+=2.5%")
        .to('#gallery-indicator-bar', {
          width: "100%",
          duration: 1
        }, "<0%");
    } else {
      // Desktop animation
      tl.to(targetElement, {
        x: "-50%",
        duration: 1
      }, "+=2.5%")
        .to('#gallery-indicator-bar', {
          width: "100%",
          duration: 1
        }, "<0%");
    }
  });
  
  // Animate to
  $(".div-section.reviews").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".div-review-data");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "95% bottom",
        markers: false,
        scrub: 0.8
      }
    });
  
    if (isMobileDevice()) {
      // Mobile animation
      tl.to(targetElement, {
        x: "-75%",
        duration: 1
      }, "+=2.5%")
        .to('#review-indicator-bar', {
          width: "100%",
          duration: 1
        }, "<0%");
    } else {
      // Desktop animation
      tl.to(targetElement, {
        x: "-50%",
        duration: 1
      }, "+=2.5%")
        .to('#review-indicator-bar', {
          width: "100%",
          duration: 1
        }, "<0%");
    }
  });
  
  // Function to check if the device is mobile
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  

//* till here