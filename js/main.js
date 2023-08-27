


/*------------------------------------------------------
    testimonial slider
--------------------------------------------------------*/
function testimonialSlider(){
    const CarouselOne = document.getElementById('CarouselOne');
    if(CarouselOne){ 
        CarouselOne.addEventListener('slid.bs.carousel', function() {
            const activeItem = this.querySelector(".active");
            document.querySelector(".js-testimonial-img").src =
            activeItem.getAttribute("data-js-testimonial-img");
          })
    }
}
testimonialSlider();

