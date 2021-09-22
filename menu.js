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

        // Background color js here

        var cardBlock = document.getElementsByClassName("cards-block");
        var colorArray = ['#f4eeea', '#ffded3', '#d3f2fb', '#d5f6e9'];
            
        for(var i = 0; i < colorArray.length; i++){
            cardBlock[i].style.backgroundColor = colorArray[i];
        }
        
        // tabs structure

        var tabLinks = document.querySelectorAll(".tab-list");
        var tabContent = document.querySelectorAll(".tab-content-inner");

        tabLinks.forEach(function(el) {
            el.addEventListener("click", openTabs);
        });

        function openTabs(el){
            var btnTarget = el.currentTarget;
            var block = btnTarget.dataset.block;

            tabContent.forEach(function(el){
                el.classList.remove("active");
            });

            tabLinks.forEach(function(el){
                el.classList.remove("active");
            });

            document.querySelector("#" + block).classList.add("active");

            btnTarget.classList.add("active");
        }

        // Equal height js 

        function init() {
  
            var i = 0;
            var items = document.querySelectorAll(".cards-block");
            
            var newHeight = 0;
            for (i = 0; i < items.length; i++) {
                if(newHeight < items[i].offsetHeight) {
                    newHeight =  items[i].offsetHeight;
                }
                items[i].style.height = newHeight + "px";
                console.log(items[i].style.height);

            }
        }

        init();