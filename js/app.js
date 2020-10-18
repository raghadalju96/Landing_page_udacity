/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const nav = document.getElementById("navbar__list");
const section = document.getElementsByTagName("section");
const header = document.querySelector("header");
// const header = document.querySelectorAll('.menu__link');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

function buildNav() {
  for (let i of section) {
    let navSection = `<li data-nav=${i.id}><a class="menu__link" href="#${i.id}">${i.dataset.nav}</a></li>`;

    nav.insertAdjacentHTML("beforeend", navSection);
  }
}

// Add class 'active' to section when near top of viewport

function active() {
  window.addEventListener("scroll", function () {
    //showing the nav only when the user is scrolling
    header.classList.toggle("sticky", window.scrollY > 0);

    for (let i of section) {
      const ele = Math.floor(i.getBoundingClientRect().top);
      const activeLink = document.querySelector('li[data-nav="' + i.id + '"]');

      if (ele <= 200 && ele >= -200) {
        i.classList.add("your-active-class", "shake");
        activeLink.classList.add("active__link");
      } else {
        i.classList.remove("your-active-class");

        i.style.background =
          "linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%)";

        activeLink.classList.remove("active__link");
      }
    }
  });
}

// Scroll to anchor ID using scrollTO event

function scroll() {
  const navMenu = document.querySelectorAll(".navbar__menu");
  for (let nav of navMenu) {
    nav.addEventListener("click", function () {
      for (i = 0; i < section; i++) {
        section[i].scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  }
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNav();

// Scroll to section on link click
active();

// Set sections as active

scroll();
