const gallerySlider = [
    {
      img: "./image/groupSliderImg/1.jpg",
    },
    {
      img: "./image/imageGallery/1.jpeg",
    },
    {
      img: "./image/imageGallery/2.jpg",
    },
    {
      img: "./image/imageGallery/3.jpg",
    },
    {
      img: "./image/imageGallery/4.jpg",
    },
    {
      img: "./image/imageGallery/28.jpg",
    },
    {
      img: "./image/groupSliderImg/15.webp",
    },
    {
      img: "./image/groupSliderImg/16.jpg",
    },
    {
      img: "./image/groupSliderImg/10.jpg",
    },
    {
      img: "./image/imageGallery/5.jpg",
    },
    {
      img: "./image/imageGallery/27.png",
    },
    {
      img: "./image/imageGallery/6.jpeg",
    },
    {
      img: "./image/imageGallery/7.jpeg",
    },
    {
      img: "./image/groupSliderImg/2.jpg",
    },
    {
      img: "./image/imageGallery/8.jpeg",
    },
    {
      img: "./image/imageGallery/9.jpeg",
    },
    {
      img: "./image/imageGallery/26.png",
    },
    {
      img: "./image/groupSliderImg/19.jpg",
    },
    {
      img: "./image/imageGallery/10.jpeg",
    },
    {
      img: "./image/groupSliderImg/3.jpg",
    },
    {
      img: "./image/groupSliderImg/4.jpg",
    },
    {
      img: "./image/groupSliderImg/5.jpg",
    },
    {
      img: "./image/groupSliderImg/6.jpeg",
    },
    {
      img: "./image/imageGallery/12.jpeg",
    },
    {
      img: "./image/imageGallery/11.jpeg",
    },
    {
      img: "./image/imageGallery/13.jpeg",
    },
    {
      img: "./image/imageGallery/30.jpg",
    },
    {
      img: "./image/imageGallery/14.jpg",
    },
    {
      img: "./image/imageGallery/15.jpeg",
    },
  ];


  const galleryModal = document.querySelector('.galleryModal');
  const galleryModalImg = galleryModal.querySelector('img');
  const btns = galleryModal.querySelectorAll('.arrow-btn')
  const galleryModalClose = galleryModal.querySelector('.close');
  const footer = document.querySelector('footer');
  const imageGallery = document.querySelector('.imageGallery');
  const galleryImages = [...imageGallery.querySelectorAll('.galleryCont img')]
  
  
  let gallerySlide = 0;
  const updateGalleryModal = () => {
    galleryModalImg.style.opacity = 0;

    setTimeout(() => {
        galleryModalImg.src = gallerySlider[gallerySlide].img;  

        galleryModalImg.style.opacity = 1;
    }, 800)
  }
  
  
  btns.forEach(btn => {
      const moveSlide = (e) => {
        gallerySlide =
          e.currentTarget.id === "left"
          ? gallerySlide <= 0
          ? gallerySlider.length - 1
          : gallerySlide - 1
            : gallerySlide >= gallerySlider.length -1
            ? 0
            : gallerySlide + 1;
            updateGalleryModal();
      };

      btn.addEventListener('click', moveSlide)
})


window.addEventListener("DOMContentLoaded", updateGalleryModal)

const header = document.querySelector('header');

const gallerySection = document.querySelector('.gallerySection');

const galleryMain = document.getElementById('galleryMain');


galleryImages.map(galleryImg => {
  galleryImg.addEventListener('click', () => {
    galleryMain.style.marginTop = 0;
    galleryModal.classList.add('modal');
    header.classList.add('blur');
    galleryMain.classList.add('blur');
    footer.classList.add('blur');
    
  })
})

galleryModalClose.addEventListener('click', () => {
  galleryMain.style.marginTop = "81.25px";
  galleryModal.classList.remove('modal');
  header.classList.remove('blur');
  galleryMain.classList.remove('blur');
  footer.classList.remove('blur');
  
})