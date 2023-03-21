// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".box_row", {
//   scrollTrigger: {
//     trigger: ".box_row",
//     toggleActions: "play pause reverse restart",
//     start: "center top",
//     end: "center 70%",
//     scrub: true,
//   },
//   x: 450,
//   rotation: 360,
//   ease: "none",
//   duration: 1,
// });

// gsap.to(".col1 .row1", {
//   scrollTrigger: {
//     trigger: ".box_row",
//     toggleActions: "play pause reverse restart",
//     start: "center 50%",
//     end: "center 70%",
//     scrub: true,
//   },
//   x: 450,
//   rotation: 360,
//   ease: "none",
//   duration: 3,
// });

// gsap.to(".kor", {
//   scrollTrigger: {
//     trigger: ".kor",
//     toggleActions: "play pause reverse restart",
//     start: "center 50%",
//     end: "center 70%",
//     scrub: true,
//   },
//   x: 450,
//   rotation: 360,
//   duration: 3,
// });

console.log("hi");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElementss = document.querySelectorAll(".hidden2");
hiddenElementss.forEach((ell) => observer.observe(ell));

// let mouseCursor = document.querySelector(".cursor");

// window.addEventListener("mousemove", cursor);

// function cursor(e) {
//   mouseCursor.style.top = e.pageY + "px";
//   mouseCursor.style.left = e.pageX + "px";
// }
