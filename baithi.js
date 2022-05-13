function nextslide  ()  {
    let allSlides = document.querySelectorAll(".slideImg");
    for(let i = 0; i < allSlides.length; i++) {
        if(allSlides[i].className.includes("activeSlide")) {
            if(i+1 == allSlides.length) {
                allSlides[0].className = "slideImg activeSlide";
                allSlides[i].className = "slideImg hiddenSlide";
                break;
            } else {
                allSlides[i+1].className = "slideImg activeSlide";
                allSlides[i].className = "slideImg hiddenSlide";
                break;
            }
        }
    }
}
setInterval(() => nextslide(), 3000);