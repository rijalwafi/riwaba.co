const slideshow = document.getElementById("slideshow");
const slide = slideshow.getElementsByTagName("img");
let index = 0;
nextSlide = () => {
  slide[index].classList.remove("active");
  index = (index + 1) % slide.length;
  slide[index].classList.add("active");
};
prevSlide = () => {
  slide[index].classList.remove("active");
  index = (index - 1 + slide.length) % slide.length;
  slide[index].classList.add("active");
};

const slideShowText = document.getElementById("slideShowText");
const slideText = slideShowText.getElementsByTagName("div");
let i = 0;
nextSlideText = () => {
  slideText[i].classList.remove("active");
  i = (i + 1) % slideText.length;
  slideText[i].classList.add("active");
};
prevSlideText = () => {
  slideText[i].classList.remove("active");
  i = (i - 1 + slideText.length) % slideText.length;
  slideText[i].classList.add("active");
};
menuToogle = () => {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("active");
};
