var elemnt = document.getElementById("menu");
           var main_elm = document.querySelector("main");
           var header_class = document.querySelector("header");
           var menu_close = document.querySelector(".menu-icon:not(.res)");

           
           function openmenu(){
                document.getElementById("menu").classList.toggle("show");
                document.getElementById("header").classList.toggle("header-show");
                document.getElementById("main").classList.toggle("display-main");
                document.getElementById("icon").classList.toggle("close-menu");
            }

            function sliderPluggin(activeslide = 0) {
                const slides = document.querySelectorAll('.slide');
                
                slides[activeslide].classList.add('active');
              
                function clearActiveClasses() {
                  slides.forEach((slide) => {
                    slide.classList.remove('active');
                  });
                }
              
                for (const slide of slides) {
                  slide.addEventListener('click', () => {
                    clearActiveClasses();
                    slide.classList.add('active');
                  });
                }
              }
              
              sliderPluggin(0);