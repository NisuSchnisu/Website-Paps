$("document").ready(function(){  
/*scroll funktion*/
  $(window).on("scroll", function(){

      var wScroll = $(this).scrollTop();


/*Schrift parallax*/
      $('#danielmaurer').css({
        'transform' : 'translate(0px, '+ wScroll /4 +'%)'
      });

/*Logo parallax*/
      $('#DM-logo').css({
        'transform' : 'translate(0px, '+ wScroll /20 +'%)'
      });

//Gallerie
      

  });//end Scroll
      
 

 
//Smooth Scrolle

  $("#startknopf").on("click", function() {
    $('html,body').animate({
      scrollTop: $(".übermich").offset().top},
        'slow');
  });


//navmenü
  $('#toggle').on("click", function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });
 


  
  






})//end vo de document ready funktion





















