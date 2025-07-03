const wrapper = document.querySelector(".Blog-cards-wrapper");
const thumb = document.querySelector(".scroll-thumb");

wrapper.addEventListener("scroll", () => {
  const scrollLeft = wrapper.scrollLeft;
  const scrollWidth = wrapper.scrollWidth - wrapper.clientWidth;
  const percent = (scrollLeft / scrollWidth) * 100;
  thumb.style.transform = `translateX(${percent}%)`;
});

function openSidebar() {
  document.getElementById("sidebar").style.right = "0";
}

function closeSidebar() {
  document.getElementById("sidebar").style.right = "-300px";
}

window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#home .logo", {
    y: -30,
    duration: 0.3,
    delay: 0.5,
    opacity: 0,
    scrollTrigger:{
      trigger: "#home .logo",
      start: "top 90%"
    }
  });

  gsap.from(".nav-links a", {
    y: -30,
    duration: 0.4,
    stagger:0.1,
    opacity: 0,
    scrollTrigger:{
      trigger: ".nav-links a",
      start: "top 90%"
    }
  });

  gsap.from(".hamburger", {
    y: -30,
    opacity: 0,
    duration: 0.4,
    scrollTrigger:{
      trigger: ".hamburger",
      start: "top 90%"
    }
  });
  
  gsap.from(".phone-container", {
    y: -30,
    opacity: 0,
    duration: 0.4,
    scrollTrigger:{
      trigger: "phone-container",
      start: "top 90%"
    }
  });

  gsap.from(".explore-btn", {
    y: -30,
    opacity: 0,
    duration: 0.4,
    scrollTrigger:{
      trigger: ".explore-btn",
      start: "top 90%"
    }
  });

  gsap.from(".user-icon", {
    y: -30,
    opacity: 0,
    duration: 0.4,
    scrollTrigger:{
      trigger: ".user-icon",
      start: "top 90%"
    }
  });

  gsap.from(".sidebar li",{
    x: -40,
    opacity: 0,
    duration: 0.4,
     stagger:1,
    scrollTrigger:{
      trigger: ".sidebar",
      start: "top 90%"
    }
  });

  gsap.from(".hero-section .left h1",{
    x: -100,
    opacity: 0,
    duration: 1,
    stagger:0.1,
    scrollTrigger:{
    trigger: ".hero-section .left h1",
    start: "top 80%"
    }
  })

  gsap.from(".hero-section .left", {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".hero-section left",
    start: "top 80%"
  }
});

gsap.from(".hero-section img", {
  y: 70,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".hero-section img",
    start: "top 85%"
  }
});

  gsap.from(".featured-section h1", {
    opacity: 0,
    duration: 0.5,
    y: -80,
    scrollTrigger: {
    trigger: ".featured-section h1",
    start: "top 85%"
  }
  });

gsap.from(".cards", {
  opacity: 0,
  y: -80,
  scale: 0.95,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".cards",
    start: "top 85%"
  }
});

 document.querySelectorAll(".car-card1").forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out"
      });
    });
  });

gsap.from(".step-section h1", {
  opacity: 0,
  y: -30,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".step-section h1",
    start: "top 85%"
  }
});

gsap.from(".step-card1", {
  x: -100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".step-card1",
    start: "top 85%"
  }
});

document.querySelectorAll(".step-card1").forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        x: -10,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        x: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });


gsap.from(".Blog-section h1", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".Blog-section h1",
    start: "top 85%"
  }
});

gsap.from(".Blog-card1", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".Blog-card1",
    start: "top 85%"
  }
});

 document.querySelectorAll(".Blog-card1").forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out"
      });
    });
  });

gsap.from(".footer", {
  y: 30,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%"
  }
});

gsap.from(".footer-col", {
  y: 30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".footer-col",
    start: "top 90%"
  }
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".footer-bottom", {
  y: 30,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".footer-bottom",
    end: "bottom 90%", // Start when the top of footer-bottom reaches 90% of viewport
    toggleActions: "play none none none",

  }
});

var cursor = document.querySelector("#cursor"  
)

var main = document.querySelector("main")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.6,
    })
})

const hoverTargets = document.querySelectorAll("a, button, img, .Blog-card1, hover, .car-card1, .step-card1");

hoverTargets.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 2,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  el.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

});
