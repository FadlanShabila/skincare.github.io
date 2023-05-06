$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true
    });
});


function startSlides(start, end, delay) {
        setTimeout(slideshow(start,start,end, delay), delay);
    }
    function slideshow(frame, start, end, delay) {
        return (function() {
        $('#slideshow' + frame).fadeOut();
        if (frame == end) { frame = start; } else { frame += 1; }
        setTimeout(function(){$('#slideshow' + frame ).fadeIn();}, 750);
        setTimeout(slideshow(frame, start, end, delay), delay + 750);
    })
    }
    // usage: startSlides(first frame, end frame, delay time);
    startSlides(1, 3, 5000);