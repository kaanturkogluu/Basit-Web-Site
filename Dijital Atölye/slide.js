$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
            pauseOnHover: false,
            responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});


 
 
 
function yaz(){
    document.querySelector('#video-container').classList.toggle('video-aktif');
}
 function play() { 
    var myVideo = document.getElementById("video1"); 
   if (myVideo.paused) 
     myVideo.play(); 
   else 
     myVideo.pause(); 
 } 
 


 
 
 
  