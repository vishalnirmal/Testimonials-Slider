var prev = document.querySelector(".slider-prev");
var next = document.querySelector(".slider-next");
var slides = document.querySelector(".slider-items").children;
var length = slides.length;
var index = 0;
console.log(slides);
console.log(length);
prev.addEventListener("click", ()=>{
    slides[index].classList.remove("active");
    slides[index].classList.add("inactive");
    index = (index - 1 + length) % length;
    slides[index].classList.add("active");
    slides[index].classList.remove("inactive");
});
next.addEventListener("click", ()=>{
    slides[index].classList.remove("active");
    slides[index].classList.add("inactive");
    index = (index + 1 + length) % length;
    slides[index].classList.add("active");
    slides[index].classList.remove("inactive");
});