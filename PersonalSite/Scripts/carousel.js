let slideIndex = 1;
let slide_type = 0; // 0 for sushi, 1 for ramen
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function switch_slides(n) {
  if (n === 0) {
    document.getElementById("ramen-carousel").style.display = "none";
    document.getElementById("sushi-carousel").style.display = "grid";
    slide_type = 0;
    slideIndex = 1;
    showSlides(slideIndex);
  }

  if (n === 1) {
    document.getElementById("sushi-carousel").style.display = "none";
    document.getElementById("ramen-carousel").style.display = "grid";
    slide_type = 1;
    slideIndex = 2;
    showSlides(slideIndex);
  }

}

function showSlides(n) {
  let i;
  let sushi_slides = document.getElementsByClassName("sushi");
  let ramen_slides = document.getElementsByClassName("ramen");
  let sushi_button = document.getElementById("sushi-button");
  let ramen_button = document.getElementById("ramen-button");

  // Hide all slides and remove 'active' class
  for (i = 0; i < sushi_slides.length; i++) {
    sushi_slides[i].classList.remove("active");
  }
  for (i = 0; i < ramen_slides.length; i++) {
    ramen_slides[i].classList.remove("active");
  }

  if (slide_type === 0) {
    if (n > sushi_slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = sushi_slides.length;}
    sushi_button.style.backgroundColor = "#F2F2F2";
    ramen_button.style.backgroundColor = "#4C7262";
    sushi_slides[slideIndex - 1].classList.add("active");
  } else if (slide_type === 1) {
    if (n > ramen_slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = ramen_slides.length;}
    ramen_button.style.backgroundColor = "#F2F2F2";
    sushi_button.style.backgroundColor = "#4C7262";
    ramen_slides[slideIndex - 1].classList.add("active");
  }
}