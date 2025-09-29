console.log("Hello World!");

const myName = "Mindy Chen";

const h1 = document.querySelector(".h1");
console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "10rem";
// });

// ****************** //
// Set current year on copyright
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
// ****************** //

// Mobile navigations show/collapse

const buttonNavOpenEl = document.querySelector(".nav-mobile-button");

const headerEl = document.querySelector(".site-header");
console.log("header", headerEl);

buttonNavOpenEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// ****************** //
// Smooth scrolling animations
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to sections

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile nav

    if (link.classList.contains("navbar-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
// ****************** //

///////////////////////////////////////////////////////////
