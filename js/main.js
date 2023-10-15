const activeT = document.querySelector(".js-toggle-sub-menu .active");
console.log("ll", activeT)
const activeS = document.querySelector(".js-sub-menu");
console.log("lsssl", activeS)

window.addEventListener("load", () => {
/*----------------------------------------------------- 
page loader
--------------------------------------------------------*/

    document.querySelector(".js-page-loader").classList.add("fade-out");
setTimeout(() =>{
    document.querySelector(".js-page-loader").style.display = "none";
}, 600);
});


/*----------------------------------------------------- 
testimonial slider
--------------------------------------------------------*/
function testimonialSlider(){
    const carouselOne = document.getElementById('carouselOne');
    if(carouselOne){ 
        carouselOne.addEventListener('slid.bs.carousel', function() {
            const activeItem = this.querySelector(".active");
            document.querySelector(".js-testimonial-img").src =
            activeItem.getAttribute("data-js-testimonial-img");
          })
    }
}
testimonialSlider();

/*------------------------------------------------
course preview video
--------------------------------------------------*/


function coursePreviewVideo(){
    const coursePreviewModal = document.querySelector(".js-course-preview-modal"); // Fixed variable name here
    if(coursePreviewModal){ 
        coursePreviewModal.addEventListener("shown.bs.modal", function(){
            this.querySelector(".js-course-preview-video").play();
            this.querySelector(".js-course-preview-video").currentTime = 0;
        });

        coursePreviewModal.addEventListener("hide.bs.modal", function(){
            this.querySelector(".js-course-preview-video").pause();
        });
    }
}

coursePreviewVideo();

/*--------------------------------------------
    header menu
-------------------------------------------*/


// ********** chtgpt running code *********

// function headerMenu() {
//     const menu = document.querySelector(".menu"); // Change the selector to match your HTML structure
//     const menuCollapseBreakpoint = 991;
  
//     function collapse() {
//       const activeSubMenu = menu.querySelector(".active .js-sub-menu");
//       if (activeSubMenu) {
//         activeSubMenu.removeAttribute("style");
//       }
//       const activeItem = menu.querySelector(".active");
//       if (activeItem) {
//         activeItem.classList.remove("active");
//       }
//     }
  
//     menu.addEventListener("click", (event) => {
//       const { target } = event;
  
//       if (
//         target.classList.contains("js-toggle-sub-menu") &&
//         window.innerWidth <= menuCollapseBreakpoint
//       ) {
//         event.preventDefault();
  
//         if (menu.querySelector(".active")) {
//           collapse();
//         }
  
//         target.classList.add("active");
//         const subMenu = target.nextElementSibling;
//         if (subMenu) {
//           subMenu.style.maxHeight = subMenu.scrollHeight + "px";
//         }
//       }
  
//       // Open sub-menu on sub-menu-item click
//       if (target.classList.contains("sub-menu-item")) {
//         const subMenu = target.closest(".js-sub-menu");
//         if (subMenu) {
//           subMenu.style.maxHeight = subMenu.scrollHeight + "px";
//           const parentItem = subMenu.previousElementSibling;
//           if (parentItem) {
//             parentItem.classList.add("active");
//           }
//         }
//       }
//     });
//   }
  
//   headerMenu();
  

//

function headerMenu() {
    const menu = document.querySelector(".header-menu");
    const backdrop = document.querySelector(".js-header-backdrop");
    const menuCollapseBreakpoint = 991;
  
    function toggleMenu() {
      menu.classList.toggle("open");
      console.log("open")
      backdrop.classList.toggle("active"); // Toggle backdrop visibility
      document.body.classList.toggle("overflow-hidden");
    }
  

    document.querySelectorAll(".js-header-manu-toggler").forEach((item) => {
      item.addEventListener("click", toggleMenu);
    });
  
    //close the menu by clicking outside off it
    backdrop.addEventListener("click", toggleMenu);



    function collapse() {
      const activeSubMenu = menu.querySelector(".js-sub-menu");
      const activeTSM = menu.querySelector(".js-toggle-sub-menu.active");
    //   activeSubMenu.removeAttribute("style");
      
     
      if (activeTSM) {
        activeSubMenu.removeAttribute("style");
        // activeSubMenu.style.maxHeight = 0;
      }

      const activeItem = menu.querySelector(".active");
      if (activeItem) {
        activeItem.classList.toggle("active");
      }
    }
  
    menu.addEventListener("click", (event) => {
      const { target } = event;
  
      if (
        target.classList.contains("js-toggle-sub-menu") &&
        window.innerWidth <= menuCollapseBreakpoint
      ) {
        event.preventDefault();
  
        if (target.parentElement.classList.contains("active")) {
          collapse();
          return;
        }
  
        if (menu.querySelector(".active")) {
          collapse();
        }
  
        target.classList.add("active");
        const subMenu = target.nextElementSibling;
        if (subMenu) {
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
    });
  

  //when resizing window
  window.addEventListener("resize", function(){
    if(this.innerWidth > menuCollapseBreakpoint && menu.classList.contains("open")){
        toggleMenu();
    }
    if(this.innerWidth > menuCollapseBreakpoint && menu.querySelector(".active")){
        collapse();
    }
    
  });
}

headerMenu();
  


//





// function headerMenu() {
//     const menu = document.querySelector(".menu");
//     const backdrop = document.querySelector(".js-header-backdrop");
//     const menuCollapseBreakpoint = 991;

//     function toggleMenu(){
//         menu.classList.toggle("open");
//         document.body.classList.toggle("overflow-hidden");
//     }

//     document.querySelectorAll(".js-header-menu-toggler").forEach((item) => {
//         item.addEventListener("click", toggleMenu);

//     });
  
//     function collapse() {
//       const activeSubMenu = menu.querySelector(".active .js-sub-menu");
//       if (activeSubMenu) {
//         activeSubMenu.removeAttribute("style");
//       }
//       const activeItem = menu.querySelector(".active");
//       if (activeItem) {
//         activeItem.classList.remove("active");
//       }
//     }
  
//     menu.addEventListener("click", (event) => {
//       const { target } = event;
  
//       if (
//         target.classList.contains("js-toggle-sub-menu") &&
//         window.innerWidth <= menuCollapseBreakpoint
//       ) {
//         event.preventDefault();

//         if(target.parentElement.classList.contains("active")){
//             collapse();
//             return;
//         }
  
//         if (menu.querySelector(".active")) {
//           collapse();
//         }
  
//         target.classList.add("active");
//         const subMenu = target.nextElementSibling;
//         if (subMenu) {
//           subMenu.style.maxHeight = subMenu.scrollHeight + "px";
//         }
//       }
//     });
//   }
  
//   headerMenu();
  





/*--------------------------------------------
    style switcher
-------------------------------------------*/
const styleSwitcher = document.querySelector(".js-style-switcher"),
styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", function(){
    styleSwitcher.classList.toggle("open");
    this.querySelector("i").classList.toggle("fa-times");
    this.querySelector("i").classList.toggle("fa-cog");
});



/*--------------------------------------------
    theme colors
-------------------------------------------*/
function themeColors(){
    const colorStyle = document.querySelector(".js-color-style"),
    themeColorsContainer = document.querySelector(".js-theme-colors");

    themeColorsContainer.addEventListener("click", ({target}) => {
        if(target.classList.contains("js-theme-color-item")){
            localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
            setColor();
        }
    });

    function setColor(){
        let path = colorStyle.getAttribute("href").split("/");
        path = path.slice(0, path.length-1);
        colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");


        if (document.querySelector(".js-theme-color-item.active")) {
            document.querySelector(".js-theme-color-item.active").classList.remove("active");
        }
        
        document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");
    }

    if(localStorage.getItem("color") !== null){
        setColor();
    }
    else{
        const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
        document.querySelector("[data-js-theme-color=" + defaultColor + "]").classList.add("active");
        
    }
}
themeColors();



/*------theme light & dark mode-------*/

function themelightDark() {
    const darkModeCheckbox = document.querySelector(".js-dark-mode");

    darkModeCheckbox.addEventListener("click", function () {
        if (this.checked) { 
            localStorage.setItem("theme-dark", "true");
        } else {
            localStorage.setItem("theme-dark", "false");
        }
        themeMode();
    });

    function themeMode() {
        if (localStorage.getItem("theme-dark") === "false") {
            document.body.classList.remove("t-dark");
        } else {
            document.body.classList.add("t-dark");
        }
    }
    if(localStorage.getItem("theme-dark") !== null){
        themeMode();
    }
    if(document.body.classList.contains("t-dark")){
        darkModeCheckbox.checked = true;
    }
}


themelightDark();


/*---------theme glass effect--------- */
function themeGlassEffect(){
    const glassEffectCheckbox = document.querySelector(".js-glass-effect"),
    glassStyle = document.querySelector(".js-glass-style");

    glassEffectCheckbox.addEventListener("click", function(){
        if(this.checked){
            localStorage.setItem("glass-effect", "true");
        }
        else{
            localStorage.setItem("glass-effect", "false");
        }
        glass();
    });

    function glass(){
        if(localStorage.getItem("glass-effect") === "true"){
            glassStyle.removeAttribute("disabled");
        }
        else{
            glassStyle.disabled = true;
        }
    }
    if(localStorage.getItem("glass-effect") !== null){
        glass();
    }
    if(!glassStyle.hasAttribute("disabled")){
        glassEffectCheckbox.checked = true;
    }
}
themeGlassEffect();