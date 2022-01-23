$(document).ready(function(){

 /*=====COUNTER=======*/
    
    $('.counter').counterUp({
    delay: 10,
    time: 1000
});

 /*============OWL-CAROUSEL==========*/
    
    $('.brand-item').owlCarousel({
        
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    
    
     /*============OWL-CAROUSEL==========*/
    
    $('.testimonial-active').owlCarousel({
        
        loop:true,
        autoplay:true,
        dots:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});
    
/*===HAMBARG-MENU=========*/


 function openNav(){
      document.getElementById("mynav").style.width="100%";
  }

function closeNav(){
      document.getElementById("mynav").style.width="0%";
  }


/*========BROWSER-COMPATIBILITY===========*/

$("a").on("click", function(event){
        
        if(this.hash !== ""){
            event.preventDefault();
            
            var hash = this.hash;
            
            $('html, body').animate({
                   scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
                
            });
             
            }
                
    });

/*=========Animation-JS==========*/

 new WOW().init();





















