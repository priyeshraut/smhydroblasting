const loader = document.querySelector('.loader')


const loaderTime = () => {
  var initalValue = 0;
  setInterval(() => {
    initalValue = initalValue + Math.floor(Math.random() * 20);
    if (initalValue < 100) {
      document.querySelector(".loader h1").innerText = initalValue + "%";
    } else {
      initalValue = 100;
      document.querySelector(".loader h1").innerText = initalValue + "%";
      loader.style.top = "-100vh";
    }
  }, 100);
};


// showHeader and ShowHide moveToTop link

let lastScrollY = window.scrollY;
const navBar = document.querySelector(".navBar");
const firstPage = document.querySelector("main > *");
const topLink = document.querySelector(".moveToTop");

const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  const scrollHeight = window.scrollY;
  const firstPagelHeight = firstPage.getBoundingClientRect().height;

  if (lastScrollY < window.scrollY) {
    navBar.style.top = -navHeight + "px";
  } else {
    navBar.style.top = "0";
  }
  lastScrollY = window.scrollY;

  if (scrollHeight > firstPagelHeight) {
    topLink.classList.remove("show-link");
  } else {
    topLink.classList.add("show-link");
  }

});


// adding active classed to navLinks

const navLists = document.querySelectorAll(".navList li a");
navLists.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});


// navBarShow for mobile devices

const navHamBurger = document.querySelector("nav .hamBurger");
const asideHamBurger = document.querySelector("aside .hamBurger");
const navAside = document.querySelector("aside");

const hamOpen = (e) => {
  navAside.classList.add("show");
};

const hamClose = (e) => {
  navAside.classList.remove("show");
};

navHamBurger.addEventListener("click", hamOpen);
asideHamBurger.addEventListener("click", hamClose);



// dynamically change footer year

const Day = new Date();

const footerYear = document.querySelector(".footerYear");

const getFullYear = Day.getFullYear();
footerYear.innerText = getFullYear;


// move to Top Link

window.addEventListener("DOMContentLoaded", () => {
  loaderTime();
  
  // Get the button element
  var moveToTopBtn = document.querySelector(".moveToTop");

  // Add click event listener to the button
  moveToTopBtn.addEventListener("click", () => {
      // Scroll the page to the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});




