


/*------------------------------------------------------
    testimonial slider
--------------------------------------------------------*/
function testimonialSlider(){
    const CarouselOne = document.getElementById('CarouselOne');
    if(CarouselOne){ 
        myCarousel.addEventListener('slide.bs.carousel', function() {
            const activeItem = this.querySelector(".active");
            console.log(activeItem);
          })
    }
}
testimonialSlider();