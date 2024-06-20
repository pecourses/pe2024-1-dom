// Model
class Slider {
  constructor(slides, currentIndex) {
    this.slides = slides;
    this.currentIndex = currentIndex;
  }

  set currentIndex(value) {
    const { length } = this.slides;

    if (typeof value !== "number") {
      throw TypeError("value must be number");
    }
    if (!Number.isInteger(value) || value < 0 || value >= length) {
      throw new RangeError(`index must be intager from 0 to ${length - 1}`);
    }

    this._currentIndex = value;
  }

  get prevIndex() {
    const {
      currentIndex,
      slides: { length },
    } = this;

    return (currentIndex - 1 + length) % length;
  }

  get currentIndex() {
    return this._currentIndex;
  }

  get nextIndex() {
    const {
      currentIndex,
      slides: { length },
    } = this;

    return (currentIndex + 1) % length;
  }

  decIndex() {
    this.currentIndex = this.prevIndex;
  }

  incIndex() {
    this.currentIndex = this.nextIndex;
  }

  get prevSlide() {
    return slides[this.prevIndex];
  }

  get currentSlide() {
    return slides[this.currentIndex];
  }

  get nextSlide() {
    return slides[this.nextIndex];
  }
}
