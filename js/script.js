//wow js
 wow = new WOW(
 {
   boxClass:     'wow',      // default
  animateClass: 'animated', // default
 offset:       0,          // default
  mobile:       true,       // default
 live:         true        // default
   }
   )
   wow.init();


//counter up
$(document).ready(function(){
	$('.counter').counterUp({
                delay: 10,
                time: 1000
            });
});

$(document).ready(function(){
    $('.num').counterUp({
                delay: 10,
                time: 1000
            });
});



