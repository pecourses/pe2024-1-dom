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

// ViewModel
const [prevSliderImg, currentSliderImg, nextSliderImg] =
  document.querySelectorAll("img");

const [prevBtn, nextBtn] = document.querySelectorAll("button");

currentSliderImg.onerror = () => sliderError();

const navContainer = document.querySelector(".navSlider");
const navCircles = slides.map(s => {
  const navCircle = document.createElement("div");
  navCircle.classList.add("navCircle");
  return navCircle;
});
navContainer.append(...navCircles);

try {
  const slider = new Slider(slides, 0);
  updateSlider(slider.prevSlide, slider.currentSlide, slider.nextSlide, slider);

  function changeSlideHandler(direction = "next") {
    return () => {
      slider[direction === "prev" ? "decIndex" : "incIndex"]();
      updateSlider(
        slider.prevSlide,
        slider.currentSlide,
        slider.nextSlide,
        slider,
        direction
      );
    };
  }

  prevBtn.onclick = changeSlideHandler("prev");
  nextBtn.onclick = changeSlideHandler("next");
} catch (err) {
  sliderError();
  console.log("err :>> ", err);
}

function updateSlider(prevSlide, currentSlide, nextSlide, slider, direction) {
  switch (direction) {
    case "prev":
      prevSliderImg.style.transition = "none";
      prevSliderImg.style.left = "-200%";
      currentSliderImg.style.transition = "none";
      currentSliderImg.style.left = "-100%";
      nextSliderImg.style.transition = "none";
      nextSliderImg.style.left = "0%";
      break;
    case "next":
      prevSliderImg.style.transition = "none";
      prevSliderImg.style.left = "0%";
      currentSliderImg.style.transition = "none";
      currentSliderImg.style.left = "100%";
      nextSliderImg.style.transition = "none";
      nextSliderImg.style.left = "200%";
      break;
    default:
      break;
  }

  prevSliderImg.src = prevSlide.src;
  prevSliderImg.alt = prevSlide.alt;

  currentSliderImg.src = currentSlide.src;
  currentSliderImg.alt = currentSlide.alt;

  nextSliderImg.src = nextSlide.src;
  nextSliderImg.alt = nextSlide.alt;

  navCircles[
    direction === "prev" ? slider.nextIndex : slider.prevIndex
  ].classList.remove("activeCircle");
  navCircles[slider.currentIndex].classList.add("activeCircle");

  setTimeout(() => {
    prevSliderImg.style.transition = "0.2s linear left";
    currentSliderImg.style.transition = "0.2s linear left";
    nextSliderImg.style.transition = "0.2s linear left";
    prevSliderImg.style.left = "-100%";
    currentSliderImg.style.left = "0%";
    nextSliderImg.style.left = "100%";
  }, 0);
}

function sliderError() {
  currentSliderImg.src =
    "https://cdn.vectorstock.com/i/500p/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg";
  currentSliderImg.alt = "unavailable image";
}

console.log("after error");
