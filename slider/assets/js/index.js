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

// MVVM -- Model - View - ViewModel (MVC, MVP)

// стан
let currentSlideIndex = 0;

// встановити як початкове нульове зображення
const sliderImg = document.querySelector(".sliderImg");

updateSlider(currentSlideIndex);

// при натисканні на next відобразити наступне зображення
const [prevBtn, nextBtn] = document.querySelectorAll("button");

prevBtn.onclick = () => {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;

  updateSlider(currentSlideIndex);
};

// при натисканні на prev відобразити попереднє зображення
nextBtn.onclick = () => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;

  updateSlider(currentSlideIndex);
};

function updateSlider(currentIndex) {
  sliderImg.src = slides[currentIndex].src;
  sliderImg.alt = slides[currentIndex].alt;
}
