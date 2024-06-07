// Carousel

const slider = document.querySelector(".carousel");
const sliderImages = slider.querySelector(".carousel img");
const buttons = document.querySelectorAll(".caroselCont button");
const dots = document.querySelectorAll(".dot");

const sliderImg = [
  {
    img: "./image/slider/slider01.png",
  },
  {
    img: "./image/slider/slider02.png",
  },
  {
    img: "./image/slider/slider03.png",
  },
  {
    img: "./image/slider/slider04.png",
  },
  {
    img: "./image/slider/slider05.png",
  },
];


let slide = 0;
const updateSlider = () => {
  sliderImages.style.opacity = 0;

  setTimeout(() => {
    sliderImages.src = sliderImg[slide].img;

    sliderImages.style.opacity = 1;
  }, 800);

  // updating dots
  dots.forEach((dot, idx) => {
    idx === slide
      ? dot.classList.add("active")
      : dot.classList.remove("active");
  });
};

const moveSlide = (e) => {
  slide =
    e.currentTarget.id === "left"
      ? slide <= 0
        ? sliderImg.length - 1
        : slide - 1
      : slide >= sliderImg.length - 1
      ? 0
      : slide + 1;

  resetAutoInterval();
  updateSlider();
};

const autoMaticSlide = () => {
  slide = slide >= sliderImg.length - 1 ? 0 : slide + 1;

  updateSlider();
};

let autoInerval = setInterval(autoMaticSlide, 3000);

const resetAutoInterval = () => {
  clearInterval(autoInerval);
  autoInerval = setInterval(autoMaticSlide, 3000);
};

dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    slide = idx;
    updateSlider();
    resetAutoInterval();
  });
});

buttons.forEach((btn) => {
  btn.addEventListener("click", moveSlide);
});

slider.addEventListener("mouseenter", () => {
  clearInterval(autoInerval);
});

slider.addEventListener("mouseleave", () => {
  autoInerval = setInterval(autoMaticSlide, 3000);
});






// groupSlider

const groupButtons = document.querySelectorAll(".groupSliderCont button");
const groupSlider = document.querySelector(".groupSliderCont .group-slider");
const groupSliderImg = groupSlider.querySelector(".groupSliderCont .sliderImg");
const groupSliderImgWidth = groupSliderImg.offsetWidth;
const maxScroll = groupSlider.scrollWidth - groupSlider.clientWidth;

// moveSlide and infiniteSlide both are written in if else condition
const moveItem = (e) => {
  if (e.currentTarget.id === "left") {
    if (groupSlider.scrollLeft === 0) {
      groupSlider.scrollLeft = maxScroll;
    } else {
      groupSlider.scrollLeft -= groupSliderImgWidth;
    }
  } else {
    if (groupSlider.scrollLeft >= maxScroll) {
      groupSlider.scrollLeft = 0;
    } else {
      groupSlider.scrollLeft += groupSliderImgWidth;
    }
  }
};

groupButtons.forEach((btn) => {
  btn.addEventListener("click", moveItem);
});



// groupSlider
const clientCont = document.querySelector(".clients");
const clientImg = clientCont.querySelector(".client");
const clientImgWidth = clientImg.offsetWidth;
const clientMaxScroll = clientCont.scrollWidth - clientCont.clientWidth;

// moveSlide and infiniteSlide both are written in if else condition
const moveClientItem = () => { 
    if (clientCont.scrollLeft >= clientMaxScroll) {
      clientCont.scrollLeft = 0;
    } else {
      clientCont.scrollLeft += clientImgWidth;
    }
};


setInterval(moveClientItem, 2000);






