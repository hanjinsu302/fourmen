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

const hiddenElements1 = document.querySelectorAll(".hidden1");
hiddenElements1.forEach((el1) => observer.observe(el1));

const hiddenElements2 = document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el11) => observer.observe(el11));
