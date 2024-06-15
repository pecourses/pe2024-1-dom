const slides = [
  {
    src: "htps://images.pexels.com/photos/624015/pexels-photo-624015.jpeg",
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
const sliderImg = document.querySelector(".sliderImg");
const [prevBtn, nextBtn] = document.querySelectorAll("button");

function updateSlider(currentIndex) {
  sliderImg.src = slides[currentIndex].src;
  sliderImg.alt = slides[currentIndex].alt;
}

function sliderError() {
  sliderImg.src =
    "https://cdn.vectorstock.com/i/500p/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg";
  sliderImg.alt = "unavailable image";
}

sliderImg.onerror = () => {
  sliderError();
};

try {
  const slider = new Slider(slides, 0);
  updateSlider(slider.currentIndex);

  // 'prev', 'next'
  function changeSlideHandler(direction = "next") {
    return () => {
      slider[direction === "prev" ? "decIndex" : "incIndex"]();
      updateSlider(slider.currentIndex);
    };
  }

  prevBtn.onclick = changeSlideHandler("prev");
  nextBtn.onclick = changeSlideHandler("next");
} catch (err) {
  sliderError();
}

console.log("after error");
