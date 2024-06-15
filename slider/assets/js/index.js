const slides = [
  {
    src: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg",
    alt: "landscape1",
  },
  {
    src: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg",
    alt: "landscape2",
  },
  {
    src: "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg",
    alt: "landscape3",
  },
  {
    src: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    alt: "landscape4",
  },
];

let currentSlideIndex = 0;

// встановити як початкове нульове зображення
const sliderImg = document.querySelector(".sliderImg");

sliderImg.src = slides[currentSlideIndex].src;
sliderImg.alt = slides[currentSlideIndex].alt;

// при натисканні на next відобразити наступне зображення
const [prevBtn, nextBtn] = document.querySelectorAll("button");

prevBtn.onclick = () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
  } else {
    currentSlideIndex = slides.length - 1;
  }
  sliderImg.src = slides[currentSlideIndex].src;
  sliderImg.alt = slides[currentSlideIndex].alt;
};

nextBtn.onclick = () => {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex++;
  } else {
    currentSlideIndex = 0;
  }

  sliderImg.src = slides[currentSlideIndex].src;
  sliderImg.alt = slides[currentSlideIndex].alt;
};
